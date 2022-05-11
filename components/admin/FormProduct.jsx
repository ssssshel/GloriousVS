import { useRouter } from "next/router";
import { useState } from "react";
import AlertAdmin from "../alerts/AlertAdmin";

const FormProduct = ({ formData, formNewProduct = true }) => {
  let modalState = 0;
  const router = useRouter();

  const [form, setForm] = useState({
    productCode: formData.productCode,
    category: formData.category,
    name: formData.name,
    material: formData.material,
    season: formData.season,
    color: formData.color,
    sizes: [
      {
        size: formData.sizes[0].size,
        stock: formData.sizes[0].stock,
        prize: formData.sizes[0].prize,
      },
      {
        size: formData.sizes[1].size,
        stock: formData.sizes[1].stock,
        prize: formData.sizes[1].prize,
      },
      {
        size: formData.sizes[2].size,
        stock: formData.sizes[2].stock,
        prize: formData.sizes[2].prize,
      },
      {
        size: formData.sizes[3].size,
        stock: formData.sizes[3].stock,
        prize: formData.sizes[3].prize,
      },
    ],
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleResize = (event, index) => {
    const { sizes } = form;
    const { value, name } = event.target;

    sizes[index][name] = value;
    setForm({
      ...form,
      sizes,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formNewProduct) {
      putData(form);
    }
    postData(form);
  };

  // POSTDATA cliente => API
  const postData = async (form) => {
    try {
      const req = await fetch("/api/admin/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await req.json();
      console.log(data);

      if (data.success) {
        console.log("Producto agregado con éxito");
        alert("Producto agregado con éxito");
        self.location.reload();
        modalState = 1;
      }
    } catch (error) {
      console.log(error);
    }
  };

  // PUTDATA cliente => API
  const putData = async (form) => {
    const { productCode } = router.query;
    try {
      const req = await fetch(`/api/admin/products/${productCode}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await req.json();
      if (data.success) {
        window.alert(`Producto: ${productCode} agregado con éxito`);
        location.replace("/admin/ADMINID/panel/products");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form autoComplete="false" onSubmit={handleSubmit}>
        <p>
          Código de producto:
          <input
            type="text"
            name="productCode"
            required
            value={form.productCode}
            onChange={handleChange}
          />
        </p>
        <p>
          Categoría:
          <select
            required
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value={null}>Elige una categoría</option>
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
        <p>
          Nombre:{" "}
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
          />
        </p>
        <p>
          Material:{" "}
          <input
            type="text"
            required
            name="material"
            value={form.material}
            onChange={handleChange}
          />
        </p>
        <p>
          Temporada:{" "}
          <input
            type="text"
            name="season"
            required
            value={form.season}
            onChange={handleChange}
          />
        </p>
        <p>
          Color:{" "}
          <input
            type="text"
            name="color"
            required
            value={form.color}
            onChange={handleChange}
          />
        </p>
        {form.sizes.map((size, index) => {
          return (
            <div key={index}>
              <p>
                Talla{" "}
                {index === 0
                  ? "S"
                  : index === 1
                  ? "M"
                  : index === 2
                  ? "L"
                  : index === 3
                  ? "XL"
                  : ""}
              </p>
              <p>
                Talla:{" "}
                <input
                  type="text"
                  name="size"
                  required
                  value={size.size}
                  onChange={(event) => handleResize(event, index)}
                />
              </p>
              <p>
                Stock:{" "}
                <input
                  type="number"
                  name="stock"
                  required
                  value={size.stock}
                  onChange={(event) => handleResize(event, index)}
                />
              </p>
              <p>
                Precio:{" "}
                <input
                  type="number"
                  name="prize"
                  required
                  value={size.prize}
                  onChange={(event) => handleResize(event, index)}
                />
              </p>
            </div>
          );
        })}

        <button
          className="bg-red-600 rounded-lg p-2 w-fit hover:bg-red-300"
          type="submit"
        >
          {formNewProduct ? "Agregar" : "Editar"}
        </button>
      </form>
    </div>
  );
};

export default FormProduct;
