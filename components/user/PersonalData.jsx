const PersonalData = ({name, surname, email}) => {
  return (
    <div className="flex flex-col col-start-6 col-end-11 px-6 shadow-xl justify-evenly rounded-2xl bg-cornsilk">
      <p className="text-2xl font-Pacifico text-charleston">Datos Personales</p>
      <ul className="flex flex-col gap-3">
        <li>Nombres: {name}</li>
        <li>Apellidos: {surname}</li>
        <li>Documento: </li>
        <li>Correo electrónico: {email}</li>
      </ul>
      <div className="px-6 py-2 shadow-xl cursor-pointer bg-green w-fit rounded-xl hover:bg-teal">
        <p>Guardar</p>
      </div>
    </div>
  );
};

export default PersonalData;
