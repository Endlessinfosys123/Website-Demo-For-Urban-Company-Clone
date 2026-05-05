import { Router } from 'express';
import * as partnerController from '../controllers/partner.controller';
import { authenticate, authorize } from '../middleware/auth.middleware';

const router = Router();

router.use(authenticate);

router.post('/register', partnerController.registerPartner);
router.get('/dashboard', authorize(['PARTNER']), partnerController.getPartnerDashboard);

export default router;
