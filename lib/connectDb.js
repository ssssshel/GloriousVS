import mongoose from "mongoose";

const URI_MONGO = process.env.URI_MONGO

if (!URI_MONGO) {
	throw new Error("Error: Conexión con la base de datos no definida")
}

export async function connectDb(){
	try {
		await mongoose.connect(URI_MONGO, {
			bufferCommands: false
		})
		console.log('Conexión con la base de datos exitosa')
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}