import { Router } from 'express';
import * as authController from '../controllers/auth.controller';

const router = Router();

router.post('/send-otp', authController.sendOTP);
router.post('/verify-otp', authController.verifyOTP);
router.post('/refresh-token', authController.refreshToken);

export default router;
