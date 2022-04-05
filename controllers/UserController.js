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
                role:data.role ==="client" ? "client":"livreur" ,
            })
            res.status(201).json({
                message: `created User`,
        });
        }
        catch (error) {
            res.status(400).json({error:error.message});
        }

}
const handleLogin = async (req,res) => {
    try{
        const user = await User.findOne({where : {email: req.body.email}});

        if (!user) {
            res.status(404).json({message : "email Not Fond"});
        }
        else{
            await  User.findOne({where :{ email: req.body.email, password :req.body.password}}).then((user)=>{
                if(!user){
                    res.status(404).json({where :{message : 'Password incorect'}})
                }else{
                        const id = user.id;
                        const role = user.role;
                        const accessToken = jwt.sign({id,role},process.env.TOKEN_SECRET);
                        res.json({accessToken ,user});
                    }
            })
        } 
    } catch(error){
        res.status(400).json({error: error.message})
    }
    ;
}


module.exports ={
    handleRegister,
    handleLogin

}
