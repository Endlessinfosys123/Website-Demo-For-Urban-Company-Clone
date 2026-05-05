import { Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../middleware/auth.middleware';

const prisma = new PrismaClient();

export const registerPartner = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ success: false, message: 'Unauthorized' });

    const { categoryIds, serviceArea } = req.body;

    const partner = await prisma.partner.create({
      data: {
        userId,
        kycStatus: 'PENDING',
        serviceArea,
        services: {
          create: categoryIds.map((id: string) => ({ categoryId: id }))
        }
      }
    });

    // Update user role to PARTNER
    await prisma.user.update({
      where: { id: userId },
      data: { role: 'PARTNER' }
    });

    res.status(201).json({ success: true, data: partner });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getPartnerDashboard = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    const partner = await prisma.partner.findUnique({
      where: { userId },
      include: {
        bookings: {
          include: {
            package: { include: { service: true } },
            user: true,
            address: true
          }
        },
        services: { include: { category: true } }
      }
    });

    if (!partner) return res.status(404).json({ success: false, message: 'Partner profile not found' });

    res.json({ success: true, data: partner });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
