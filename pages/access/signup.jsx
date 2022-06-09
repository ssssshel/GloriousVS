import HeadLayout from "../../components/Head";

import { useRouter } from "next/router"

import firebaseApp from "../../firebase/credentials";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

import { nanoid } from "nanoid";


const UserSignup = () => {

	const router = useRouter()

	const auth = getAuth(firebaseApp);
	const firestore = getFirestore(firebaseApp);

	async function registerUser(email, password, role, name, surname, userId) {

		// REGISTRO DE USUARIO EN FIREBASE AUTH
		const userInfo = await createUserWithEmailAndPassword(auth, email, password)
			.then((firebaseUser) => {
				return firebaseUser;
			})
			.catch((e) => { window.alert(e); router.reload() });

		// REGISTRO DE USUARIO EN FIRESTORE (EMAIL + ROLE)
		const docuRef = doc(firestore, `/users/${userInfo.user.uid}`);
		await setDoc(docuRef, { correo: email, rol: role, userId: userId })
			.then((createdUser) => console.log(createdUser))
			.catch((e) => { window.alert(e); router.reload() });

		// REGISTRO  DE USUARIO EN MONGODB (USER + CART)
		try {
			const fetchUser = await fetch("/api/users/new", {
				method: "POST", headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({userId: userId, name: name, surname: surname, email: email, address: "", role: role, cart: [] })

			})
			const createdUser = await fetchUser.json()
			if (createdUser.success) {
				window.alert("Registrado con éxito")
				router.push("/access/login")
			}
		} catch (e) {
			window.alert(e)
			router.reload
		}
	}
	function handleSubmit(e) {
		e.preventDefault();
		const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;
		const name = e.target.elements.name.value;
		const surname = e.target.elements.surname.value;
		const role = "user";
		const userId = nanoid(12)

		registerUser(email, password, role, name, surname, userId);
	}

	return (
		<div className="flex flex-col items-center justify-center w-full h-screen bg-white">
			<HeadLayout section={"Registro"} />
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
								minLength={8}
								maxLength={20}
								required
								placeholder="Ingrese su contraseña"
							/>
						</label>
						<label className="flex gap-3">
							Nombre
							<input
								type="text"
								name="name"
								id="name"
								required
								placeholder="Ingrese su nombre"
							/>
						</label>
						<label className="flex gap-3">
							Apellido
							<input
								type="text"
								name="surname"
								id="surname"
								required
								placeholder="Ingrese su apellido"
							/>
						</label>

						{/* <label className="flex gap-3">
							Rol
							<select required name="role" id="role">
								<option value={null}>Elige un rol</option>
								<option value="user">Usuario</option>
								<option value="editor">Editor</option>
								<option value="admin">Administrador</option>
							</select>
						</label> */}

						<input
							className="p-2 rounded-md shadow-md cursor-pointer bg-green hover:bg-ivory"
							type="submit"
							value="Registrate"
						/>
					</form>
					<button className="hover:font-bold" onClick={() => router.push("/access/login")}>
						Ya tengo una cuenta
					</button>
				</div>
			</div>
		</div>

	);
}

export default UserSignup;