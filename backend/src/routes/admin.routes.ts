import { Router } from 'express';
import { getAdminStats, getAllUsers, getAllPartners, updateKYCStatus } from '../controllers/admin.controller';
import { protect, authorize } from '../middleware/auth.middleware';

import { Role } from '@prisma/client';

const router = Router();

router.use(protect, authorize('ADMIN', 'OPS_MANAGER' as Role));

router.get('/stats', getAdminStats);
router.get('/users', getAllUsers);
router.get('/partners', getAllPartners);
router.put('/partners/:id/kyc', updateKYCStatus);

export default router;
