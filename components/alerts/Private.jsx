import HeadLayout from "../Head"
import { useRouter } from "next/router"


function PrivateRoute() {

const router = useRouter()

	return (
		<div>
			<HeadLayout section={"Acceso denegado"} />
			<div className="flex flex-col  items-center justify-center h-screen">
				<div className="flex flex-col p-10 rounded-lg gap-5 shadow-lg">

					<p className="text-lg">Acceso denegado</p>
					<button onClick={()=> router.push("/access/login")} className="bg-slate-400 rounded-lg shadow-lg hover:bg-slate-100 p-2">Iniciar sesión</button>
				</div>

			</div>
		</div>
	)
}

export default PrivateRoute