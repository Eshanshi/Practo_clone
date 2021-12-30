const mongoose=require("mongoose");

const doctorCredentials=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
      type:String,
      required:true
    }
})
const restrauntLoginModel=new mongoose.model("doctorCredential",doctorCredentials)
module.exports=doctorLoginModel;