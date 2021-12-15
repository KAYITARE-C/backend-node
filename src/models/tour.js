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
       tripDescription:String
    },

    {
        timestamps:true,
    }
    
)
const tour=mongoose.model('Tour',tourSchema);

export default tour;