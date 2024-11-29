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

export const loginUser =async(req,res)=>{
    const {email,password} =req.body 

    try {
      //Se verifica la existencia del correo
      const  checkUser = await User.findOne({email})
      if (!checkUser) return res.json({
        success:false,
        message:"User doesn't exists! please register firts"
      })

      //Revisamos las contraseña una vez que pase el email
      const checkPasswordMatch = await bcrypt.compare(password,checkUser.password)
      if(!checkPasswordMatch) return res.json({
        success:false,
        message : "incorrect password please try again"
      })

      //Si todo esta correcto entonces 
      //Creamos su token
      const token = jwt.sign({
        //Datos que quieres incluir en el token
        id:checkUser._id, 
        role :checkUser.rol,
        email: checkUser.email
        //Clave y tiempo de duracion
      },'CLIENT_SECRET_KEY',{expiresIn:'60m'})

      res.cookie('token',token,{httpOnly:true,secure:false}).json({
        success:true,
        message :'logged successfully',
        user:{
          email:checkUser.email,
          role : checkUser.rol,
          id:checkUser._id
        }
      })
        
    } catch (error) {
       console.log(error)
       res.status(500).json({
           success:false,
           message:'some error occured'
       })
    }
}
//logout

export const  logoutUser = async(req,res)=>{
  res.clearCookie('token').json({
    success: true,
    message : 'logged out successfully'
  })
}
//auth Midleware si actualiza la pagina y no se salga de la cuenta 
//hasta que termine su tiempo de token 

export const authMiddleware = (req, res, next) => {
  // Buscar el token en las cookies
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized user",
    });
  }

  // Decodificar y verificar el token
  try {
    const decoded = jwt.verify(token, 'CLIENT_SECRET_KEY'); // Usa una variable de entorno para la clave secreta
    req.user = decoded; // Adjuntar los datos del usuario al request
    next(); // Continuar con el siguiente middleware o controlador
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized user!",
      error: error.message, // Opcional: para depuración
    });
  }
};