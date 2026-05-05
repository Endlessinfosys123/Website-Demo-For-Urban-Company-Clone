import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
});

class PaymentService {
  async createOrder(amount: number, currency: string = 'INR', receipt: string) {
    const options = {
      amount: Math.round(amount * 100), // Razorpay expects amount in paise
      currency,
      receipt,
    };

    try {
      const order = await razorpay.orders.create(options);
      return order;
    } catch (error) {
      throw error;
    }
  }

  async verifyPayment(orderId: string, paymentId: string, signature: string) {
    const crypto = require('crypto');
    const secret = process.env.RAZORPAY_KEY_SECRET || '';
    const hmac = crypto.createHmac('sha256', secret);
    
    hmac.update(orderId + "|" + paymentId);
    const generatedSignature = hmac.digest('hex');
    
    return generatedSignature === signature;
  }
}

export default new PaymentService();
