const jwt = require('jsonwebtoken');
const  authorizeToken = async(req,res,next) =>{
    const token = req.header("auth-token");
    if(!token){
        res.status(401).json({error :"no Token Found"})
    }else{
        try{
            const user = await jwt.verify(token , process.env.TOKEN_SECRET )
            // console.log(user);
            req.tokenData = {id :user.id ,role :user.role};
            next()
        }catch(err){
            res.status(400).json({error :err.message})
        }
    }
}
const authorizeWithRole = (...roles) => { 
    
        return (req,res,next) =>{                                                                                                                  
            // let BaseRole = ['admin', 'delivery', 'client'];
            if (!roles.includes(req.tokenData.role)) throw res.status(401).json({ error: "you are not authorized" });

            next();
        }
}

module.exports ={
    authorizeToken,
    authorizeWithRole
};