const express  =require("express");
const Todo = require("..models/todo.model");

const router = express.Router();

router.get("",async(req,res)=>{

    try {
        const todos = await Todo.find().lean().exec();
    return res.status(201).send(todos);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})