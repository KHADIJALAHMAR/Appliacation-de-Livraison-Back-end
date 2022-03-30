require('dotenv')
const {User} =require('../models');
const jwt =require('jsonwebtoken');

const handleRegister = async (req,res)=>{
    try{
        const data = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                repeated_password: req.body.repeated_password,
                gender: req.body.gender,
                role: req.body.role,
            }
            if(data.password !==data.repeated_password){
                // console.log('passwords are not Identical')
                res.status(404).json({message : "passwords are not Identical"})
            }
                await User.create({
                username :data.username,
                email:data.email,
                password:data.password,
                gender:data.gender,
                role:data.role ==="client" ? "livreur" :"client ",
            })
            res.status(201).json({
                message: `created User`,
        });
        }
        catch (error) {
            res.status(400).json({error:error.message});
        }

}
const handleLogin = (req,res) => {
    (async () =>{
        if(typeof req.body.email === 'undefined') { 
            res.status(404).json({message : "passwords are not Identical"}) 
        }
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            res.status(404).json({message : "is are not Identical"});
        }else if(typeof req.body.password === 'undefined'){
            res.status(404).json({message : "passwords your not Identical"});
        }else{
            await user.comparePasswords(req.body.password).then((result) => {
                if (!result) { 
                }else{
                    const id = user._id;
                    const role = user.role;
                    const accessToken = jwt.sign({id,role},process.env.TOKEN_SECRET);
                    // res.cookie('token', accessToken, {httpOnly: true});
                    res.json({accessToken});
                }
            }).catch((err) => res.status(404).json({err :err.message}))
        }  
    })();
}


module.exports ={
    handleRegister,
    handleLogin

}
