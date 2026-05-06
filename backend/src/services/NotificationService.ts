import { PrismaClient } from '@prisma/client';
import redisClient from '../utils/redis';

const prisma = new PrismaClient() as any;

class NotificationService {
  async send(userId: string, type: any, title: string, body: string, data?: any) {
    try {
      // 1. Save to database
      const notification = await prisma.notification.create({
        data: {
          userId,
          type,
          title,
          body,
          data: data || {}
        }
      });

      // 2. Real-time emit if user is online
      console.log(`[Notification] To User ${userId}: ${title} - ${body}`);

      return notification;
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }

  async sendToSegment(role: string, title: string, body: string) {
    // Logic for broadcast notifications
    const users = await prisma.user.findMany({ where: { role: role as any } });
    for (const user of users) {
      await this.send(user.id, 'PROMO', title, body);
    }
  }
}

export default new NotificationService();
