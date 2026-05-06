import { Router } from 'express';
import { 
  getProfile, updateProfile, 
  getAddresses, addAddress, updateAddress, deleteAddress,
  getWallet 
} from '../controllers/user.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();

router.use(protect);

router.get('/profile', getProfile);
router.put('/profile', updateProfile);

router.get('/addresses', getAddresses);
router.post('/addresses', addAddress);
router.put('/addresses/:id', updateAddress);
router.delete('/addresses/:id', deleteAddress);

router.get('/wallet', getWallet);

export default router;
