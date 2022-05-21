import HeadLayout from "../../components/Head";

import { useRouter } from "next/router"

import firebaseApp from "../../firebase/credentials";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const UserLogin = () => {

	const router = useRouter()

	const auth = getAuth(firebaseApp);

	function handleSubmit(e) {
		e.preventDefault();
		const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;

		signInWithEmailAndPassword(auth, email, password)
	}

	return (
		<div className="flex flex-col items-center justify-center w-full h-screen bg-white">
			<HeadLayout section={"Inicio de sesión"} />
			<div>
				<div className="flex flex-col items-center justify-center gap-5 p-5 rounded-lg shadow-lg w-fit">
					<form onSubmit={handleSubmit} className="flex flex-col gap-5 w-fit ">
						<label className="flex gap-3 ">
							Correo electrónico
							<input
								type="email"
								name="email"
								id="email"
								required
								placeholder="Ingrese su correo"
							/>
						</label>
						<label className="flex gap-3">
							Contraseña
							<input
								type="password"
								name="password"
								id="password"
								required
								placeholder="Ingrese su contraseña"
							/>
						</label>

						<input
							className="p-2 rounded-md shadow-md cursor-pointer bg-green hover:bg-ivory"
							type="submit"
							value="Iniciar Sesión"
						/>
					</form>
					<button className="hover:font-bold" onClick={() => router.push('/access/signup')}>
						Quiero regitrarme
					</button>
				</div>
			</div>
		</div>

	);
}

export default UserLogin;