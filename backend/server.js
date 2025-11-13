require('dotenv').config()
const app = require("./src/app");
const connectToDb = require("./src/db/db");

const port = process.env.port || 3000

connectToDb()
app.listen(port,()=>{
    console.log("server is running on 3000 port");
    
})