import Client from "../../../../models/Client";
import { connectDb } from "../../../../lib/connectDb";

export default async function handler(req, res) {
    await connectDb()
    const { method, query: { userId } } = req

    switch (method) {
        case 'PUT':
            try {
                const userEdited = await Client.findOneAndUpdate({ userId: userId }, req.body, { new: true, runValidators: true })
                if (!userEdited) {
                    return res.status(404).json({ success: false, error: "Client ID o contenido del body inválido" })
                }
                return res.status(200).json({ success: true, data: userEdited })
            } catch (error) {
                return res.status(400).json({ success: false, error: error })
            }
        default:
            break;
    }
}