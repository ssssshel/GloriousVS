import HeadLayout from "../../../../../components/Head";
import Navbar from "../../../../../components/Navbar";

const SalesPanel = () => {

	return (
		<div>
			<HeadLayout section={"Panel de ventas"} />
			<Navbar />
			<div className="flex flex-col w-full min-h-screen gap-6 px-40 py-20 bg-ivory">
				<div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
					<p className="text-3xl font-Pacifico text-charleston">
						Panel de ventas
					</p>
				</div>
				<div>
					<div className="flex justify-around col-start-1 col-end-7 px-6 py-4 shadow-xl bg-cornsilk rounded-xl">
						<div>
						<p className="font-bold">Ventas por día</p>
						<p className="text-sm">Seleccione un día</p>
						<form>
							<input type="date" name="date"  />
							<button type="submit">Buscar</button>
						</form>
						</div>
						<div>
							<p className="font-bold">Reporte mensual</p>
							<p className="text-sm">Seleccione el mes</p>
							<form>
								<input type="month" name="month"/>
								<button type="submit">Generar</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SalesPanel;