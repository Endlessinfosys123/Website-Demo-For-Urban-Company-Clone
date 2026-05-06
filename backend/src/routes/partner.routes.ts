import { Router } from 'express';
import { 
  registerPartner, 
  getPartnerDashboard, 
  updateAvailability, 
  getPartnerJobs 
} from '../controllers/partner.controller';
import { protect, authorize } from '../middleware/auth.middleware';

const router = Router();

router.use(protect);

router.post('/register', registerPartner);

// Partner only routes
router.get('/dashboard', authorize('PARTNER', 'ADMIN'), getPartnerDashboard);
router.get('/jobs', authorize('PARTNER', 'ADMIN'), getPartnerJobs);
router.put('/availability', authorize('PARTNER', 'ADMIN'), updateAvailability);

export default router;
