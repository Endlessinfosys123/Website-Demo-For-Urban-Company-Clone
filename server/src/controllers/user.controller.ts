import { Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../middleware/auth.middleware';

const prisma = new PrismaClient();

// Profile
export const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user?.id },
      include: {
        addresses: true,
        _count: {
          select: { bookings: true }
        }
      }
    });
    res.status(200).json({ success: true, data: user });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateProfile = async (req: AuthRequest, res: Response) => {
  try {
    const { name, email, profilePhoto } = req.body;
    const user = await prisma.user.update({
      where: { id: req.user?.id },
      data: { name, email, profilePhoto }
    });
    res.status(200).json({ success: true, data: user });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Addresses
export const getAddresses = async (req: AuthRequest, res: Response) => {
  try {
    const addresses = await prisma.address.findMany({
      where: { userId: req.user?.id }
    });
    res.status(200).json({ success: true, data: addresses });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addAddress = async (req: AuthRequest, res: Response) => {
  try {
    const address = await prisma.address.create({
      data: {
        ...req.body,
        userId: req.user!.id
      }
    });
    res.status(201).json({ success: true, data: address });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateAddress = async (req: AuthRequest, res: Response) => {
  try {
    const address = await prisma.address.update({
      where: { id: req.params.id, userId: req.user?.id },
      data: req.body
    });
    res.status(200).json({ success: true, data: address });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteAddress = async (req: AuthRequest, res: Response) => {
  try {
    await prisma.address.delete({
      where: { id: req.params.id, userId: req.user?.id }
    });
    res.status(200).json({ success: true, message: 'Address deleted' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Wallet
export const getWallet = async (req: AuthRequest, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user?.id },
      select: { walletBalance: true, transactions: { orderBy: { createdAt: 'desc' } } }
    });
    res.status(200).json({ success: true, data: user });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
