const mongoose = require("../db.js")
const eventregisterModule = {
                            registered_event_title:String,
                            people_title:String,
                            name:String,
                            email:String,
                            number:Number,
                            designation:String,
                            department:String,
                            institute:String,
                            mode:String
                            }
const new_schema = new mongoose.Schema(eventregisterModule)
const new_collection = new mongoose.model("eventRegisterDB",new_schema)

module.exports = new_collection