import mongoose from 'mongoose';

const tourSchema=new mongoose.Schema(
    {
        title:String,
        description:String,
        seats:Number,
        price:Number,
        available:Number,
        images:[{
            type: String,

        },
           
        ],
        dateScheduled:Date,
        dueDate:Date,
        phone:String,
       tripDescription:String,
       user:{
           type:mongoose.Schema.ObjectId,
           ref:"User",
           
       }
    },

    {
        timestamps:true,
    }
    
)
//idufasha kubona daata zi umu user not it's id
tourSchema.pre(/^find/,function(next){
    this.populate({
        path:"user",
        select:"lastname email address"
    })
    next();
})
const tour=mongoose.model('Tour',tourSchema);

export default tour;