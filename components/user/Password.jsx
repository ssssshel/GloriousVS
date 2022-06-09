import handleUpdatePassword from "../../utils/authUpdatePassword"

const handleSubmit = (e) => {
  e.preventDefault()
  const newPassword = e.target.elements.newPassword.value
  handleUpdatePassword(newPassword)
}

const UserPassword = () => {
  return (
    <div className="flex flex-col col-start-6 col-end-11 px-6 shadow-xl justify-evenly rounded-2xl bg-cornsilk">
      <p className="text-2xl font-Pacifico text-charleston">
        Cambiar contraseña
      </p>
      <form onSubmit={handleSubmit} autoComplete="off">

        <label>
          Contraseña nueva:
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            required={true}
            minLength={8}
            maxLength={16}
          />
        </label>
        <input type='submit' className="px-6 py-2 shadow-xl cursor-pointer bg-green w-fit rounded-xl hover:bg-teal" value="Guardar" />
      </form>
    </div>
  );
};

export default UserPassword;
