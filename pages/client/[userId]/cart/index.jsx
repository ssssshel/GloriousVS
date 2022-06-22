import Footer from "../../../../components/Footer";
import HeadLayout from "../../../../components/Head";
import Navbar from "../../../../components/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { connectDb } from "../../../../lib/connectDb";
import Client from "../../../../models/Client";
import Image from "next/image";

export default function UserBag({ success, error, userData }) {
  const cart = userData.cart;
  function f() {
    cart.map(({ quantity }) => console.log(quantity));
  }
  f();

  return (
    <div>
      <HeadLayout section={"Bolsa de compras"} />
      <Navbar />
      <div className="flex flex-col w-full h-auto px-40 py-20 gap-11 bg-ivory">
        <div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-xl bg-green">
          <p className="text-3xl font-Pacifico text-charleston">
            Bolsa de compras
          </p>
        </div>

        <div className="grid w-full h-auto grid-cols-10 grid-rows-1 gap-5">
          {!cart ? (
            <p>No hay productos en el carrito</p>
          ) : (
            <div className="flex flex-col col-start-1 col-end-7 gap-5">
              {cart.map(
                ({
                  productCode,
                  name,
                  color,
                  img,
                  unitPrice,
                  sizeId,
                  sizeName,
                  quantity,
                }) => (
                  <div
                    key={sizeId}
                    className="grid w-full grid-cols-6 grid-rows-1 gap-3 px-4 py-3 shadow-xl h-36 bg-cornsilk rounded-xl"
                  >
                    <div className="relative">
                      <Image
                        alt=""
                        src={img}
                        layout="fill"
                        className="rounded-lg"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className="flex flex-col justify-center col-start-2 col-end-6">
                      <p className="text-sm font-Comfortaa text-charleston">
                        {name}
                      </p>
                      <p className="text-sm font-Comfortaa text-charleston">
                        {sizeName}
                      </p>
                      <p className="text-sm font-Comfortaa text-charleston">
                        {color}
                      </p>
                      <p className="text-sm font-Comfortaa text-charleston">
                        Precio unitario: {unitPrice}
                      </p>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <p className="mr-3 text-sm font-Comfortaa text-charleston">
                        Cantidad: {quantity}
                      </p>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </div>
                  </div>
                )
              )}
            </div>
          )}
          <div className="col-start-7 gap-4 h-50% flex flex-col justify-center pl-6  col-end-11 shadow-xl bg-ivory rounded-xl">
            <h2 className="text-2xl font-Pacifico text-charleston">
              Resumen de la orden
            </h2>
            <p className="text-sm font-Comfortaa text-charleston">
              Costo de envío no incluído
            </p>
            <p>(n productos)</p>
            <p>Total: </p>
            <div className="px-3 py-2 cursor-pointer w-fit hover:bg-teal bg-charleston rounded-xl">
              <p className="text-ivory ">Continuar compra</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  await connectDb();
  const { userId } = params;

  try {
    const userCart = await Client.findOne({ userId: userId }, "cart").lean();
    if (!userCart) {
      return {
        props: {
          success: false,
          error: "Código de cliente inválido",
        },
      };
    }
    userCart._id = `${userCart._id}`;

    return {
      props: {
        success: true,
        userCart,
      },
    };
  } catch (error) {
    return {
      props: {
        success: false,
        error: "Error del servidor",
      },
    };
  }
}
