import Link from "next/link";
import { useState } from "react";

import HeadLayout from "../../../components/Head";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PersonalData from "../../../components/user/PersonalData";
import UserPassword from "../../../components/user/Password";
import Address from "../../../components/user/Address";

const Client = () => {
  let [userOption, setUserOption] = useState(1);
  console.log(userOption);

  return (
    <div>
      <HeadLayout section={`userName`} />
      <Navbar />
      <div className="flex flex-col w-full h-screen px-40 py-20 gap-11 bg-ivory">
        <div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
          <p className="text-3xl font-Pacifico text-charleston">Hola Alessia</p>
        </div>
        <div className="grid grid-cols-10 grid-rows-1">
          <div className="flex flex-col col-start-1 col-end-5 gap-5">
            <div
              onClick={() => setUserOption((userOption = 1))}
              className="flex flex-row items-center justify-between w-full h-20 px-6 text-2xl shadow-xl cursor-pointer hover:bg-cornsilk font-Pacifico text-charleston rounded-2xl bg-teal"
            >
              <p>Datos personales</p>
              <p>{">"} </p>
            </div>
            <div
              onClick={() => setUserOption((userOption = 2))}
              className="flex flex-row items-center justify-between w-full h-20 px-6 text-2xl shadow-xl cursor-pointer hover:bg-cornsilk font-Pacifico text-charleston rounded-2xl bg-teal"
            >
              <p>Cambiar contraseña</p>
              <p>{">"} </p>
            </div>
            <div className="flex flex-row items-center justify-between w-full h-20 px-6 text-2xl shadow-xl cursor-pointer hover:bg-cornsilk font-Pacifico text-charleston rounded-2xl bg-teal">
              <p>Mis compras</p>
              <p>{">"} </p>
            </div>
            <div className="flex flex-row items-center justify-between w-full h-20 px-6 text-2xl shadow-xl cursor-pointer hover:bg-cornsilk font-Pacifico text-charleston rounded-2xl bg-teal">
              <p>Direcciones de envío</p>
              <p>{">"} </p>
            </div>
          </div>
          {/* here goes components */}
          <Address />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Client;
