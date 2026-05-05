import jwt, { SignOptions } from 'jsonwebtoken';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient() as any;

class AuthService {
  private static readonly JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key';
  private static readonly REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'refresh-secret-key';

  static generateTokens(user: User) {
    const payload = { id: user.id, role: user.role };
    
    const accessToken = jwt.sign(payload, this.JWT_SECRET, { 
      expiresIn: '1d' 
    } as SignOptions);
    
    const refreshToken = jwt.sign(payload, this.REFRESH_SECRET, { 
      expiresIn: '7d' 
    } as SignOptions);

    return { accessToken, refreshToken };
  }

  static async saveSession(userId: string, token: string, device?: string, ip?: string) {
    return prisma.session.create({
      data: {
        userId,
        token,
        device,
        ip,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
      }
    });
  }

  static async verifyAccessToken(token: string) {
    try {
      return jwt.verify(token, this.JWT_SECRET) as { id: string; role: string };
    } catch (error) {
      return null;
    }
  }

  static async verifyRefreshToken(token: string) {
    try {
      const decoded = jwt.verify(token, this.REFRESH_SECRET) as { id: string; role: string };
      const session = await prisma.session.findUnique({ where: { token } });
      
      if (!session || session.expiresAt < new Date()) {
        return null;
      }

      return decoded;
    } catch (error) {
      return null;
    }
  }

  static async revokeSession(token: string) {
    try {
      await prisma.session.delete({ where: { token } });
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default AuthService;
