import HeadLayout from "../../../../../components/Head";
import Navbar from "../../../../../components/Navbar";

const SalesPanel = () => {
	return (
		<div>
			<HeadLayout section={"Panel de ventas"} />
			<Navbar />
			<div className="flex flex-col w-full min-h-screen gap-6 px-10 py-20 bg-ivory">
				<div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
					<p className="text-3xl font-Pacifico text-charleston">
						Panel de ventas
					</p>
				</div>
				<div>
					<div className="flex flex-col justify-center col-start-1 col-end-7 gap-5 px-6 py-4 shadow-xl bg-cornsilk rounded-xl"></div>
				</div>
			</div>
		</div>
	);
}

export default SalesPanel;