import Product from "../../../../models/Product";
import { connectDb } from "../../../../lib/connectDb"

export default async function handler(req, res) {
	await connectDb()

	const { method } = req

	// POST api/admin/data/products
	if (method == "POST") {
		try {
			const product = new Product(req.body)
			await product.save()
			return res.status(200).json({ success: true, product })
		} catch (error) {
			return res.status(403).json({ success: false, error: "error al cargar el nuevo producto" })
		}


	}
}