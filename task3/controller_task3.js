var url = require("url");
var UserModel  = require("./user_model");
var url = require("url");

exports.saveUser = (req, res) => {


  var u = new UserModel({
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email,
    avatar : req.body.avatar,
    job_title : req.body.job_title 
})

u.save(function (err, success) {
  if (err) {

      res.json({ "msg": "Something went wrong", "data": err })

  } else {

      res.json({ "msg": "done", "data": success })

  }
})

};


exports.getUser = (req,res)=>{
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  var id = query.id;
  console.log(id)

  //  checks f url contains Id as parmenter
  if(!id){
    //  get all data of users
    UserModel.find(function (err, data) {
      if (err) {
          res.json({ data: err, status: -1, msg: "SMWR" })
      } else {
          res.json({ data: data, status: 200, msg: "user retrieved...." })
      }
  })
  }
  else{

    // get user of given id as parameter
    console.log("coming herer")
    UserModel.find({_id:id},function (err, data) {
      if (err) {
          res.json({ data: err, status: -1, msg: "SMWR" })
      } else {
          res.json({ data: data, status: 200, msg: "user retrieved...." })
      }
  })

  }
};