import { useState } from "react"

import HeadLayout from "../../../../../components/Head";
import Navbar from "../../../../../components/Navbar";

const NewProduct = () => {
	let [newSize, setNewSize] = useState()

	return (
		<div>
			<HeadLayout section={"Nuevo Producto"} />
			<Navbar />
			<div className="flex flex-col w-full min-h-screen gap-6 px-10 py-20 bg-ivory">
				<div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
					<p className="text-3xl font-Pacifico text-charleston">
						Nuevo producto
					</p>
				</div>
				<div className="w-full px-6 py-6 shadow-xl bg-cornsilk rounded-2xl">
					<form >
						<p>
							Categoría:
							<select name="category" id="">
								<option value="">Elige una categoría</option>
								<option value="abrigos">Abrigos</option>
								<option value="casacas">Casacas</option>
								<option value="chompas">Chompas</option>
								<option value="jeans">Jeans</option>
								<option value="joggers">Joggers</option>
								<option value="faldas">Faldas</option>
								<option value="blusas">Blusas</option>
								<option value="polos">Polos</option>
								<option value="shorts">Shorts</option>
							</select>
						</p>
						<p>Nombre: <input type="text" name="name" /></p>
						<p>Material: <input type="text" name="material" /></p>
						<p>Temporada: <input type="text" name="season" /></p>
						<div>
							<p>Talla XS</p>
							<p></p>
						</div>
					</form>
				</div>
			</div>

		</div>
	);
}

export default NewProduct;