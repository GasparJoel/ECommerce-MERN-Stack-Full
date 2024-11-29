import  Mongose  from "mongoose";

export const connectDB =async()=>{
    try {
        await Mongose.connect('mongodb://localhost/E-comerce')

        console.log('DB is connected')
    } catch (error) {
        console.log(error)
    }
}
 