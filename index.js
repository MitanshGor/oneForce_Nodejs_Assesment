const express = require("express") 
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const task_1 = require('./task1/task1_router');
const task_3 = require('./task3/task3_router');

const nodecache = require('node-cache');
require('isomorphic-fetch');


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors()) 



// atlas
const uri = "mongodb+srv://royal22:royal22@cluster0.3n3at.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, function (err) {
    if (err) {
        console.log("something went wrong");
        console.log(err);
    } else {
        console.log("database connected....");
    }
})

//  task 1
app.use("/task-1",task_1)

//  task -2 is script assesment. so run =>  node task2/task-2-scripts.js

//  task 3
app.use("/users",task_3)


app.listen(process.env.PORT || 5000, function () {
    console.log("server stareted on "+(process.env.PORT || 5000));
})