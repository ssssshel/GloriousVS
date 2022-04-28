const Address = () => {
  return (
    <div className="flex flex-col col-start-6 col-end-11 px-6 shadow-xl justify-evenly rounded-2xl bg-cornsilk">
      <p className="text-2xl font-Pacifico text-charleston">
        Direcciones de envío
      </p>
      <p>Dirección actual: </p>
      <form>
        <p>
          Nueva Dirección:
          <input type="text" name="address" />
        </p>
        <div className="px-6 py-2 shadow-xl cursor-pointer bg-green w-fit rounded-xl hover:bg-teal">
          <p>Guardar</p>
        </div>
      </form>
    </div>
  );
};

export default Address;
