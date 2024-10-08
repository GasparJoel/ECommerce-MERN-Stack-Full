import  express  from "express";
import  cookieParser  from "cookie-parser";
import  cors  from "cors";
import morgan from "morgan";
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
export default app