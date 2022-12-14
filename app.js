const e = require('express');
const express=require('express');
const mongoose=require('mongoose');

const app=express();

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/personDB",()=>{
    console.log("Connected DB successfully.");
});

//Schema Defining
// const fruitSchema= new mongoose.Schema({
//     name:String,
//     color:String
// });
// // Use plural in parentesis.
// const Fruit=mongoose.model("Fruit",fruitSchema);
// const fruit= new Fruit({
//     name:'Apple',
//     color:'red'
// });
// fruit.save();
const personSchema = new mongoose.Schema({
    name:String,
    age:Number
});
const Person = mongoose.model("Person",personSchema);

const p1 = new Person({
    name:'Siddhi',
    age:23
});
const p2 = new Person({
    name:'Sidhu',
    age:23
});
const p3 = new Person({
    name:'Sid',
    age:23
});
Person.insertMany([p1,p2,p3],(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Added successfully");
    }
});
Person.find((err,people)=>{
    people.forEach((p)=>{
        console.log(p);
    });
});