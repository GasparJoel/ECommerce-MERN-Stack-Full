import app from "./app.js"
import { connectDB } from "./db.js"

connectDB()

const PORT = process.env.PORT ||5000

app.listen(5000)
console.log(`Server PORT ${PORT} Coneccted`)