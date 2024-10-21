import { bcrypt } from "bcryptjs";
import { jwt } from "jsonwebtoken";
import User from "../../models/User";


//Register
export const register = async(req,res)=>{
     const { userName, email,password }=req.body

     try {
        //Incriptar password
        const hashPassword = await bcrypt.hash(password,12);
        //Crear nuevo usuario
        const newUser = new User({
            userName,
            email,
            password:hashPassword
        })
        //almacenar nuevo usuario
        await newUser.save()
        res.status(200).json({
            success:false,
            message:'registration successfull'
        })
     } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:'some error occured'
        })
     }
}

//Login

export const login =async(req,res)=>{
    try {
        
    } catch (error) {
       console.log(error)
       res.status(500).json({
           success:false,
           message:'some error occured'
       })
    }
}
//logout

//auth Midleware