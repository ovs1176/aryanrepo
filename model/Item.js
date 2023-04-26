const mongoose  = require("mongoose");


const itemSchema = new mongoose.Schema({
    title : String,
    price: String,
    image: String,
    description: String,
    isDeleted: {
        type:Boolean,
        default : false
    }
});


module.exports = mongoose.model("Item", itemSchema);