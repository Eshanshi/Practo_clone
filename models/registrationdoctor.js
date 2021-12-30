const mongoose=require("mongoose");

const appointmentinfo=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    doctorid:{
        type:Number,
        reqired:true,
        unique:true

    },
    mobilenumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },

    password:{
      type:String,
      required:true
    },

    profile:{
        type:String,
        required:true
    }

})
const restregistModel=new mongoose.model("doctorCredentials",doctorinfo)
module.exports=restregistModel;