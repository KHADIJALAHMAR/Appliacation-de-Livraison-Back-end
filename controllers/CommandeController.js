

const {Commande ,CommandProduct,User} = require('../models/index');


const createCommand = async (req,res)=>{
    // res.json({uudud:req.tokenData })
    let total =0
    const data = {
        address :req.body.address,
        clientId :req.tokenData.id,
        total:total,
        status:0,
    }

    console.log(data);
    // console.log('reqUser ', req.tokenData);

        const commande =await Commande.create({
        address :data.address,
        clientId :data.clientId,
        total:data.total,
        status :data.status,
        })

        
 const  Data =req.body;
    Data.products.forEach(async (Command, index) => {
        let subtotal = Command.price * Command.quantities;
        console.log('subtotal : ' , subtotal);

        await CommandProduct.create({
            'commandId': commande.id,
            'productId':Command.productId,
            'price':Command.price,
            'quantities':Command.quantities,
            'total': subtotal
        })


        total += subtotal
        console.log(Command);
    })
    res.json(commande)
}

// const UpdateLivreurId = async (req,res)=>{
//     const livreureId = req.params.livreurId;
//     // const CommandId=req.body.id;
//         const FindUser = await User.findOne({where: {id:livreureId}})
//         // res.json(FindUser)
//         if(FindUser.status === 1){
//             const command = await Commande.update({
//                 livreurId :livreureId ,
//                 where: {
//                     id:req.params.id,
//                     livreurId : null
//                 }
//             })
//             // .then()
//             res.json(command)
            
//         }
    
//     }
    
 const UpdateLivreurId = async (req, res) => {
    try {
        const livreureId = req.params.livreurId;
        const FindUser = await User.findOne({where: {id: livreureId}})
        // res.json(FindUser)
        if(FindUser.status === 1){
         
        const commands = await Commande.update(
            {
                'livreurId': req.params.livreurId,
            },
            {
                where: {
                    id: req.params.id,
                    livreurId :null
                }
            }
        ) 
        res.status(200).json(commands);
        }
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
           
            

            // await Commande.update(
            // {
            //     'livreurId': req.params.id,
            // },
            // {
            //     where: {
            //         livreurId: req.parms.id,
            //         livreurId :'Null'
            //     }
            // }
            //   await Commande.update(
            //     {
            //         'livreurId': req.params.,
            //     },
            //     {
            //         where: {
            //             livreurId: id_commande
            //         }
            //     }
            // )
    
            // res.status(200).json(command);
        // ).then((resault)=>{
        //     res.status(200).json(resault)
        // })

        // const Conmmandes= await Commande.find({where:{livreurId :"Null" === livreureId}});


    
// }



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
    getCommandById,
    UpdateLivreurId

}