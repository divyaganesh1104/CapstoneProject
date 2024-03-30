const mongoose = require("../db.js")

const eventSignupSchema = {
    name:String,
    email:String,
    phone:Number,
    password:String
}
const new_schema = new mongoose.Schema(eventSignupSchema)
const new_collection = new mongoose.model("eventSignupDB",new_schema)

module.exports = new_collection