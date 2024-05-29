const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
    AdminId: {
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        ref: "Admin"
    },
    lToken: {
        type: String,
        default: ""
    },
    vToken:{
        type: String,
        default: ""
    },
    rToken: {
        type: String,
        default: ""
    },
    createdAt: {
        type:Date,
        require: true,

    },
    expiresAt: {
        type: Date,
        require: true,
    }
});
const Token = mongoose.model("Token", tokenSchema);
module.exports = Token;