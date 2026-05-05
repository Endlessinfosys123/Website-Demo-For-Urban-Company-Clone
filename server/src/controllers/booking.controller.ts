import { Request, Response } from 'express';
import { PrismaClient, BookingStatus } from '@prisma/client';
import { AuthRequest } from '../middleware/auth.middleware';
import MatchingEngine from '../services/MatchingEngine';
import { io } from '../index';

const prisma = new PrismaClient();

export const createBooking = async (req: AuthRequest, res: Response) => {
  try {
    const { 
      packageId, addressId, cityId, scheduledAt, 
      baseAmount, totalAmount, paymentMethod 
    } = req.body;

    const pkg = await prisma.package.findUnique({
      where: { id: packageId },
      include: { service: true }
    });

    if (!pkg) {
      return res.status(404).json({ success: false, message: 'Package not found' });
    }

    const booking = await prisma.booking.create({
      data: {
        userId: req.user!.id,
        serviceId: pkg.serviceId,
        packageId,
        addressId,
        cityId,
        scheduledAt: new Date(scheduledAt),
        baseAmount,
        totalAmount,
        commissionAmount: Number(totalAmount) * 0.2, // 20% default
        partnerAmount: Number(totalAmount) * 0.8,
        paymentMethod,
        status: 'PENDING'
      },
      include: {
        service: true,
        package: true,
        address: true
      }
    });

    // Run Matching Engine in background
    const partnerId = await MatchingEngine.findBestPartner(booking);
    
    if (partnerId) {
      await prisma.booking.update({
        where: { id: booking.id },
        data: { 
          partnerId, 
          status: 'PARTNER_ASSIGNED' 
        }
      });

      // Notify partner and user via Socket.io
      if (io) {
        io.to(booking.id).emit('booking:status_updated', { status: 'PARTNER_ASSIGNED' });
      }
    }

    res.status(201).json({ success: true, data: booking });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getMyBookings = async (req: AuthRequest, res: Response) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: { userId: req.user?.id },
      include: {
        service: true,
        package: true,
        partner: {
          include: { user: { select: { name: true, phone: true, profilePhoto: true } } }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json({ success: true, data: bookings });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getBookingDetail = async (req: AuthRequest, res: Response) => {
  try {
    const bookingId = req.params.id as string;
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        service: true,
        package: true,
        address: true,
        partner: {
          include: { user: { select: { name: true, phone: true, profilePhoto: true } } }
        },
        review: true
      }
    });

    if (!booking || (booking.userId !== req.user?.id && req.user?.role === 'CUSTOMER')) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    res.status(200).json({ success: true, data: booking });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateBookingStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const bookingId = req.params.id as string;

    const booking = await prisma.booking.update({
      where: { id: bookingId },
      data: { status: status as BookingStatus }
    });

    // Emit event
    if (io) {
      io.to(booking.id).emit('booking:status_updated', { status });
    }

    res.status(200).json({ success: true, data: booking });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
