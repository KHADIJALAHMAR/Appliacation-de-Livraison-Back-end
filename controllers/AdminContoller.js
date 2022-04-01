const express = require("express");
const {User, Category} = require('../models');


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


// ___________________________________________________Crud Product ___________________________________________

const createProduct = async(req,res)=>{

}

const getProduct = async(req,res)=>{

}
const updateProduct = async(req,res)=>{

}
const deleteProduct = async(req,res)=>{

}

module.exports ={
    creatCategory,
    getCategory,
    updateCategory,
    deleteCategory,

    createProduct,
    getProduct,
    updateProduct,
    deleteProduct

}




