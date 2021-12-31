const mongoose=require("mongoose");

const foodreq=new mongoose.Schema({
    doc_name:{
        type:String,
        required:true
        
    },
    doc_profile:{
        type:Number,
        required:true
    },
    doc_appointment:{
        type:Number,
        required:true
    },

    appointment_status:{
      type:String,
      required:true
    }
})

const appointment=new mongoose.model("AppointmentStatus",Appstat)
module.exports=appointment;
