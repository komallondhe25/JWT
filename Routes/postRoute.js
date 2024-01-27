import express from 'express';
import { postController} from '../Controllers/postController.js';
import { AuthenticateToken } from '../utils/auth.js';

const router = express.Router();

const postRoute = router.post('/',AuthenticateToken, postController);

export {postRoute};