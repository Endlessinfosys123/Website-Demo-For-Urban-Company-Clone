import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// In-memory OTP store (Use Redis in production)
const otpStore = new Map<string, { otp: string, expiresAt: number }>();

export const generateOTP = (phone: string) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes expiry
  otpStore.set(phone, { otp, expiresAt });
  
  // LOGIC TO SEND SMS VIA TWILIO/MSG91 WOULD GO HERE
  console.log(`[OTP] Sent OTP ${otp} to ${phone}`);
  
  return otp;
};

export const verifyOTP = (phone: string, otp: string) => {
  const record = otpStore.get(phone);
  
  if (!record) return false;
  if (record.expiresAt < Date.now()) {
    otpStore.delete(phone);
    return false;
  }
  
  if (record.otp === otp) {
    otpStore.delete(phone);
    return true;
  }
  
  return false;
};

export const findOrCreateUser = async (phone: string) => {
  let user = await prisma.user.findUnique({
    where: { phone }
  });
  
  if (!user) {
    user = await prisma.user.create({
      data: { phone }
    });
  }
  
  return user;
};
