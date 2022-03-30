require('dotenv')
const {User} =require('../models');
// const jwt =require('jsonwebtoken');

const handleRegister = async (req,res)=>{
    console.log(req.body);
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
                console.log ('passwords are not Identical')
            }
            await User.create({
                username :data.username,
                email:data.email,
                password:data.password,
                gender:data.gender,
                role:data.role ==="client" ? "livreur" :"client " ,
            })
            res.status(201).json({
                message: `created User`,
        });
        }
        catch (error) {
            res.status(400).json({error:error.message});
        }


}
module.exports ={
    handleRegister,

}
