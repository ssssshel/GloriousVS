import { useState } from "react"

const FormProduct = ({ formData }) => {

	const [form, setForm] = useState({
		productCode: formData.productCode,
		category: formData.category,
		name: formData.name,
		material: formData.material,
		season: formData.season,
		color: formData.color,
		sizes: [
			{
				size1: [
					{
						size: formData.sizes.size1.size,
						stock: formData.sizes.size1.stock,
						prize: formData.sizes.size1.prize,
					}
				]
			},
			// {
			// 	size2: [
			// 		{
			// 			size: formData.sizes.size2.size,
			// 			stock: formData.sizes.size2.stock,
			// 			prize: formData.sizes.size2.prize,
			// 		}
			// 	]
			// },
			// {
			// 	size3: [
			// 		{
			// 			size: formData.sizes.size3.size,
			// 			stock: formData.sizes.size3.stock,
			// 			prize: formData.sizes.size3.prize,
			// 		}
			// 	]
			// },
			// {
			// 	size4: [
			// 		{
			// 			size: formData.sizes.size4.size,
			// 			stock: formData.sizes.size4.stock,
			// 			prize: formData.sizes.size4.prize,
			// 		}
			// 	]
			// },
			

		]
	})

	const handleChange = (e) => {
		const { value, name } = e.target
		setForm({
			...form,
			[name]: value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		postData(form)
	}

	const postData = async (form) => {
		try {
			const res = await fetch('/api/admin/data/products', {
				method: 'POST',
				headers: {
					"Content-type": "application/json"
				},
				body: JSON.stringify(form)
			})

			const data = await res.json()
			console.log(data)

			if (data.success) {
				console.log("Producto agregado con éxito")
			}
		} catch (error) {
			console.log(error)
		}
	}


	return (<div>
		<form autoComplete="false" onSubmit={handleSubmit} >
			<p>Código de producto:
				<input type="text" name="productCode" value={form.productCode} onChange={handleChange} />
			</p>
			<p>
				Categoría:
				<select name="category" value={form.category} onChange={handleChange}>
					<option value={null} >Elige una categoría</option>
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
			<p>Nombre: <input type="text" name="name" value={form.name} onChange={handleChange} /></p>
			<p>Material: <input type="text" name="material" value={form.material} onChange={handleChange} /></p>
			<p>Temporada: <input type="text" name="season" value={form.season} onChange={handleChange} /></p>
			<p>Color: <input type="text" name="color" value={form.color} onChange={handleChange} /></p>
			<div>
				<p>Talla S</p>
				<p>Talla: <input type="text" name="size" value={form.sizes.size1.size} onChange={handleChange} /></p>
				<p>Stock: <input type="number" name="stock" value={form.sizes.size1.stock} onChange={handleChange} /></p>
				<p>Precio: <input type="text" name="prize" value={form.sizes.size1.prize} onChange={handleChange} /></p>
			</div>
			{/* <div>
				<p>Talla S</p>
				<p>Talla: <input type="text" name="size" value={form.sizes.size2.size} onChange={handleChange} /></p>
				<p>Stock: <input type="number" name="stock" value={form.sizes.size2.stock} onChange={handleChange} /></p>
				<p>Precio: <input type="text" name="prize" value={form.sizes.size2.prize} onChange={handleChange} /></p>
			</div>
			<div>
				<p>Talla S</p>
				<p>Talla: <input type="text" name="size" value={form.sizes.size3.size} onChange={handleChange} /></p>
				<p>Stock: <input type="number" name="stock" value={form.sizes.size3.stock} onChange={handleChange} /></p>
				<p>Precio: <input type="text" name="prize" value={form.sizes.size3.prize} onChange={handleChange} /></p>
			</div>
			<div>
				<p>Talla S</p>
				<p>Talla: <input type="text" name="size" value={form.sizes.size4.size} onChange={handleChange} /></p>
				<p>Stock: <input type="number" name="stock" value={form.sizes.size4.stock} onChange={handleChange} /></p>
				<p>Precio: <input type="text" name="prize" value={form.sizes.size4.prize} onChange={handleChange} /></p>
			</div> */}
			<button type="submit">Agregar</button>
		</form>

	</div>);
}

export default FormProduct;