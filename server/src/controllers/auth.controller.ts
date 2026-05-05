import { Request, Response } from 'express';
import * as authService from '../services/auth.service';
import * as tokenUtil from '../utils/token';

export const sendOTP = async (req: Request, res: Response) => {
  try {
    const { phone } = req.body;
    if (!phone) {
      return res.status(400).json({ success: false, message: 'Phone number is required' });
    }

    const otp = authService.generateOTP(phone);
    
    res.json({
      success: true,
      message: 'OTP sent successfully',
      data: process.env.NODE_ENV === 'development' ? { otp } : {}
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const verifyOTP = async (req: Request, res: Response) => {
  try {
    const { phone, otp } = req.body;
    if (!phone || !otp) {
      return res.status(400).json({ success: false, message: 'Phone and OTP are required' });
    }

    const isValid = authService.verifyOTP(phone, otp);
    if (!isValid) {
      return res.status(401).json({ success: false, message: 'Invalid or expired OTP' });
    }

    const user = await authService.findOrCreateUser(phone);
    
    const accessToken = tokenUtil.generateAccessToken({ id: user.id, role: user.role });
    const refreshToken = tokenUtil.generateRefreshToken({ id: user.id });

    res.json({
      success: true,
      message: 'Logged in successfully',
      data: {
        user,
        accessToken,
        refreshToken
      }
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(400).json({ success: false, message: 'Refresh token is required' });
    }

    const decoded: any = tokenUtil.verifyRefreshToken(refreshToken);
    const accessToken = tokenUtil.generateAccessToken({ id: decoded.id, role: decoded.role });

    res.json({
      success: true,
      data: { accessToken }
    });
  } catch (error: any) {
    res.status(401).json({ success: false, message: 'Invalid refresh token' });
  }
};
