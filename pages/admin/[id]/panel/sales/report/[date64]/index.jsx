import HeadLayout from "../../../../../../../components/Head";
import Navbar from "../../../../../../../components/Navbar";

const MonthReport = () => {
	return (
		<div>
			<HeadLayout section={"Reporte Mes"} />
			<Navbar />
			<div className="flex flex-col w-full h-auto min-h-screen px-40 py-20 gap-11 bg-ivory">
				<div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
					<p className="text-3xl font-Pacifico text-charleston">
						Reporte de Mes Año
					</p>
				</div>
				<div className="w-full px-4 py-6 shadow-xl bg-ivory rounded-2xl">
					<h1>Ventas Mes Año</h1>
				</div>
			</div>
		</div>
	);
}

export default MonthReport;