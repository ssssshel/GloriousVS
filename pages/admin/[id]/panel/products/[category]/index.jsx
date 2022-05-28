import { useRouter } from "next/router"

import {connectDb} from "../../../../../../lib/connectDb"
import Product from "../../../../../../models/Product";
import HeadLayout from "../../../../../../components/Head";
import Navbar from "../../../../../../components/Navbar";
import Link from "next/link";
import PrivateRoute from "../../../../../../components/alerts/Private";

import { useAuth } from "../../../../../../utils/auth";

export default function ProductCategoryAdmin({ success, error, items }) {

	const user = useAuth()

	const router = useRouter()
	const { category } = router.query;

	const title = category.substring(0, 1).toUpperCase() + category.substring(1, category.length)

	if (!user || user.hasPrivileges != true) {
		return <PrivateRoute />
	}
	



	return (
		<div>
			<HeadLayout section={`Inventario de ${title}`} />
			<Navbar />
			<div className="flex flex-col w-full min-h-screen px-40 py-20 gap-11 bg-ivory">
				<div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
					<p className="text-3xl font-Pacifico text-charleston">Inventario de {title}</p>
					<p>Volver</p>
				</div>

				<div className="w-full h-auto gap-5">
					<div className="flex flex-col gap-5">
						{items.map(({ productCode, name }) => (
							<div key={productCode} className="grid w-full h-20 grid-cols-6 grid-rows-1 gap-3 px-4 py-3 shadow-xl hover:bg-ivory bg-cornsilk rounded-2xl">
								<div className="bg-center bg-cover rounded-lg bg-abrigo"></div>
								<div className="flex flex-col justify-center col-start-2 col-end-6">
									<p className="text-sm font-Comfortaa text-charleston">{name}</p>
									<p className="text-sm font-Comfortaa text-charleston">Código de producto: {productCode}</p>
								</div>
								<div className="flex flex-col items-start justify-center">
									<Link href={`/admin/ADMINID/panel/products/${category}/${productCode}`} className="mr-3 text-sm cursor-pointer font-Comfortaa text-charleston">
										<a>
											Ver detalle
										</a></Link>
								</div>
							</div>
						))
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps({params}) {
	await connectDb()

	try {
		const cat = params.category

		const res = await Product.find({category: cat})

		// configurar categorias validas - test
		if(!res){
			return {
				props:{
					success: false,
					error: "Parámetro inválido"
				}
			}
		}
		const items = res.map((doc) => {
			const item = doc.toObject()
			item._id = `${item._id}`
			// NESTED OBJECTS
			const {sizes} = item
			sizes.forEach(size => {
				size._id = `${size._id}`
				return size
			});
			return item
		})

		return {
			props: {
				success: true,
				items,
			}
		}

	} catch (error) {
		return {
			props: {
				success: false,
				error: "Error de servidor"
			}
		}
	}
}