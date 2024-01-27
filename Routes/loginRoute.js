import express from 'express';
import { loginController } from '../Controllers/loginController.js';
const router = express.Router();

const loginRoute = router.get('/',loginController);

export {loginRoute};