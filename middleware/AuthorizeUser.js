const jwt = require('jsonwebtoken');
const  authorizeToken = async(req,res,next) =>{
    const token = req.header("auth-token");
    if(!token){
        res.status(401).json({error :"no Token Found"})
    }else{
        try{
            const user =await jwt.verify(token , process.env.TOKEN_SECRET )
            req.tokenData =await {id :user.id ,role :user.role};
            next()
        }catch(err){
            res.status(400).json({error :err.message})
        }
    }
}
module.exports ={
    authorizeToken
};