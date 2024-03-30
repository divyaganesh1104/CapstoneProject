const express = require("express")
const eventCreateDB = require("../modules/eventCreateModule.js")
const router = express.Router()
router.get("/", async (req,res)=>{
    try{
        const data = await eventCreateDB.find({})
        res.send(data)
    }
    catch(e){
        res.send("error",e)
    }
    
})
module.exports=router