import { Router } from 'express';
import { getAllCategories, getCategoryBySlug, createCategory, updateCategory } from '../controllers/category.controller';
import { protect, authorize } from '../middleware/auth.middleware';

const router = Router();

router.get('/', getAllCategories);
router.get('/:slug', getCategoryBySlug);

// Admin only
router.post('/', protect, authorize('ADMIN'), createCategory);
router.put('/:id', protect, authorize('ADMIN'), updateCategory);

export default router;
