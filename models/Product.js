import mongoose from "mongoose"
import Sizes from "./Sizes"

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
	sizes: {
		ref: Sizes
	}
	// size1:{
	// 	size: {
	// 		type: String
	// 	},
	// 	stock: {
	// 		type: Number
	// 	},
	// 	prize: {
	// 		type: String
	// 	},
	// },
	// size2:{
	// 	size: {
	// 		type: String
	// 	},
	// 	stock: {
	// 		type: Number
	// 	},
	// 	prize: {
	// 		type: String
	// 	},
	// },
	// size3:{
	// 	size: {
	// 		type: String
	// 	},
	// 	stock: {
	// 		type: Number
	// 	},
	// 	prize: {
	// 		type: String
	// 	},
	// },
	// size4:{
	// 	size: {
	// 		type: String
	// 	},
	// 	stock: {
	// 		type: Number
	// 	},
	// 	prize: {
	// 		type: String
	// 	},

})



export default mongoose.models.Product || mongoose.model("Product", ProductSchema)