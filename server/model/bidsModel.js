const mongoose = require('mongoose')

const bidSchema = new mongoose.Schema({
        "bid_id": {
            type: String,
            index: true,
            required: true,
            unique: true
        },
        "bid_amount": {
            type: String,
            required: true
        },
        "product_id": {
            type: String,
            index: true,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('bids', bidSchema)