import HeadLayout from "../../../components/Head";
import Navbar from "../../../components/Navbar";
import PrivateRoute from "../../../components/alerts/Private";

import { useRouter } from "next/router";
import { useAuth } from "../../../utils/auth";

export default function AdminPanel({}) {
  const router = useRouter();
  const user = useAuth()

  if(!user || user.hasPrivileges != true){
    return <PrivateRoute/>
  }

  return (
    <div>
      <HeadLayout section={`adminName`} />
      <Navbar />
      <div className="flex flex-col w-full px-40 py-20 gap-11 bg-ivory">
        <div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
          <p className="text-3xl font-Pacifico text-charleston">Hola Admin</p>
        </div>
        <div className="">
          <div className="flex flex-col gap-5">
            <div
              onClick={() => router.push("/admin/adminId/panel/products")}
              className="flex flex-row items-center justify-between w-full h-20 px-6 text-2xl shadow-xl cursor-pointer hover:bg-cornsilk font-Pacifico text-charleston rounded-2xl bg-teal"
            >
              <p>Productos</p>
              <p>{">"} </p>
            </div>
            <div
              onClick={() => router.push("/admin/adminId/panel/sales")}
              className="flex flex-row items-center justify-between w-full h-20 px-6 text-2xl shadow-xl cursor-pointer hover:bg-cornsilk font-Pacifico text-charleston rounded-2xl bg-teal"
            >
              <p>Ventas</p>
              <p>{">"} </p>
            </div>
            <div
              onClick={() => router.push("/admin/adminId/panel/users")}
              className="flex flex-row items-center justify-between w-full h-20 px-6 text-2xl shadow-xl cursor-pointer hover:bg-cornsilk font-Pacifico text-charleston rounded-2xl bg-teal"
            >
              <p>Usuarios</p>
              <p>{">"} </p>
            </div>
            <div
              onClick={() => router.push("/admin/adminId/panel/admins")}
              className="flex flex-row items-center justify-between w-full h-20 px-6 text-2xl shadow-xl cursor-pointer hover:bg-cornsilk font-Pacifico text-charleston rounded-2xl bg-teal"
            >
              <p>Administradores</p>
              <p>{">"} </p>
            </div>
            <div
              onClick={() => router.push("/admin/adminId/panel/editors")}
              className="flex flex-row items-center justify-between w-full h-20 px-6 text-2xl shadow-xl cursor-pointer hover:bg-cornsilk font-Pacifico text-charleston rounded-2xl bg-teal"
            >
              <p>Editores</p>
              <p>{">"} </p>
            </div>
            <div
              onClick={() => router.push("/admin/adminId/profile")}
              className="flex flex-row items-center justify-between w-full h-20 px-6 text-2xl shadow-xl cursor-pointer hover:bg-cornsilk font-Pacifico text-charleston rounded-2xl bg-teal"
            >
              <p>Mi perfil</p>
              <p>{">"} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params, context }) {
  return {
    props: {
      success: true,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
