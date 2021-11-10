const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter product name"],
            trim: true,
            // default: "product"
        },
        price: {
            type: Number,
            default: 0,
            required: [true, "Please Enter product price"],
            maxLength: 8
        },
        description: {
            type: String,
            // required: true
        },
        category: {
            type: String,
            required: [true, "please enter category"],
        },

        images: [
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

        
        stock: {
            type: Number,
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
        },
        rating: {
            type: Number,
            default: 0
        },


    }
);

module.exports = mongoose.model("product",productSchema);