import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
    adminCode:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    patSurname:{
        type: String,
        required: true
    },
    matSurname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    hasPrivileges: true
})

export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema)