import { Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../middleware/auth.middleware';

const prisma = new PrismaClient();

export const registerPartner = async (req: AuthRequest, res: Response) => {
  try {
    const { kycDocuments, categories, cities, bankDetails } = req.body;

    const partner = await prisma.partner.create({
      data: {
        userId: req.user!.id,
        kycDocuments,
        bankDetails,
        categories: { connect: categories.map((id: string) => ({ id })) },
        cities: { connect: cities.map((id: string) => ({ id })) }
      }
    });

    // Update user role to PARTNER
    await prisma.user.update({
      where: { id: req.user!.id },
      data: { role: 'PARTNER' }
    });

    res.status(201).json({ success: true, data: partner });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getPartnerDashboard = async (req: AuthRequest, res: Response) => {
  try {
    const partner = await prisma.partner.findUnique({
      where: { userId: req.user?.id },
      include: {
        _count: {
          select: { bookings: true }
        }
      }
    });

    if (!partner) {
      return res.status(404).json({ success: false, message: 'Partner profile not found' });
    }

    const earnings = await prisma.booking.aggregate({
      where: { partnerId: partner.id, status: 'COMPLETED' },
      _sum: { partnerAmount: true }
    });

    res.status(200).json({ 
      success: true, 
      data: { 
        partner, 
        totalEarnings: earnings._sum?.partnerAmount || 0 
      } 
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateAvailability = async (req: AuthRequest, res: Response) => {
  try {
    const { isOnline } = req.body;
    await prisma.partner.update({
      where: { userId: req.user?.id },
      data: { isOnline }
    });
    res.status(200).json({ success: true, message: 'Availability updated' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getPartnerJobs = async (req: AuthRequest, res: Response) => {
  try {
    const partner = await prisma.partner.findUnique({ where: { userId: req.user?.id } });
    if (!partner) return res.status(404).json({ success: false, message: 'Partner not found' });

    const bookings = await prisma.booking.findMany({
      where: { partnerId: partner.id },
      include: { 
        service: true, 
        package: true, 
        address: true, 
        user: { select: { name: true, phone: true } } 
      },
      orderBy: { scheduledAt: 'asc' }
    });
    res.status(200).json({ success: true, data: bookings });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
