import TokenAuth from '../helpers/tokenAuth'

const isUserExist=async(req,res,next)=>{
    try{
        //kureba nimba token yayitanze
        const token=req.header("x-auth-token");
        if(!token){
            return res.status(400).json({error:"no token provided"})
        }
        //kureba nimba token wayatanze uhuye na database yacu
        const data=TokenAuth.decodeToken(token);
        req.user=data.user;
        return next()


    }
    catch(err){
        console.log(err)

    }
}
export default isUserExist;