import { Router } from "express";
import * as controllerAuth from '../../controllers/Auth/auth.controller.js';

const  router = Router();

router.post('/register',controllerAuth.registerUser)
router.post('/login',controllerAuth.loginUser)
router.post('/logoutUser',controllerAuth.logoutUser)
router.get('/check-auth',controllerAuth.authMiddleware,(req,res)=>{
    const user =req.user
    res.status(200).json({
        success:true,
        message :' Authenticatated User!',
        user,
    })
})


export default router