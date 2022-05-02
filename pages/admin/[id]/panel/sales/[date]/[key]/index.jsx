import HeadLayout from "../../../../../../../components/Head";
import Navbar from "../../../../../../../components/Navbar";

const SpecificSale = () => {
	return (
		<div>
			<HeadLayout section={"Venta codigo"} />
			<Navbar />
			<div className="flex flex-col w-full h-auto px-40 py-20 gap-11 bg-ivory">
				<div className="flex items-center justify-between w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
					<p className="text-3xl font-Pacifico text-charleston">Detalles venta codigo</p>
					<div className="p-3 bg-red-800 cursor-pointer w-fit hover:bg-red-500 rounded-xl">
						<p className="text-ivory">Anular venta</p>
					</div>
				</div>
				<div className="grid w-full h-auto grid-cols-10 grid-rows-1 gap-6 ">
					{/* PRODUCTS */}
					<div className="col-start-1 col-end-7 px-6 py-4 shadow-xl rounded-2xl bg-cornsilk ">
						<h2 className="mb-3 text-lg font-bold font-Comfortaa">Productos()</h2>
						<div className="flex flex-col gap-4">
							<div className="grid w-full grid-cols-6 grid-rows-1 gap-3 px-3 py-2 shadow-lg h-28 bg-ivory rounded-xl">
								<div className="col-start-1 col-end-2 bg-center bg-cover rounded-lg bg-abrigo"></div>
								<div className="flex flex-col justify-center col-start-2 col-end-6">
									<p className="text-sm font-Comfortaa text-charleston">Abrigo camel</p>
									<p className="text-sm font-Comfortaa text-charleston">Talla: </p>
									<p className="text-sm font-Comfortaa text-charleston">Color: </p>
									<p className="text-sm font-Comfortaa text-charleston">Cantidad: </p>

								</div>
								<p className="text-sm font-Comfortaa text-charleston">Precio: S/.</p>

							</div>

						</div>
					</div>

					{/* CLIENTDATA */}
					<div className="flex flex-col justify-around col-start-7 col-end-11 gap-3 px-6 py-6 text-sm shadow-2xl rounded-2xl bg-ivory">

						<div>
							<h2 className="text-base font-bold">Datos del cliente</h2>
							<div className="pl-2">

								<p>Cliente: Alejandro Ortiz</p>
								<p>Documento: DNI 78333533</p>
								<p>Correo electrónico: sjdd@fnjfa.com</p>
								<p>Celular: 0494819</p>
							</div>
						</div>
						<div>
							<h2 className="text-base font-bold">Información de envío</h2>
							<p className="pl-2">Dirección: </p>
						</div>
						<div>
							<h2 className="text-base font-bold">Información del pedido</h2>
							<div className="pl-2">
								<p>Realizado el: </p>
								<p>Estado:</p>
								<p>Entregado el:</p>
								<p>Monto total: S/.</p>
							</div>
						</div>
						<p>Volver</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SpecificSale;