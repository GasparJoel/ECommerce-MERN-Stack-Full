import  mongoose, { model }  from "mongoose";

const UserSchema=new mongoose.Schema({
    userName:{
        type: String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    rol:{
        type:String,
        default:'user'
    }
},{
    timestamps:true 
});

export default mongoose.model('User',UserSchema)