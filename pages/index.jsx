import Link from "next/link";

import HeadLayout from "../components/Head";
import Navbar from "../components/Navbar";

const home = () => {
  return (
    <div>
      <HeadLayout section={"Index"} description={"Glorious, tienda virtual"} />
      <Navbar />
      {/* header */}
      <div className="w-full h-screen bg-no-repeat bg-cover bg-backgroundIndex">
        <div className="flex flex-col justify-center h-full gap-4 px-10 bg-gradient-to-r from-black/50 text-ivory">
          <h1 className="font-Pacifico text-7xl">Glorious</h1>
          <p className="text-xl ml-14 font-Comfortaa">by Peruvian designers</p>
        </div>
      </div>
      {/* section */}
      <div className="grid items-center w-full h-screen grid-cols-2 grid-rows-1 gap-20 px-10 bg-green">
        <div className="h-60%">
          <div className="flex flex-col items-center justify-end w-full h-full bg-no-repeat bg-cover rounded-3xl bg-horizontalIndex">
            <div className="flex flex-col items-center justify-center w-full rounded-b-3xl hover:cursor-pointer hover:bg-teal h-14 bg-charleston text-ivory ">
              <span className="text-base font-Comfortaa">Conoce mas</span>
            </div>
          </div>
        </div>
        <article className="flex flex-col gap-6 pl-14">
          <h1 className="text-6xl font-Pacifico">Nueva Colección</h1>
          <h2 className="text-base font-bold font-Comfortaa">
            Otoño - Invierno
          </h2>
          <p className="">
            Llegó el frío y junto a él la inspiración de nuestros diseñadores.
            Estas nuevas prendas serán tu perfecto complemento en estas
            estaciones.
          </p>
        </article>
      </div>
      {/* store */}
      <div className="w-full h-auto py-32 pl-40 pr-10">
        <h1 className="text-6xl font-Pacifico">Store</h1>
        <div className="grid grid-flow-row grid-cols-3 mt-20 gap-y-20 gap-x-28">
          <div className="w-full h-60% flex flex-col justify-end bg-abrigo bg-cover rounded-3xl bg-no-repeat">
            <Link href={"/catalogo/abrigos"}>
              <a>
                <div className="flex flex-col items-center justify-center w-full hover:bg-teal h-14 rounded-b-3xl hover:cursor-pointer bg-charleston">
                  <span className="text-ivory font-Comfortaa">Abrigos</span>
                </div>
              </a>
            </Link>
          </div>
          <div className="w-full h-50% border-2 border-black">
            <div></div>
          </div>
          <div className="w-full h-50% border-2 border-black">
            <div></div>
          </div>
          <div className="w-full h-50% border-2 border-black">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
