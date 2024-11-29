const express= require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const app=express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json()) 
//ENV
require('dotenv').config()

const DATABASE_URL=process.env.DATABASE_URL
const PORT=process.env.PORT

const Schema=mongoose.Schema({
        name:String,
        dob:String,
        gender:String,
        email:String,
        phone:String,
        course:String
});

const Usermodel = mongoose.model("forms",Schema);

app.post("/auth",async(req,res)=>{
    const {name,pass}=req.body;
    const uname="adim@gmail.com"
    const password="adim123"
    if(name==uname && pass==password)
    {
        res.json({status:"Success"})
    }
    else
    {
        res.json({status:"error"})
    }
})

app.post("/post", async  (req,res)=>{
    const newdata= new Usermodel(req.body)
    await newdata.save();
    res.send({status:"Success"})
})
 
mongoose.connect(DATABASE_URL)
.then(()=> 
{
    console.log("Connected to Mongodb")    
    console.log("Server is running...")
    app.listen(PORT);
}).catch((err)=>console.log(err)) 
