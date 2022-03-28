const express = require("express");

const mongoose = require("mongoose");
const app = express();


const connect = ()=>{

    return mongoose.connect(

        "mongodb+srv://Rifakat7:Rifaqat9225@cluster0.9zcba.mongodb.net/DataBase?retryWrites=true&w=majority"
        //"mongodb+srv://Rifakat7:Rifaqat9225@cluster0.e6kwa.mongodb.net/Database?retryWrites=true&w=majority"
    )
};

const modelSchema = new mongoose.Schema(
    {
        firstName:{type:String,required:true},
        lastName:{type:String,required:false},
        email:{type:String,required:true},
        password:{type:String,required:true},


    },
    {
        timestamps:true
    }
);

const Models = new mongoose.model("model",modelSchema);

const todoSchema = new mongoose.Schema(
    {
        body:{type:String,required:true},
        modelId:{type:mongoose.Schema.Types.ObjectId,ref:"Models",required:true}
    },
    {
        timestamps:true
    }
);

const TodoModel = new mongoose.model("todo",todoSchema);







app.listen(5000,async(req,res)=>{
    try {
        await connect();
    } catch (err) {
        console.log({message:err.message});
    }
    console.log("listening at port 5000");
})

app.get("/users",function(req,res)
{
    try {
        res.send("Working");
    } catch (error) {
        console.log(error);
        
    }
});

