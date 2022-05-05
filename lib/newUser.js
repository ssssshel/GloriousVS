import { MongoClient } from "mongodb"

const uri = process.env.URI_MONGO
const options = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
}

const client = new MongoClient(uri, options)

export default async function newUser() {
	try {
		await client.connect()
		const db = client.db("gloriousVS")
		const col = db.collection('accounts')
		const accounts = await col.find().toArray()
		
		console.log(accounts)
	} catch (error) {
		console.log(error)
	}
}