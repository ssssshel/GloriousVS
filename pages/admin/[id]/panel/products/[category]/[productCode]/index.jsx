import { connectDb } from "../../../../../../../lib/connectDb";
import Product from "../../../../../../../models/Product";

import HeadLayout from "../../../../../../../components/Head";
import Navbar from "../../../../../../../components/Navbar";
import { useRouter } from "next/router";

export default function SpecificProductAdmin({ success, error, item }) {
  console.log(success);
  console.log(error);
  console.log(item);

  const router = useRouter();

  const deleteProduct = async (productCode) => {
    try {
      await fetch(`/api/admin/products/${productCode}`, {
        method: "DELETE",
      });
      router.push("/admin/ADMINID/panel/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <HeadLayout section={`Producto - ${item.productCode}`} />
      <Navbar />
      <div className="flex flex-col w-full min-h-screen px-40 py-20 gap-11 bg-ivory">
        <div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
          <p className="text-3xl font-Comfortaa text-charleston">
            Producto {item.productCode}{" "}
          </p>
          <p>Volver</p>
        </div>

        <div className="w-full h-auto gap-5">
          <div className="flex flex-col gap-5">
            <div className="grid w-full h-40 grid-cols-6 grid-rows-1 gap-3 px-4 py-3 shadow-xl hover:bg-ivory bg-cornsilk rounded-2xl">
              <div className="bg-center bg-cover rounded-lg bg-abrigo"></div>
              <div className="flex flex-col justify-center col-start-2 col-end-6">
                <p className="text-sm font-Comfortaa text-charleston">
                  {item.name}
                </p>
                <p className="text-sm font-Comfortaa text-charleston">
                  Código de producto: {item.productCode}{" "}
                </p>
                <p className="text-sm font-Comfortaa text-charleston">
                  Tipo: {item.category}
                </p>
                <p className="text-sm font-Comfortaa text-charleston">
                  Material: {item.material}
                </p>
                <p className="text-sm font-Comfortaa text-charleston">
                  Temporada: {item.season}
                </p>
              </div>
              <div className="flex flex-col items-start justify-center">
                <p
                  onClick={() => deleteProduct(item.productCode)}
                  className="mr-3 text-sm cursor-pointer font-Comfortaa p-2 rounded-lg hover:bg-red-400 bg-red-700 text-ivory"
                >
                  Eliminar producto
                </p>
                <p
                  onClick={() =>
                    router.push(
                      `/admin/ADMINID/panel/products/chompas/${item.productCode}/edit`
                    )
                  }
                  className="mr-3 mt-7 text-sm cursor-pointer font-Comfortaa hover:font-bold text-charleston"
                >
                  Editar producto
                </p>
              </div>
            </div>
            <div className="w-full h-auto px-4 py-3 shadow-xl bg-cornsilk rounded-2xl">
              <p className="font-bold ">Tallas</p>
              {item.sizes.map(({ size, stock, prize }) => (
                <div
                  key={size}
                  className="px-4 py-3 border-b-2 shadow-xl border-charleston bg-ivory rounded-xl"
                >
                  <p>Talla {size}</p>

                  <div className="px-3 ">
                    <p>Precio: S/.{prize}</p>
                    <p>Stock: {stock} unidades</p>
                  </div>
                  {/* <p>Colores</p>
											<div className="border-b-2 border-charleston">
												<p>Color: </p>
												<div className="px-3 ">
													<p>Precio: </p>
													<p>Stock: </p>
												</div>
											</div>
											<div className="border-b-2 border-charleston">
												<p>Color: </p>
												<div className="px-3 ">
													<p>Precio: </p>
													<p>Stock: </p>
												</div>
											</div>
										</div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  await connectDb();
  const { category, productCode } = params;
  try {
    const res = await Product.findOne({
      category: category,
      productCode: productCode,
    }).lean();
    // configurar categorias validas, test
    if (!res) {
      return {
        props: {
          success: false,
          error: "Parámetros de busqueda inválidos",
        },
      };
    }
    res._id = `${res._id}`;
    const { sizes } = res;
    sizes.forEach((size) => {
      size._id = `${size._id}`;
      return size;
    });
    return {
      props: {
        success: true,
        item: res,
      },
    };
  } catch (error) {
    return {
      props: {
        success: false,
        error: "Error de servidor",
      },
    };
  }
}
