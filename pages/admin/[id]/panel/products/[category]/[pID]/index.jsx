import HeadLayout from "../../../../../../../components/Head";
import Navbar from "../../../../../../../components/Navbar";

const SpecificProductAdmin = () => {
	return (
		<div>
			<HeadLayout section={"productID"} />
			<Navbar />
			<div className="flex flex-col w-full min-h-screen px-40 py-20 gap-11 bg-ivory">
				<div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
					<p className="text-3xl font-Pacifico text-charleston">Producto codigo</p>
					<p>Volver</p>

				</div>

				<div className="w-full h-auto gap-5">
					<div className="flex flex-col gap-5">
						<div className="grid w-full h-40 grid-cols-6 grid-rows-1 gap-3 px-4 py-3 shadow-xl hover:bg-ivory bg-cornsilk rounded-2xl">
							<div className="bg-center bg-cover rounded-lg bg-abrigo"></div>
							<div className="flex flex-col justify-center col-start-2 col-end-6">
								<p className="text-sm font-Comfortaa text-charleston">Abrigo camel</p>
								<p className="text-sm font-Comfortaa text-charleston">Código de producto: yer2y1</p>
								<p className="text-sm font-Comfortaa text-charleston">Tipo: </p>
								<p className="text-sm font-Comfortaa text-charleston">Material: </p>
								<p className="text-sm font-Comfortaa text-charleston">Temporada: </p>
							</div>
							<div className="flex flex-col items-start justify-center">
								<p className="mr-3 text-sm cursor-pointer font-Comfortaa text-charleston">Eliminar producto</p>
							</div>
						</div>
						<div className="w-full h-auto px-4 py-3 shadow-xl bg-cornsilk rounded-2xl">
							<p className="font-bold ">Tallas</p>
							<p>Guardar</p>
							<div className="px-4 py-3 border-b-2 shadow-xl border-charleston bg-ivory rounded-xl">
								<p>Talla XS</p>
								<div>
									<p>Colores</p>
									<div className="border-b-2 border-charleston">
										<p>Color: </p>
										<div className="px-3 ">
											<p>Precio: </p>
											<p>Stock: </p>
										</div>
									</div>
									<div className="border-b-2 border-charleston">
										<p>Color: </p>
										<div className="px-3 ">
											<p>Precio: </p>
											<p>Stock: </p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

		</div>
	);
}

export default SpecificProductAdmin;