import Link from "next/link";
import HeadLayout from "../../../../../../components/Head";
import Navbar from "../../../../../../components/Navbar";

const UserDetails = () => {
    return ( 
        <div>
            <HeadLayout section={"Venta cod: "} />
      <Navbar />

      <div className="flex flex-col w-full h-auto px-40 py-20 gap-11 bg-ivory">
        <div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
          <p className="text-3xl font-Pacifico text-charleston">Ordenes de</p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="grid w-full h-40 grid-cols-8 grid-rows-1 gap-5 px-4 py-3 shadow-xl bg-cornsilk rounded-2xl hover:bg-ivory">
            <div className="col-start-1 col-end-2 bg-center bg-cover rounded-lg bg-abrigo"></div>
            <div className="flex flex-col justify-center col-start-2 col-end-7 gap-2">
              <p className="text-sm font-Comfortaa text-charleston">Código de venta: fheu734</p>
              <p className=" font-Comfortaa text-charleston">Estado:</p>
              <p className="text-sm font-Comfortaa text-charleston">Dirección de entrega: Calle Sebastián Barranca 3956, Los Olivos, Lima</p>
              <p className="text-sm font-Comfortaa text-charleston">Fecha de entrega: </p>
            </div>
            <div className="flex flex-col justify-center col-start-7 col-end-9 gap-2">
              <p className="text-sm font-Comfortaa text-charleston">Productos ()</p>
              {/* if pedido == en proceso */}
              <Link href={"/client/userId/history/purchCod"}>
                <a className="cursor-pointer ">Ver detalles</a>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      
        </div>
     );
}
 
export default UserDetails;