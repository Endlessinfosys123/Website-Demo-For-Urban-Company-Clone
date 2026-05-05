import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllServices = async (req: Request, res: Response) => {
  try {
    const { category, city, featured } = req.query;
    
    const where: any = { isActive: true };
    if (category) where.categoryId = category as string;
    if (featured) where.isFeatured = featured === 'true';
    if (city) where.cityIds = { has: city as string };

    const services = await prisma.service.findMany({
      where,
      include: {
        category: true,
        packages: {
          where: { isActive: true },
          orderBy: { sortOrder: 'asc' }
        }
      }
    });
    res.status(200).json({ success: true, data: services });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getServiceBySlug = async (req: Request, res: Response) => {
  try {
    const service = await prisma.service.findUnique({
      where: { slug: req.params.slug },
      include: {
        category: true,
        packages: {
          where: { isActive: true },
          orderBy: { sortOrder: 'asc' }
        },
        reviews: {
          take: 5,
          orderBy: { createdAt: 'desc' },
          include: { user: { select: { name: true, profilePhoto: true } } }
        }
      }
    });
    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }
    res.status(200).json({ success: true, data: service });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const searchServices = async (req: Request, res: Response) => {
  try {
    const { q } = req.query;
    if (!q) return res.status(200).json({ success: true, data: [] });

    const services = await prisma.service.findMany({
      where: {
        OR: [
          { name: { contains: q as string, mode: 'insensitive' } },
          { description: { contains: q as string, mode: 'insensitive' } }
        ],
        isActive: true
      },
      include: { category: true }
    });
    res.status(200).json({ success: true, data: services });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createService = async (req: Request, res: Response) => {
  try {
    const service = await prisma.service.create({
      data: req.body
    });
    res.status(201).json({ success: true, data: service });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
