var  mongoose = require("mongoose")
var Schema = mongoose.Schema 


const UserModel = new Schema({
    id : Schema.ObjectId,
    first_name : String,
    last_name : String,
    email : String,
    avatar : String,
    job_title : String 

})

 module.exports  = mongoose.model("user",UserModel) //users