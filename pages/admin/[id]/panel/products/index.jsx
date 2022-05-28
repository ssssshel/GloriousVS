
import HeadLayout from "../../../../../components/Head";
import Navbar from "../../../../../components/Navbar";
import PrivateRoute from "../../../../../components/alerts/Private";

import { useAuth } from "../../../../../utils/auth";
import { useRouter } from "next/router";

const ProductsPanel = () => {
  const router = useRouter();
  const user = useAuth()

  if (!user || user.hasPrivileges != true) {
    return <PrivateRoute />
  }

  return (
    <div>
      <HeadLayout section={"Panel de productos"} />
      <Navbar />
      <div className="flex flex-col w-full min-h-screen gap-6 px-40 py-20 bg-ivory">
        <div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
          <p className="text-3xl font-Pacifico text-charleston">
            Panel de productos
          </p>
        </div>
        <div className="gap-4">
          {/* OPCIONES INVENTARIO */}
          <div className="flex flex-col justify-center gap-5 px-6 py-4 shadow-xl bg-cornsilk rounded-xl">
            <p className="text-xl font-Pacifico text-charleston">Inventario</p>
            <div className="p-3 rounded-lg cursor-pointer hover:bg-green bg-charleston">
              <p
                onClick={() =>
                  router.push("/admin/ADMINID/panel/products/new")
                }
                className="text-ivory "
              >
                Agregar nuevo producto
              </p>
            </div>
            <div className="p-3 rounded-lg cursor-pointer hover:bg-green bg-teal">
              <p
                onClick={() =>
                  router.push("/admin/ADMINID/panel/products/abrigos")
                }
                className="text-ivory "
              >
                Abrigos
              </p>
            </div>
            <div className="p-3 rounded-lg cursor-pointer hover:bg-green bg-teal">
              <p
                onClick={() =>
                  router.push("/admin/ADMINID/panel/products/casacas")
                }
                className="text-ivory "
              >
                Casacas
              </p>
            </div>
            <div className="p-3 rounded-lg cursor-pointer hover:bg-green bg-teal">
              <p
                onClick={() =>
                  router.push("/admin/ADMINID/panel/products/chompas")
                }
                className="text-ivory "
              >
                Chompas
              </p>
            </div>
            <div className="p-3 rounded-lg cursor-pointer hover:bg-green bg-teal">
              <p
                onClick={() =>
                  router.push("/admin/ADMINID/panel/products/joggers")
                }
                className="text-ivory "
              >
                Joggers
              </p>
            </div>
            <div className="p-3 rounded-lg cursor-pointer hover:bg-green bg-teal">
              <p
                onClick={() =>
                  router.push("/admin/ADMINID/panel/products/jeans")
                }
                className="text-ivory "
              >
                Jeans
              </p>
            </div>
            <div className="p-3 rounded-lg cursor-pointer hover:bg-green bg-teal">
              <p
                onClick={() =>
                  router.push("/admin/ADMINID/panel/products/faldas")
                }
                className="text-ivory "
              >
                Faldas
              </p>
            </div>
            <div className="p-3 rounded-lg cursor-pointer hover:bg-green bg-teal">
              <p
                onClick={() =>
                  router.push("/admin/ADMINID/panel/products/blusas")
                }
                className="text-ivory "
              >
                Blusas
              </p>
            </div>
            <div className="p-3 rounded-lg cursor-pointer hover:bg-green bg-teal">
              <p
                onClick={() =>
                  router.push("/admin/ADMINID/panel/products/polos")
                }
                className="text-ivory "
              >
                Polos
              </p>
            </div>
            <div className="p-3 rounded-lg cursor-pointer hover:bg-green bg-teal">
              <p
                onClick={() =>
                  router.push("/admin/ADMINID/panel/products/shorts")
                }
                className="text-ivory "
              >
                Shorts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPanel;
