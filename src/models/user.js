import mongoose from 'mongoose';

const userSchema=new mongoose.Schema(
    {
        firstname:String,
        lastname:String,
        email:{
            type:String,
            required:true,
            unique:true //ntabwo ushobora gukoresha email ebyiri zisa

        },
        password:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            default:"Rwanda"
        },
        gender:{
            type:String,
            enum:["male","female","other","not say"],
        }

    },
    {
        timestamps:true,
    }
    
)
const user=mongoose.model('User',userSchema);

export default user;