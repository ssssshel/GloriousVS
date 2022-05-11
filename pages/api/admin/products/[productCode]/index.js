import Product from "../../../../../models/Product"
import { connectDb } from "../../../../../lib/connectDb"

export default async function handler(req, res) {
  await connectDb()

  const { method, query: { productCode } } = req

  switch (method) {
    case 'GET':
      try {
        const product = await Product.findOne({ productCode: productCode })
        if (!product) {
          return res.status(404).json({ success: false, error: "Código de producto inválido" })
        }
        return res.status(200).json({ success: true, data: product })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Falla del servidor" })
      }

    case 'PUT':
      try {
        const productEdited = await Product.findOneAndUpdate({ productCode: productCode }, req.body, { new: true, runValidators: true })
        if (!productEdited) {
          return res.status(404).json({ success: false, error: "Código de producto o contenido del formulario body inválidos" })
        }
        return res.status(200).json({ success: true, data: productEdited })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Falla del servidor" })
      }

    case 'DELETE':
      try {
        const response = await Product.findOneAndDelete({ productCode: productCode })
        if (!response) {
          return res.status(404).json({ success: false, error: "Código de producto inválido" })
        }
        return res.status(200).json({ success: true, data: response })
      } catch (error) {
        return res.status(400).json({ success: false, error: "Falla del servidor" })
      }

    default:
      break;
  }
}