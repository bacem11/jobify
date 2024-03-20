import express from 'express';
const router = express.Router();

import authController from '../controllers/authController.js';

router.route('/register').post(authController.register);
router.route('/login').post(authController.login);
router.route('/updateUser').patch(authController.updateUser);

export default router;
