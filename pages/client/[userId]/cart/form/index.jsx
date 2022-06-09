import Footer from "../../../../../components/Footer";
import HeadLayout from "../../../../../components/Head";
import Navbar from "../../../../../components/Navbar";

const PayMenu = () => {
	return (
		<div>
			<HeadLayout section={'Entrega'} />
			<Navbar />
			<div className="flex flex-col w-full h-auto px-40 py-20 gap-11 bg-ivory">
				<div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
					<p className="text-3xl font-Pacifico text-charleston">Bolsa de compras</p>
				</div>

				<div className="grid w-full h-auto grid-cols-10 grid-rows-1 gap-5">
					<div className="flex flex-col col-start-1 col-end-7 gap-5">
						<div className="flex flex-col gap-6">
							<div className="flex items-center justify-between w-full h-20 px-6 py-3 shadow-xl bg-cornsilk rounded-2xl">
								<p className="text-sm font-Comfortaa text-charleston">Dirección: Insertar una direcció válida</p>
								<p className="text-sm font-Comfortaa text-charleston">Cambiar</p>
							</div>
							<div className="flex flex-col justify-center w-full gap-6 px-6 py-6 shadow-xl bg-cornsilk rounded-2xl">
								<h2>Elige el tipo de entrega</h2>
								<div className="flex justify-between text-sm">
									<div className="flex flex-col gap-3">
										<p>Entrega rápida: Llega hoy Datetime entre 10am y 8pm</p>
										<p>Entrega regular: Llega en tres días</p>
									</div>
									<div  className="flex flex-col gap-3">
										<p>S/.</p>
										<p>S/.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-start-7 gap-4 h-50% flex flex-col justify-center px-6  col-end-11 shadow-xl bg-ivory rounded-2xl">
						<h2 className="text-2xl font-Pacifico text-charleston">Resumen de la orden</h2>
						<p>(n productos)</p>
						<div className="flex flex-row justify-between">
							<div className="flex flex-col gap-3">
								<p>Costo de envío: </p>
								<p>Subtotal: </p>
								<p>Total: </p>
							</div>
							<div className="flex flex-col gap-3">
								<p>S/.</p>
								<p>S/.</p>
								<p>S/.</p>
							</div>
						</div>
						<div className="px-3 py-2 cursor-pointer w-fit hover:bg-teal bg-charleston rounded-xl">
							<p className="text-ivory ">Ir a pagar</p>
						</div>
					</div>

				</div>
			</div>
			<Footer />
		</div>
	);
}

export default PayMenu;