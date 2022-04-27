import Link from "next/link";

import HeadLayout from "../../../../components/Head";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function Product() {
  return (
    <div>
      <HeadLayout />
      <Navbar />
      <div className="w-full h-auto py-20 bg-ivory">
        {/* principal */}
        <section className="grid items-center w-full h-80% grid-cols-10 grid-rows-1 px-40 ">
          <div className="w-full h-full col-start-1 col-end-5 bg-center bg-no-repeat bg-cover rounded-3xl bg-abrigoGris" />
          <div className="flex flex-col h-full col-start-7 col-end-11 justify-evenly">
            {/* name */}
            <h1 className="text-5xl font-Pacifico text-charleston">
              Abrigo camel
            </h1>
            <p className="text-lg text-charleston font-Comfortaa">S/.120</p>
            {/* colorSelected */}
            <div>
              <p className="text-base text-charleston font-Comfortaa">
                Color: Camel
              </p>
              {/* colors */}
              <div>
                <ul className="flex flex-row gap-4">
                  <li className="w-6 h-6 border-2 cursor-pointer hover:brightness-75 bg-amber-400 border-charleston rounded-3xl"></li>
                </ul>
              </div>
            </div>
            <div>
              {/* sizeSlected */}
              <p className="text-base text-charleston font-Comfortaa">
                Talla: M
              </p>
              {/* size */}
              <div>
                <ul className="flex flex-row gap-5">
                  <li className="text-center border-2 rounded-lg cursor-pointer hover:bg-slate-400 border-charleston w-14 h-7">
                    M
                  </li>
                </ul>
              </div>
            </div>
            <div>
              {/* details */}
              <p className="text-lg text-charleston font-Comfortaa">
                Características:
              </p>
              {/* detailsList */}
              <ul className="text-sm font-Comfortaa text-charleston">
                <li>Modelo:</li>
                <li>Tipo:</li>
                <li>Material</li>
                <li>Temporada:</li>
              </ul>
            </div>
            {/* stock */}
            <div>
              <p className="text-xs font-Comfortaa text-charleston">
                Stock: 10 unidades
              </p>
              {/* selectOptions */}
              <div className="flex flex-col items-center justify-center h-16 cursor-pointer hover:bg-teal rounded-2xl bg-charleston w-80">
                <p className="text-lg font-Comfortaa text-ivory">
                  Elige tus opciones
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* other products */}
        <section className="flex flex-col w-full h-screen gap-16 py-20 pt-40 pl-40 pr-10">
          <h2 className="text-5xl font-Pacifico text-charleston">
            Productos similares
          </h2>
          <div className="grid w-full h-full grid-cols-4 grid-rows-1 gap-20">
            <Link href={`/catalogo/`}>
              <a>
                <div className="flex flex-col justify-end w-full h-full bg-no-repeat bg-cover hover:brightness-75 bg-abrigo rounded-2xl">
                  <div className="grid w-full grid-cols-3 grid-rows-1 rounded-b-3xl h-14 hover:cursor-pointer">
                    <div className="flex flex-col justify-center col-start-1 col-end-3 pl-4 text-sm font-Comfortaa rounded-bl-2xl hover:bg-ivory bg-green">
                      <h3>Abrigo camel</h3>
                      <p>S/.42</p>
                    </div>
                    <div className="flex flex-col justify-center text-xs bg-charleston hover:bg-ivory hover:text-charleston font-Comfortaa text-ivory rounded-br-2xl">
                      <p className="text-center">Elige tus opciones</p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
