const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    current_password:{type:String,required:true},
    New_password:{type:String,required:true},
},{timestamps:true})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel