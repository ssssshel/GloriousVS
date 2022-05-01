import HeadLayout from "../../../../../../components/Head";
import Navbar from "../../../../../../components/Navbar";

const ProductCategoryAdmin = () => {
	return (
		<div>
			<HeadLayout section={"category"} />
			<Navbar />
			<div className="flex flex-col w-full min-h-screen px-40 py-20 gap-11 bg-ivory">
				<div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
					<p className="text-3xl font-Pacifico text-charleston">Inventario de category</p>
					<p>Volver</p>
				</div>

				<div className="w-full h-auto gap-5">
					<div className="flex flex-col gap-5">
						<div className="grid w-full h-20 grid-cols-6 grid-rows-1 gap-3 px-4 py-3 shadow-xl hover:bg-ivory bg-cornsilk rounded-2xl">
							<div className="bg-center bg-cover rounded-lg bg-abrigo"></div>
							<div className="flex flex-col justify-center col-start-2 col-end-6">
								<p className="text-sm font-Comfortaa text-charleston">Abrigo camel</p>
								<p className="text-sm font-Comfortaa text-charleston">Código de producto: yer2y1</p>
							</div>
							<div className="flex flex-col items-start justify-center">
								<p className="mr-3 text-sm cursor-pointer font-Comfortaa text-charleston">Ver detalle</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}

export default ProductCategoryAdmin;