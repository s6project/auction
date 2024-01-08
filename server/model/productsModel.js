const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
        "email": {
            type: String,
            required: true,
            unique: true
        },
        "password": {
            type: String,
            required: true
        },
        "phone_no": {
            type: Number,
            required: true,
            unique: true
        },
        "profile_info": {
            type: String,
            default: ""
        },
        "rating": {
            type: Number,
            default: 0,
            min: 0,
            max: 5
        },
        "user_id": {
            type: String,
            index: true,
            required: true,
            unique: true
        },
        "name": {
            type: String,
            required: true,
        },
        "user_type": {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('products', productSchema)