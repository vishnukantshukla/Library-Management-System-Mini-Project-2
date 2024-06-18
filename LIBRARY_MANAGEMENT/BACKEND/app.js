const express=require('express');
const app=express();
const mongoose = require('mongoose');
const cors=require("cors");
// const SeedDB=require('./Seed');
const methodOverride=require('method-override');
const User=require('./model/User')
const session=require('express-session')
const BookRoutes=require('./routes/BookRoute')
const AuthRoutes=require('./routes/AuthRoute')
const UserRoutes=require("./routes/Userroutes")

mongoose.connect('mongodb://127.0.0.1:27017/LIBRARY').then(()=>{
    console.log("connected to database");
})
.catch((err)=>{
    console.error(err);
})
let configSession={
    secret: 'Book cat',
    resave: false,
    saveUninitialized: true,
}

app.use(session(configSession));
app.use(cors());
app.use(methodOverride('_method'));
// app.use(express.urlencoded({required:true}))
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Connected")
})

app.use(BookRoutes);
app.use(AuthRoutes);
app.use(UserRoutes)

// SeedDB();

app.listen(8080,(req,res)=>{
    console.log("Server Connected Succesfully at 8080");
})