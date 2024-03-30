const express = require("express")
const eventCreateDB = require("../modules/eventCreateModule.js")
const router = express.Router()
router.get("/", (req,res)=>{
    res.send("OK IN ROUTER")
})
router.post("/create",async(req,res)=>{
    try{
    const data = req.body 
    const dbCreate = await eventCreateDB.create(req.body)
    res.send(dbCreate)
    }
    catch(e){
        res.send(e)
        console.log(e)
    }
})
router.patch("/:id", async(req,res)=>{
    try {
        const FilterId = await req.params.id
        
    console.log(FilterId)
        const Data = await eventCreateDB.findOneAndUpdate(
            {event_title:FilterId},
        {$inc:{available:1}},
            {new:true}

        )
        res.send(Data)
    }
    catch(e){
        console.log("error",e)
        res.send(e)
    }

})
module.exports = router;