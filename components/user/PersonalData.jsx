import { useState } from "react";
import { useRouter } from "next/router";

const PersonalData = ({ name, surname, email }) => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: name,
    surname: surname,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    putData(form);
  };

  const putData = async (form) => {
    const { userId } = router.query;
    console.log(userId)
    try {
      const req = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await req.json();
      if (data.success) {
        window.alert("Tus datos personales han sido cambiados exitosamente");
        router.reload;
      }
    } catch (error) {
      console.log(error);
      console.log(form);
    }
  };

  return (
    <div className="flex flex-col col-start-6 col-end-11 px-6 shadow-xl justify-evenly rounded-2xl bg-cornsilk">
      <p className="text-2xl font-Pacifico text-charleston">Datos Personales</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label>
          Nombres:
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Apellidos:{" "}
          <input
            type="text"
            name="surname"
            id="surname"
            value={form.surname}
            onChange={handleChange}
          />
        </label>
        <p>Correo electrónico: {email}</p>
        <input
          type="submit"
          className="px-6 py-2 shadow-xl cursor-pointer bg-green w-fit rounded-xl hover:bg-teal"
          value="Guardar"
        />
      </form>
    </div>
  );
};

export default PersonalData;
