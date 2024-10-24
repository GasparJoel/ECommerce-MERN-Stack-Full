import  express  from "express";
import  cookieParser  from "cookie-parser";
import  cors  from "cors";
import morgan from "morgan";
import  authRouter  from "./routes/auth/auth.routes.js";

const app = express()


app.use(cors({
    origin:'http://localhost:5173/',
    methods: ['GET','POST','DELETE','PUT'],
    allowedHeaders:[
        "Content-type",
        "Authorization",
        'Cache-Control',
        'Expires',
        'Pragma'
    ],
    credentials :true
}))
app.use(cookieParser())
app.use(express.json())
app.use(morgan('dev'))

//Routers 
app.use('/api',authRouter)

export default app