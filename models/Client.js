import mongoose from "mongoose"

const ClientSchema = new mongoose.Schema({
    clientCode:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    patSurname: {
        type: String,
        required: true
    },
    matSurname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    role:{
        type: String,
        required: true,
        default: "client"
    },
    cart: [
        {
            productCode: {
                type: String,
            },
            name: {
                type: String,
            },
            material: {
                type: String,
            },
            season: {
                type: String,
            },
            code: {
                type: String,
            },
            sizes: [
                {
                    name: String,
                    stock: Number,
                    prize: String,
                    color: String
                }
            ]
        }
    ]
})

export default mongoose.models.Client || mongoose.model("Client", ClientSchema)