import { Router } from 'express';
import * as serviceController from '../controllers/service.controller';

const router = Router();

router.get('/categories', serviceController.getCategories);
router.get('/categories/:slug', serviceController.getCategoryBySlug);
router.get('/services/:slug', serviceController.getServiceBySlug);

export default router;
