import Footer from "../../../../components/Footer";
import HeadLayout from "../../../../components/Head";
import Navbar from "../../../../components/Navbar";

import ErrorScreen from "../../../../components/alerts/Error";
import LoadingScreen from "../../../../components/alerts/Loading";
import PrivateRoute from "../../../../components/alerts/Private";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { connectDb } from "../../../../lib/connectDb";
import Client from "../../../../models/Client";
import Image from "next/image";
import { useAuth } from "../../../../utils/auth";
import { useState } from "react";

export default function UserBag({ success, error, userCart }) {
  const user = useAuth();
  // console.log(userCart);

  const [localCart, setLocalCart] = useState(userCart);
  console.log(localCart);

  // const [productsQuantity, setProductsQuantity] = useState(() => {
  //   const products = cart.map((product) => product.quantity);
  //   const total = products.reduce((a, b) => a + b);
  //   return total;
  // });

  // console.log(productsQuantity);

  if (error) {
    return <ErrorScreen error={error} />;
  }

  if (!success) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <PrivateRoute />;
  }

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
          {userCart.length == 0 ? (
            <div className="h-60% flex flex-col justify-center w-screen">
              <p className="text-2xl">No hay productos en el carrito :(</p>
            </div>
          ) : (
            <div className="flex flex-col col-start-1 col-end-7 gap-5">
              {userCart.map(
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
                      <label className="mr-3 text-sm w-fit font-Comfortaa text-charleston">
                        Cantidad:{" "}
                        <input
                          type="number"
                          value={quantity}
                          min="1"
                          className="w-10 mr-3"
                        />
                      </label>

                      <FontAwesomeIcon icon={faTrashCan} />
                    </div>
                  </div>
                )
              )}
            </div>
          )}
          {userCart.length == 0 ? (
            <></>
          ) : (
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
          )}
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
    // SE BUSCA EL USUARIO EN LA DB Y POSTERIORMENTE SE FILTRA PARA UNICAMENTE OBTENER EL CARRITO
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

    const cart = userCart.cart;

    if (cart.length == 0) {
      return {
        props: {
          success: true,
          userCart: [],
        },
      };
    }

    let reducedCart = [];

    // groupEquals se encarga de agrupar los productos que tienen el mismo código de talla
    const groupEquals = cart.reduce((group, product) => {
      const { sizeId } = product;
      group[sizeId] = group[sizeId] ?? [];
      group[sizeId].push(product);
      return group;
    }, {});

    // una vez agrupados estos productos, se recorren y se obtiene la cantidad total de cada uno
    Object.entries(groupEquals).forEach(([key, val]) => {
      // mediante una promesa se condiciona la ejecucion de una función una vez terminada la otra
      new Promise((resolve) => {
        resolve(extractTotalQuantity());
      }).then((result) => {
        reducedProduct();
      });

      // se obtiene la cantidad total de cada producto
      function extractTotalQuantity() {
        const productQuantity = groupEquals[key].map((group) => group.quantity);
        const totalQuantity = productQuantity.reduce(
          (acc, curr) => acc + curr,
          0
        );
        return totalQuantity;
      }

      // se guardan en un array los productos reducidos (sin copias) y con su cantidad total
      function reducedProduct() {
        const selectedProduct = groupEquals[key][0];
        selectedProduct.quantity = extractTotalQuantity();
        reducedCart.push(selectedProduct);
      }
    });

    const finalCart = reducedCart.sort();

    return {
      props: {
        success: true,
        userCart: finalCart,
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
