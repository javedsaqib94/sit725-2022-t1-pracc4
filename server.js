var express = require("express")
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const cardList = [
    {
        title: "Kuala 2",
        image: "images/kuala2.jpeg",
        link: "About Kuala 2",
        desciption: "Demo desciption about Kuala 2"
    },
    {
        title: "Kuala 3",
        image: "images/kuala3.jpeg",
        link: "About Kuala 3",
        desciption: "Demo desciption about Kuala 3"
    }
]


const addNumbers = (number1, number2) => {
    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var result = num1 + num2;
    return result;
}

app.get('/api/projects',(req,res) => {

    res.json({statusCode: 200, data: cardList, message:"Success"})

})​

app.get("/addTwoNumbers",(req,res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = addNumbers(number1,number2)
    res.json({statusCode: 200, data: result, message:"Success"})
})

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App running at http://localhost:"+port)
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