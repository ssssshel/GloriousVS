import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
	productCode: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	material: {
		type: String,
		required: true
	},
	season: {
		type: String,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	sizes:[
		{
			size: {
				type: String
			},
			stock:{
				type: Number
			},
			prize:{
				type: Number
			}
		}

	]
})



export default mongoose.models.Product || mongoose.model("Product", ProductSchema)