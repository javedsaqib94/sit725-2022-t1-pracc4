require('dotenv').config()
//console.log(process.env) // remove this after you've confirmed it working
var express = require("express");
var app = express();
var cors = require("cors");
const MongoClient = require("mongodb").MongoClient; // MongoClient class 
let projectCollection;
//Coonect database

const uri = "mongodb+srv://"+process.env.mongodbUser+":"+process.env.mongodbPassword+"@malik.jxkgh.mongodb.net/Sit_725_prac4_2022?retryWrites=true&w=majority";
//const uri = process.env.MONGO_URI; // can use localhost  here
const client = new MongoClient(uri, { useNewUrlParser: true});


app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const createCollection = (collectionName) => {
    client.connect((err, db) => {
        projectCollection = client.db("Sit_725_prac4").collection(collectionName);
        if (!err){
             console.log("MongoDB database Connected");
        } else {
            console.log("DB Error", err);
            process.exit(1);
        }
    });  
}

const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback);
}

const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

const cardList = [
    {
        title: "Kuala 2",
        image: "images/kuala2.jpeg",
        link: "About Kuala 2",
        description: "Demo description about Kuala 2"
    },
    {
        title: "Kuala 3",
        image: "images/kuala3.jpeg",
        link: "About Kuala 3",
        description: "Demo description about Kuala 3"
    }
]



app.get('/api/projects',(req,res) => {
    //res.json({statusCode: 200, data: cardList, message:"Success"});
    getProjects((err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
});

app.post('/api/projects',(req,res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    insertProjects(newProject,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Project Successfully added", data: result})
        }
    });
});

const addNumbers = (number1, number2) => {
    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var result = num1 + num2;
    return result;
}
app.get("/addTwoNumbers",(req,res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = addNumbers(number1,number2);
    res.json({statusCode: 200, data: result, message:"Success"});
});

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App running at http://localhost:"+port);
    createCollection("petsNew");
})












// const express = require('express');
// let app = express();

// app.use(express.static(__dirname+'/public'))
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// let port = process.env.port || 3000;

// app.listen(port, () => {
//     console.log('Server Listening to http://localhost:'+port);
// })