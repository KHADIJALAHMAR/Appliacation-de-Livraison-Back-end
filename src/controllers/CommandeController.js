const { Commande, CommandProduct, User } = require("../models/index");
const nodemailer = require('nodemailer');


// _______________________________________________Crud Cmmande __________________________________________________________________________________________
const createCommand = async (req, res) => {
  // res.json({uudud:req.tokenData })
    var total = 0;
    const Data = req.body;
  // console.log('reqUser ', req.tokenData);

    const commande = await Commande.create({
    address: Data.address,
    clientId: req.tokenData.id,
    total: total,
    status: 0,
});

  Data.products.forEach(async (Command, index) => {
    var globaltotal = Command.price * Command.quantities;
    console.log("globaltotal : ", globaltotal);

    await CommandProduct.create({
      commandId: commande.id,
      productId: Command.productId,
      price: Command.price,
      quantities: Command.quantities,
      total: globaltotal,
    });
    total += globaltotal;
    await Commande.update({ total: total }, { where: { id: commande.id } });
  });
  res.json(commande);
};

const get_Commande = async (req, res) => {
  try {
    const commands = await Commande.findAll({
      include: ["products", "client", "delivery"],
    });

    res.status(200).json(commands);
  } catch (error) {
    res.status(500).json((error, "error"));
  }
};
const update_Commande = async (req, res) => {
  let data = req.body;
  let id_commande = req.body.id;

  try {
    const command = await Commande.update(
      {
        address: data.address,
      },
      {
        where: {
          id: id_commande,
        },
      }
    );

    res.status(200).json(command);
  } catch (error) {
    res.status(500).json((error, "error"));
  }
};
const getCommandById = async (req, res) => {
  try {
    const commands = await Commande.findOne({
      where: {
        id: req.params.id,
      },
      include: ["products", "client", "delivery"],
    });

    res.status(200).json(commands);
  } catch (error) {
    res.status(500).json(error, "error");
  }
};

const UpdateLivreurId = async (req, res) => {
  try {
    const livreureId = req.params.livreurId;
    const FindUser = await User.findOne({ where: { id: livreureId } });
    // res.json(FindUser)
    if (FindUser.status === 1) {
      const commands = await Commande.update(
        {
          livreurId: req.params.livreurId,
        },
        {
          where: {
            id: req.params.id,
            livreurId: null,
          },
        }
      );
      res.status(200).json(commands);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const set_status = async (req, res) => {
    await Commande.findOne({ where: { id: req.params.id}, include: ["products", "client", "delivery"]})
    .then(function(resault){
        if(resault){
            Commande.update(
                { status: req.params.status },
                { where: { id: req.params.id } }
                ) 
                .then(function() {
                    console.log({ message: "Status updated successfully!" });
                    if(resault.status ==='finish'){
                const info={
                username:resault.client.username,
                email:resault.client.email,
                address:resault.address,
                livreur:resault.delivery.username,
                quantities:resault.quantities,
                total:resault.total,
            }
                const transporter = nodemailer.createTransport( 
                {
                pool:true,
                service: "hotmail",
                auth: {
                    user: "khadijalahmar8@gmail.com",
                    pass: "khadija1234@"
            }
            });
                    const options = {
                    from: "khadijalahmar8@gmail.com",
                    to: "khadijalahmar8@gmail.com",
                    subject: "Sending email Facture",
                    text:  `M :${info.username}
                    Adresse :${info.address}
                    Frais Total: ${info.total}
                    livreur :${info.livreur}`,
                    
                    };

            transporter.sendMail(options ,function (err, infoo) {
            if(err)
            {
                    console.log(err);
                    return;
            }
                    console.log("sent:" +infoo.response );
            })
                }
                }) 
                .catch(function (err) {
                    console.log(err);
                });
            }
        res.status(200).json(resault)
        // console.log(resault)
        // console.log(resault.quantities)
        // console.log(resault.client.quantities)
        // console.log(resault.)
    })
};

module.exports = {
  createCommand,
  get_Commande,
  update_Commande,
  getCommandById,
  UpdateLivreurId,
  set_status,
};