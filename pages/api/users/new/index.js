import Client from "../../../../models/Client";
import { connectDb } from "../../../../lib/connectDb";

export default async function handler(req, res){
    await connectDb()
    const {method} = req

    // POST api/users/new
    if (method === "POST") {
        try {
            const user = new Client(req.body)
            await user.save()
            return res.status(200).json({success: true, user})
        } catch (error) {
            return res.status(403).json({success: false, error: "Error al cargar nuevo usuario"})
        }
    }
}