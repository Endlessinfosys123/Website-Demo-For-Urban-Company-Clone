import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient() as any;

class WalletService {
  async credit(userId: string, amount: number, type: any, gatewayRef?: string, bookingId?: string) {
    return await prisma.$transaction(async (tx: any) => {
      const user = await tx.user.update({
        where: { id: userId },
        data: { walletBalance: { increment: amount } }
      });

      const transaction = await tx.transaction.create({
        data: {
          userId,
          amount,
          type,
          status: 'SUCCESS',
          gatewayRef,
          bookingId,
          idempotencyKey: `credit_${Date.now()}_${userId}`
        }
      });

      return { user, transaction };
    });
  }

  async debit(userId: string, amount: number, type: any, bookingId?: string) {
    return await prisma.$transaction(async (tx: any) => {
      const user = await tx.user.findUnique({ where: { id: userId } });
      
      if (!user || Number(user.walletBalance) < amount) {
        throw new Error('Insufficient wallet balance');
      }

      const updatedUser = await tx.user.update({
        where: { id: userId },
        data: { walletBalance: { decrement: amount } }
      });

      const transaction = await tx.transaction.create({
        data: {
          userId,
          amount,
          type,
          status: 'SUCCESS',
          bookingId,
          idempotencyKey: `debit_${Date.now()}_${userId}`
        }
      });

      return { user: updatedUser, transaction };
    });
  }
}

export default new WalletService();
