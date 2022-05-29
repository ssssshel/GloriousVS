import { ObjectId } from "mongodb"
import mongoose from "mongoose"

const ClientSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    document:{
        type: String
    },
    address: {
        type: String,
    },
    role:{
        type: String,
        required: true,
    },
    cart: [
        {
            productCode: {
                type: String,
            },
            sizeCode:{
                type: ObjectId
            },
            quantity: {
                type: Number
            },
            individualPrice:{
                type: Number
            },
            totalPrize: {
                type: Number
            }
        }
    ]
})

export default mongoose.models.Client || mongoose.model("Client", ClientSchema)