const UserPassword = () => {
  return (
    <div className="flex flex-col col-start-6 col-end-11 px-6 shadow-xl justify-evenly rounded-2xl bg-cornsilk">
      <p className="text-2xl font-Pacifico text-charleston">
        Cambiar contraseña
      </p>
      <form autoComplete="off">
        <p>
          Contraseña actual:
          <input type="password" required={true} name="password" />
        </p>
        <p>
          Contraseña nueva:
          <input
            type="password"
            required={true}
            minLength={8}
            maxLength={16}
            name="newPassword"
          />
        </p>
      </form>
      <div className="px-6 py-2 shadow-xl cursor-pointer bg-green w-fit rounded-xl hover:bg-teal">
        <p>Guardar</p>
      </div>
    </div>
  );
};

export default UserPassword;
