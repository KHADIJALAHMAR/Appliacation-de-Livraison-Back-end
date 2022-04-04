
const {Commande} = require('../models/index');


const createCommand = async (req,res)=>{
    let total =0
    const data = {
        address :req.body.adresse ,
        clientId :req.user.id,
        total:total,
        status :1,
    }
    console.log(data);
    console.log('reqUser ', req.user);
    try{
        const commande =await Commande.create({
        address :data.address ,
        clientId :data.clientId,
        total:data.total,
        status :data.status,
        })
        if(!commande){
            res.status(404).json({error :err.message})
        }else{
            res.status(200).json(commande)
        }
    }catch(error){
        res.status(400).json(error)
    }
}

const Get_Commande = async (req, res) => {
    try {
        const commands = await Commande.findAll({ include: ['products', 'client', 'delivery'] })

        res.status(200).json(commands)
    } catch (error) {
        res.status(500).json((error, 'error'));
    }
}



module.exports ={
    createCommand,
    Get_Commande,
}