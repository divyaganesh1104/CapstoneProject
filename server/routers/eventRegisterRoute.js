const express = require("express")
const eventRegisterDB = require("../modules/eventregisterModule.js")
const router = express.Router()
router.get("/get", async (req,res)=>{
    try{
        const data = await eventRegisterDB.find({})
        res.send(data)
    }
    catch(e){
        res.send("error",e)
    }
})
router.post("/create",async(req,res)=>{
    try{
    const data = req.body 
    const dbCreate = await eventRegisterDB.create(req.body)
    res.send(dbCreate)
    }
    catch(e){
        res.send(e)
        console.log(e)
    }
})
module.exports = router;