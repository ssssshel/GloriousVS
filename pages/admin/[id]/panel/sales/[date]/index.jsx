import HeadLayout from "../../../../../../components/Head";
import Navbar from "../../../../../../components/Navbar";

const SpecificDay = () => {
	return (
		<div>
			<HeadLayout section={"Ventas fecha"} />
			<Navbar />
			<div className="flex flex-col w-full min-h-screen gap-6 px-40 py-20 bg-ivory">
				<div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
					<p className="text-3xl font-Pacifico text-charleston">
						Ventas de fecha
					</p>
				</div>
				
				<div className="w-full h-auto gap-5">
					<div className="flex flex-col gap-2">
						<div className="w-full h-10 px-4 py-3 rounded-sm shadow-xl hover:bg-ivory bg-cornsilk">
							<div className="flex justify-between col-start-2 col-end-6">
								<p className="text-sm font-Comfortaa text-charleston">Código de venta</p>
								<p className="text-sm font-Comfortaa text-charleston">Fecha de pago:</p>
								<p className="mr-3 text-sm cursor-pointer font-Comfortaa text-charleston">Ver detalle</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SpecificDay;