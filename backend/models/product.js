const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter product name"],
            trim: true
        },
        price: {
            type: Number,
            required: [true, "Please Enter product price"],
            maxLength: 8
        },
        rating: {
            type: Number,
            default: 0
        },

        Images: [
            {
                public_id: {
                    type: String,
                    required: true
                },
                url: {
                    type: String,
                    required: true
                }
            }
        ],

        category: {
            type: String,
            required: [true, "please enter category"],
        },
        stock: {
            type: Number,
            required: [true, "please enter stock number"],
            maxLength: 4,
            default: 1
        },

        numOfReviews: {
            type: Number,
            default: 0
        },

        reviews: [
            {
                name: {
                    type: Number,
                    required: true
                },
                rating: {
                    type: Number,
                    required: true
                },

                comment: {
                    type: String,
                    required: true
                }

        
            }
        ],

        createdAt: {
            type: Date,
            default: Date.now
        }


    }
);

module.exports = mongoose.model("product",productSchema);