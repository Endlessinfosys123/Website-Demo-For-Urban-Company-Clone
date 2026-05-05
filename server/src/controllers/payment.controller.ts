import { Response } from 'express';
import { PrismaClient, PaymentStatus, BookingStatus } from '@prisma/client';
import { AuthRequest } from '../middleware/auth.middleware';
import PaymentService from '../services/PaymentService';

const prisma = new PrismaClient();

export const createRazorpayOrder = async (req: AuthRequest, res: Response) => {
  try {
    const { bookingId } = req.body;
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId }
    });

    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    const order = await PaymentService.createOrder(
      Number(booking.totalAmount), 
      'INR', 
      booking.bookingNumber
    );

    await prisma.booking.update({
      where: { id: bookingId },
      data: { razorpayOrderId: order.id }
    });

    res.status(200).json({ success: true, data: order });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const verifyPayment = async (req: AuthRequest, res: Response) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = req.body;

    const isValid = await PaymentService.verifyPayment(
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature
    );

    if (!isValid) {
      return res.status(400).json({ success: false, message: 'Invalid payment signature' });
    }

    // Update booking and payment status
    await prisma.booking.update({
      where: { id: bookingId },
      data: { 
        paymentStatus: 'PAID' as PaymentStatus,
        status: 'CONFIRMED' as BookingStatus
      }
    });

    res.status(200).json({ success: true, message: 'Payment verified successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
