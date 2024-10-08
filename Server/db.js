import  Mongose  from "mongoose";

export const connectDB =async()=>{
    try {
        await Mongose.connect('mongodb+srv://admin:admin123@cluster0.ysser.mongodb.net/')
        console.log('DB is connected')
    } catch (error) {
        console.log(error)
    }
}
 