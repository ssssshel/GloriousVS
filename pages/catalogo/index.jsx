import Link from "next/link";
import Footer from "../../components/Footer";
import HeadLayout from "../../components/Head";
import Navbar from "../../components/Navbar";

const catalogo = () => {
  return (
    <div>
      <HeadLayout
        section={"Catálogo"}
        description={"Catálogo de ropa de Glorious"}
      />
      <Navbar />
      {/* section */}
      <div className="w-full h-auto py-32 pl-40 pr-10 bg-ivory">
        <h1 className="text-6xl font-Pacifico text-charleston">Catálogo</h1>
        <div className="grid grid-flow-row grid-cols-3 mt-20 gap-y-20 gap-x-28">
          <Link href={"/catalogo/abrigos"}>
            <a>
              <div className="w-full h-60% bg-center hover:brightness-75 flex flex-col justify-end bg-abrigo bg-cover rounded-3xl bg-no-repeat">
                <div className="flex flex-col items-center justify-center w-full hover:bg-ivory h-14 rounded-b-3xl hover:cursor-pointer bg-green">
                  <span className="font-bold text-charleston font-Comfortaa">
                    Abrigos
                  </span>
                </div>
              </div>
            </a>
          </Link>
          <Link href={"/catalogo/casacas"}>
            <a>
              <div className="w-full bg-center h-60% hover:brightness-75 flex flex-col justify-end bg-casaca bg-cover rounded-3xl bg-no-repeat">
                <div className="flex flex-col items-center justify-center w-full hover:bg-ivory h-14 rounded-b-3xl hover:cursor-pointer bg-green">
                  <span className="font-bold text-charleston font-Comfortaa">
                    Casacas
                  </span>
                </div>
              </div>
            </a>
          </Link>
          <Link href={"/catalogo/chompas"}>
            <a>
              <div className="w-full bg-center h-60% hover:brightness-75 flex flex-col justify-end bg-chompa bg-cover rounded-3xl bg-no-repeat">
                <div className="flex flex-col items-center justify-center w-full hover:bg-ivory h-14 rounded-b-3xl hover:cursor-pointer bg-green">
                  <span className="font-bold text-charleston font-Comfortaa">
                    Chompas
                  </span>
                </div>
              </div>
            </a>
          </Link>
          <Link href={"/catalogo/joggers"}>
            <a>
              <div className="w-full bg-center h-60% hover:brightness-75 flex flex-col justify-end bg-jogger bg-cover rounded-3xl bg-no-repeat">
                <div className="flex flex-col items-center justify-center w-full hover:bg-ivory h-14 rounded-b-3xl hover:cursor-pointer bg-green">
                  <span className="font-bold text-charleston font-Comfortaa">
                    Joggers
                  </span>
                </div>
              </div>
            </a>
          </Link>
          <Link href={"/catalogo/jeans"}>
            <a>
              <div className="w-full bg-center h-60% hover:brightness-75 flex flex-col justify-end bg-jeans bg-cover rounded-3xl bg-no-repeat">
                <div className="flex flex-col items-center justify-center w-full hover:bg-ivory h-14 rounded-b-3xl hover:cursor-pointer bg-green">
                  <span className="font-bold text-charleston font-Comfortaa">
                    Jeans
                  </span>
                </div>
              </div>
            </a>
          </Link>
          <Link href={"/catalogo/faldas"}>
            <a>
              <div className="w-full bg-center h-60% hover:brightness-75 flex flex-col justify-end bg-falda bg-cover rounded-3xl bg-no-repeat">
                <div className="flex flex-col items-center justify-center w-full hover:bg-ivory h-14 rounded-b-3xl hover:cursor-pointer bg-green">
                  <span className="font-bold text-charleston font-Comfortaa">
                    Faldas
                  </span>
                </div>
              </div>
            </a>
          </Link>
          <Link href={"/catalogo/blusas"}>
            <a>
              <div className="w-full bg-center h-60% hover:brightness-75 flex flex-col justify-end bg-blusa bg-cover rounded-3xl bg-no-repeat">
                <div className="flex flex-col items-center justify-center w-full hover:bg-ivory h-14 rounded-b-3xl hover:cursor-pointer bg-green">
                  <span className="font-bold text-charleston font-Comfortaa">
                    Blusas
                  </span>
                </div>
              </div>
            </a>
          </Link>
          <Link href={"/catalogo/polos"}>
            <a>
              <div className="w-full h-60% bg-center hover:brightness-75 flex flex-col justify-end bg-polo bg-cover rounded-3xl bg-no-repeat">
                <div className="flex flex-col items-center justify-center w-full hover:bg-ivory h-14 rounded-b-3xl hover:cursor-pointer bg-green">
                  <span className="font-bold text-charleston font-Comfortaa">
                    Polos
                  </span>
                </div>
              </div>
            </a>
          </Link>
          <Link href={"/catalogo/shorts"}>
            <a>
              <div className="w-full h-60% bg-center hover:brightness-75 flex flex-col justify-end bg-short bg-cover rounded-3xl bg-no-repeat">
                <div className="flex flex-col items-center justify-center w-full hover:bg-ivory h-14 rounded-b-3xl hover:cursor-pointer bg-green">
                  <span className="font-bold text-charleston font-Comfortaa">
                    Shorts
                  </span>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default catalogo;
