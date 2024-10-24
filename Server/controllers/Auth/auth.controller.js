import  bcrypt  from "bcryptjs";
import  jwt  from "jsonwebtoken";
import User from "../../models/User.js";


//Register
export const registerUser = async(req,res)=>{
     const { userName, email,password }=req.body

     try {
        //Verificamos la duplicidad de email and username 
        const userFound = await User.findOne({email})
        if(userFound) return res.status(400).json({message:"The email is duplicated"})
        //Incriptar password
        const hashPassword = await bcrypt.hash(password,12);
        //Crear nuevo usuario
        const newUser = new User({
            userName,
            email,
            password:hashPassword
        })
        //almacenar nuevo usuario
       const newUserSaved = await newUser.save()
        res.status(201).json({
            id:newUserSaved._id,
            name:newUserSaved.userName,
            email:newUserSaved.email,
            rol :newUserSaved.rol,
            createdAt:newUserSaved.createdAt,
            updatedAt:newUserSaved.updatedAt,
        })

        console.log(newUser)
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