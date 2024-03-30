const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/event")
.then(()=>console.log("connected"))
.catch(()=>console.log("error in DB"))

module.exports=mongoose