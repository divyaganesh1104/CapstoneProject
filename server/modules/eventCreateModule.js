const mongoose = require("../db.js")

const eventCreateSchema = {
    category:String,
    event_title:String,
    description:String,
    date:String,
    location:String,
    capacity:Number,
    dead_line:String,
    special_requirment:String,
    email:String,
    organizer:String,
    available:Number
}
const new_schema = new mongoose.Schema(eventCreateSchema)
const new_collection = new mongoose.model("eventCreateDB",new_schema)

module.exports = new_collection