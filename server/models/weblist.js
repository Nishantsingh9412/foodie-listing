import mongoose from "mongoose";

const mongooseSchema = new mongoose.Schema({
    restroName: {
        type: String,
        required: true
    },
    restroImage: {
        type: String,
        required: true
    },
    deliveryFees: {
        type: Number,
        required: true
    },
    deliveryFeesCurrency: {
        type: String,
        required: true
    },
    deliveryTime: {
        type: Number,
        required: true
    },
    deliveryType: {
        type: String,
        required: true,
    },
    restroType: {
        type: String,
        required: true
    },
    restroLocation: {
        type: String,
        required: true
    },
    restroRating: {
        type: Number,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auth',
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Weblist', mongooseSchema);