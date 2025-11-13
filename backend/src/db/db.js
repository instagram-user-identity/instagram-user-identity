const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("sucessfully Connected")).catch(()=>console.log("Error"))
}

module.exports = connectToDb