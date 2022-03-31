const express = require("express");
const User =require('../models/User');

// ___________________________________________________Crud Category__________________________________________

const creatCategory = async (req,res)=>{
    try{
        const Category=  await  User.create({ name:req.body.name});
        if(!Category){
            res.status(404).json({message :' Catecory Not Create '})
        }
        else{
            res.status(200).json({message : 'Create Category'})
        }
    }
    catch(error){
            res.status(400).json({error :error.message})
    }
}

const getCategory =async (req,res)=>{
    try{
        await User.find().then((resault)=>{
            res.satus(200).json(resault)
        })
    }catch(error){
        res.status(400).json({message :error.message})
    }
}
const updateCategory =async (req,res)=>{
    

}
const deleteCategory = async (req,res)=>{

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




