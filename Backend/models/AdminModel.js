const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const adminSchema = mongoose.Schema({
    fullname: {
        type:String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique:true,
        trim:true
    },
    password: {
        type: String,
        require: true
    },
    role:{
        type:String,
        default: "admin"
    }
})

adminSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        return next()
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next()
})

const admin = mongoose.model("Admin", adminSchema);
module.exports = admin;