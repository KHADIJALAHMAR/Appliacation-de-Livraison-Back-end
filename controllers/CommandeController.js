
const {Commande} = require('../models/index');


const createCommand = async (req,res)=>{
    // res.json({uudud:req.tokenData })
    let total =0
    const data = {
        address :req.body.address,
        clientId :req.tokenData.id,
        total:total,
        status:1,
        // console.log(data);
    }

    console.log('reqUser ', req.tokenData);
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

const get_Commande = async (req, res) => {
    try {
        const commands = await Commande.findAll({ include: ['products', 'client', 'delivery'] })

        res.status(200).json(commands)
    } catch (error) {
        res.status(500).json((error, 'error'));
    }
}
const update_Commande = async (req, res) => {
    let data = req.body;
    let id_commande= req.body.id;

    try {
        const command = await Commande.update(
            {
                'address': data.address,
            },
            {
                where: {
                    id: id_commande
                }
            }
        )

        res.status(200).json(command);
    } catch (error) {
        res.status(500).json((error, 'error'));
    }
}
const getCommandById = async(req,res)=>{
    try {
        const commands = await Commande.findOne({
            where: {
                id: req.params.id
            },
            include: ['products', 'client', 'delivery']
        })

        res.status(200).json(commands);
    } catch (error) {
        res.status(500).json(error, 'error');
    }
}




module.exports ={
    createCommand,
    get_Commande,
    update_Commande,
    getCommandById

}