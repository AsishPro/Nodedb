const mongoose= require('mongoose')

// schema created 
const productSchema= {
    p_id:Number,
    p_name:String,
    p_cost:Number
}

// exporting schema
module.exports = mongoose.model("Product",productSchema)

    