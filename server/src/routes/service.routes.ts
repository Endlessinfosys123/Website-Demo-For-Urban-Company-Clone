import { Router } from 'express';
import { getAllServices, getServiceBySlug, searchServices, createService } from '../controllers/service.controller';
import { protect, authorize } from '../middleware/auth.middleware';

const router = Router();

router.get('/', getAllServices);
router.get('/search', searchServices);
router.get('/:slug', getServiceBySlug);

// Admin only
router.post('/', protect, authorize('ADMIN'), createService);

export default router;
