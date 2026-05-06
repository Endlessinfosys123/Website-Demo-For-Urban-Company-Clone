import { Router } from 'express';
import { createBooking, getMyBookings, getBookingDetail, updateBookingStatus } from '../controllers/booking.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();

router.use(protect);

router.post('/', createBooking as any);
router.get('/', getMyBookings as any);
router.get('/:id', getBookingDetail as any);
router.put('/:id/status', updateBookingStatus as any);

export default router;
