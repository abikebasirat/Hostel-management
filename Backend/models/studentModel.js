const mongoose = require("mongoose");

const guardianSchema = new mongoose.Schema({
    guardianName: {
        type: String,
        required: true
    },

    guardianEmail: {
        type: String,
        required: [true, "please add an email"],
        trim: true
    },
});


const studentSchema = new mongoose.Schema({
    _id:{
        type: String,
        unique: true,
        require: true
    },

    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum:["Female", "Male", "Other"]
    },
    nationality: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Please add email"],
        trim: true,
        unique: true
    },

    guardian: guardianSchema,
    room:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
        default:null,
    },
    role:{
        type: String,
        enum: ["Student"],
        default: "Student"
        
    },
    checkedIn: {
        type: Boolean,
        default: false
    },
    checkedInTime: {
        type: Date,
        default: null,
    },
    checkedOutTime: {
        type: Date,
        default: null,
    },
},

{
    timestemps: true,
    minimize: false,
    toJSON: {getters: false}
}
);

studentSchema.methods.checkIn = function(){
    this.checkedInTime = new Date();
    this.checkedOutTime = null;
}

studentSchema.method.checkedOut = function() {
    this.checkedIn = false;
    this.checkedInTime = new Date();
    this.checkedOutTime = null;
    
};

const Student = mongoose.model("Student", studentSchema);
module.exports = Student; 