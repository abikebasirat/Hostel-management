const mongoose = require("mongoose");
// new to colect mongoose to schema
// schema is constructer for awa data 
const roomSchema = new mongoose.Schema({
    roomNumber: {
        type:Number,
        require:true
    },
    roomCapacity: {
       type: Number,
       require:true 
    },
    roomOccupancy: [
        {
        type: String,
        ref: "Student"
        }
    ],
   roomLocation:{
        type:String,
        require: true,
    },
    roomStatus:{
        type:String,
     default: "available"
    }
})

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;