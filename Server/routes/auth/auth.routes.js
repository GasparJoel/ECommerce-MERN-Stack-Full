import { Router } from "express";
import * as controllerAuth from '../../controllers/Auth/auth.controller.js';

const  router = Router();

router.post('/register',controllerAuth.registerUser)


export default router