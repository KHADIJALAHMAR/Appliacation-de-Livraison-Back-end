const express = require("express");
const {Product, Category,User} = require('../models/index');


// ___________________________________________________Crud Category__________________________________________

const creatCategory = async (req,res)=>{
    const name =req.body.name;
    console.log(name)
    const category=  await Category.create({ name:name});
    try{
        if(!category){
            res.status(404).json({message :' Category Not Create '})
        }
        else{
            res.status(200).json(category);
        }
    }
    catch(error){
            res.status(400).json({error :error.message})
    }
}

const getCategory =async (req,res)=>{
    try{
        await Category.findAll().then((resault)=>{
            res.json(resault)
        })
    }catch(error){
        res.status(400).json({message :error.message})
    }
}
const updateCategory =async (req,res)=>{
    const CategoryId= req.body.id;
    try{
        await Category.update({name:req.body.name},{where: {id :CategoryId}}).then((resault)=>{
            res.status(200).json(resault)
        })
    }catch(error){
        res.status(400).json({error:error.message})
    }

}
const deleteCategory = async (req,res)=>{
    try{
        const deleteCategory= await Category.destroy({where :{id:req.body.id}});
        if(!deleteCategory){
            res.status(400).json({message :'No Category Found'})
        }else{
            res.status(200).json({message :'Category Has deleted successfully !!'})
        }
    }catch(error){
        res.json(404).json({error:err.message});
    }
}


// ___________________________________________________Crud Product _____________________________________________________

const createProduct = async(req,res)=>{

        
        const product=  await Product.create({ 
            name :req.body.name,
            decsription:req.body.decsription,
            price:req.body.price,
            image:req.file.originalname,
            categoryId:req.body.categoryId
        });
        console.log('files 12345678',req.file);

    try{
        if(!product){
            res.status(404).json({message :' Category Not Create '})
        }
        else{
            res.status(200).json(Product);
        }
    }
    catch(error){
            res.status(400).json({error :error.message})
    }
}
const getProduct = async(req,res)=>{
    try{
        await Product.findAll({include :'category' }).then((resault)=>{
            res.json(resault)
        })
    }catch(error){
        res.status(400).json({message :error.message})
    }
}
const updateProduct = async(req,res)=>{
    const ProductId= req.body.id;
  try {
    Product.update(ProductId, req.body.data, (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
const deleteProduct = async(req,res)=>{
    try{
        const deleteProduct= await Product.destroy({where :{id:req.body.id}});
        if(!deleteProduct){
            res.status(400).json({message :'No Product Found'})
        }else{
            res.status(200).json({message :'Product Has deleted successfully !!'})
        }
    }catch(error){
        res.json(404).json({error:err.message});
    }
}
// ________________________________________________Get Livreur and Update Status _______________________________________
const getLivreurById = async(req,res)=>{
    const livreurId =req.params.id;
    try{
        await User.findOne({where:{id:livreurId}}).then(function(resault){
            if(resault){
                User.update(
                    {status:req.params.status},
                    {
                        where:{
                            id:livreurId
                        }
                    }
                ).then(res.status(200).json({message :"Status updated successfully!"}))
            }
        })
    }
    catch(error){
        res.status(400).json(error)
    }
}
// get All Livreur
const findAllLivreur = async(req,res) =>{
    try{
        await User.findAll({where:{role:'livreur'}}).then((resault)=>{
            res.json(resault)
        })
    }catch(error){
        res.status(400).json({message :error.message})
    }
}

// _______________________________________________Crud  
// get All Users 
const findAllUsers = async(req,res) =>{
    try{
        await User.findAll().then((resault)=>{
            res.json(resault)
        })
    }catch(error){
        res.status(400).json({message :error.message})
    }
}
// get one User 
const deleteUser = async(req,res)=>{
    try{
        const deleteUser= await User.destroy({where :{id:req.params.id}});
        if(!deleteUser){
            res.status(400).json({message :'No User Found'})
        }else{
            res.status(200).json({message :'User Has deleted successfully !!'})
        }
    }catch(error){
        res.json(404).json({error:err.message});
    }
}


module.exports ={
    creatCategory,
    getCategory,
    updateCategory,
    deleteCategory,

    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,

    getLivreurById,
    findAllLivreur,

    findAllUsers,
    deleteUser

}




