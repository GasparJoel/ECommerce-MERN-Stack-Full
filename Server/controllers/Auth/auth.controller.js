import  bcrypt  from "bcryptjs";
import  jwt  from "jsonwebtoken";
import User from "../../models/User.js";


//Register
export const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;
  
    try {
      // Verificamos la duplicidad del email
      const userFound = await User.findOne({ email });
      if (userFound) {
        return res.status(400).json({
          success: false,
          message: "The email is already in use",
        });
      }
  
      // Encriptar contraseña
      const hashPassword = await bcrypt.hash(password, 12);
  
      // Crear nuevo usuario
      const newUser = new User({
        userName,
        email,
        password: hashPassword,
      });
  
      // Guardar nuevo usuario
      const newUserSaved = await newUser.save();
      res.status(201).json({
        success: true,
        message: "Registration successful",
      });
  
      console.log(newUserSaved);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "An error occurred while processing your request",
      });
    }
  };

//Login

export const login =async(req,res)=>{
    const {email,password} =req.body 



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