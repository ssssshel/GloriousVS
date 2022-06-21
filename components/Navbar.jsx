import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

import firebaseApp from "../firebase/credentials";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebaseApp);

import { useAuth } from "../utils/auth";

const Navbar = () => {
  const router = useRouter();
  const userData = useAuth();
  // console.log(`userdata: ${userData.userId }`)

  const signOutEffect = () => {
    signOut(auth);
    router.push("/");
  };

  /* AUTHENTICATED USER */

  if (userData && userData.role === "user") {
    return (
      <header className="fixed top-0 z-10 flex flex-row items-center justify-between w-full h-20 px-10 backdrop-blur-lg navbar bg-ivory/80 ">
        <Link href="/">
          <a className="text-3xl font-Pacifico text-charleston">Glorious</a>
        </Link>
        <ul className="flex flex-row gap-12 text-charleston font-Comfortaa">
          <Link href="/">
            <a className="hover:font-bold ">Inicio</a>
          </Link>
          <Link href="/catalogo">
            <a className="hover:font-bold ">Productos</a>
          </Link>
          <Link href={`/client/${userData.userId}`}>
            <a className="hover:font-bold ">Mi cuenta</a>
          </Link>
          <Link href={`/client/${userData.userId}/cart`}>
            <a>
              <FontAwesomeIcon
                className="text-charleston className='hover:font-bold'"
                icon={faBagShopping}
              />
            </a>
          </Link>
          <a
            onClick={() => signOutEffect()}
            className="cursor-pointer hover:font-bold "
          >
            Cerrar sesión
          </a>
        </ul>
      </header>
    );
  } else if (userData && userData.role != "user") {
    /* AUTHENTICATED ADMIN */
    return (
      <header className="fixed top-0 z-10 flex flex-row items-center justify-between w-full h-20 px-10 backdrop-blur-lg navbar bg-ivory/80 ">
        <Link href="/">
          <a className="text-3xl font-Pacifico text-charleston">
            GloriousAdmin
          </a>
        </Link>
        <ul className="flex flex-row gap-12 font-Comfortaa">
          <Link href="/">
            <a className="hover:font-bold ">Inicio</a>
          </Link>
          <Link href="/">
            <a className="hover:font-bold ">Panel de administración</a>
          </Link>
          <a
            onClick={() => signOutEffect()}
            className="cursor-pointer hover:font-bold "
          >
            Cerrar sesión
          </a>
        </ul>
      </header>
    );
  }

  /* NAVBAR VISITOR */

  return (
    <header className="fixed top-0 z-10 flex flex-row items-center justify-between w-full h-20 px-10 backdrop-blur-lg navbar bg-ivory/80 ">
      <Link href="/">
        <a className="text-3xl font-Pacifico text-charleston">Glorious</a>
      </Link>
      <ul className="flex flex-row gap-12 font-Comfortaa">
        <Link href="/">
          <a className="hover:font-bold ">Inicio</a>
        </Link>
        <Link href="/catalogo">
          <a className="hover:font-bold ">Productos</a>
        </Link>
        <Link href="/access/login">
          <a className="hover:font-bold">Iniciar sesión</a>
        </Link>

        <Link href="/access/signup">
          <a className="hover:font-bold ">Registro</a>
        </Link>
      </ul>
    </header>
  );
};

export default Navbar;
