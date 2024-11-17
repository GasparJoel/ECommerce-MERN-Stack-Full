import { Router } from "express";
import * as controllerAuth from '../../controllers/Auth/auth.controller.js';

const  router = Router();

router.post('/register',controllerAuth.registerUser)
router.post('/login',controllerAuth.loginUser)


export default router