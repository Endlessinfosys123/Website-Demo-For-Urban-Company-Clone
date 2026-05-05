import redisClient from '../utils/redis';

class OTPService {
  private OTP_EXPIRY = 600; // 10 minutes

  async sendOTP(phone: string): Promise<string> {
    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Store in Redis with phone as key
    await redisClient.set(`otp:${phone}`, otp, 'EX', this.OTP_EXPIRY);
    
    // LOGIC TO SEND SMS VIA MSG91/TWILIO
    // For now, we log it to console as per production-ready patterns before actual API integration
    console.log(`[OTP] Sent OTP ${otp} to ${phone}`);
    
    return otp;
  }

  async verifyOTP(phone: string, otp: string): Promise<boolean> {
    const storedOtp = await redisClient.get(`otp:${phone}`);
    
    if (!storedOtp) return false;
    
    if (storedOtp === otp) {
      // Delete OTP after verification
      await redisClient.del(`otp:${phone}`);
      return true;
    }
    
    return false;
  }
}

export default new OTPService();
