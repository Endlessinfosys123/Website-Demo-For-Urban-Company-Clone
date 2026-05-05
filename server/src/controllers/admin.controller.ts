import { Request, Response } from 'express';
import { PrismaClient, KYCStatus } from '@prisma/client';

const prisma = new PrismaClient();

export const getAdminStats = async (req: Request, res: Response) => {
  try {
    const totalUsers = await prisma.user.count({ where: { role: 'CUSTOMER' } });
    const totalPartners = await prisma.partner.count();
    const totalBookings = await prisma.booking.count();
    
    const revenue = await prisma.booking.aggregate({
      where: { status: 'COMPLETED' },
      _sum: { totalAmount: true, commissionAmount: true }
    });

    const pendingKYC = await prisma.partner.count({ where: { kycStatus: 'PENDING' } });

    res.status(200).json({
      success: true,
      data: {
        totalUsers,
        totalPartners,
        totalBookings,
        totalRevenue: revenue._sum?.totalAmount || 0,
        totalCommission: revenue._sum?.commissionAmount || 0,
        pendingKYC
      }
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: { _count: { select: { bookings: true } } },
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json({ success: true, data: users });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllPartners = async (req: Request, res: Response) => {
  try {
    const partners = await prisma.partner.findMany({
      include: { user: true, categories: true, cities: true },
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json({ success: true, data: partners });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateKYCStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const partnerId = req.params.id as string;

    const partner = await prisma.partner.update({
      where: { id: partnerId },
      data: { 
        kycStatus: status as KYCStatus,
        isActive: status === 'APPROVED'
      }
    });
    res.status(200).json({ success: true, data: partner });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
