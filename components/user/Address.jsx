import { useState } from 'react'
import { useRouter } from "next/router"


const Address = ({ address }) => {

  const router = useRouter()

  const [addressInput, setAddressInput] = useState({ address: address })

  const handleChange = (e) => {
    const { value, name } = e.target
    setAddressInput({
      ...addressInput,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    putData(addressInput)
  }

  const putData = async (addressInput) => {
    const { userId } = router.query;
    try {
      const req = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(addressInput),
      });
      const data = await req.json();
      if (data.success) {
        window.alert("Tu dirección ha sido actualizada");
        router.reload();
      }
    } catch (error) {
      window.alert(error)
      router.reload()
    }
  }

  return (
    <div className="flex flex-col col-start-6 col-end-11 px-6 shadow-xl justify-evenly rounded-2xl bg-cornsilk">
      <p className="text-2xl font-Pacifico text-charleston">
        Direcciones de envío
      </p>
      <p>Dirección actual: {address === "" ? "Dirección no determinada" : address} </p>
      <form onSubmit={handleSubmit}>
        <label>
          Nueva Dirección:
          <input type="text" name="address" value={addressInput.address} onChange={handleChange} />
        </label>
        <input type="submit" className="px-6 py-2 shadow-xl cursor-pointer bg-green w-fit rounded-xl hover:bg-teal" value="Guardar" />
      </form>
    </div>
  );
};

export default Address;
