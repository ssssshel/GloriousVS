import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ hasPrivileges, clientID }) => {
  const router = useRouter();

  // const { data: session, status } = useSession()

  {
    /* AUTHENTICATED STATE */
  }
  // if (!hasPrivileges ) {
  //   return (
  //     <header className="fixed top-0 z-50 flex flex-row items-center justify-between w-full h-20 px-10 backdrop-blur-lg navbar bg-ivory/80 ">
  //       <Link href="/">
  //         <a className="text-3xl font-Pacifico text-charleston">Glorious</a>
  //       </Link>
  //       <ul className="flex flex-row gap-12 text-charleston font-Comfortaa">
  //         <Link href="/">
  //           <a className="hover:font-bold ">Inicio</a>
  //         </Link>
  //         <Link href="/catalogo">
  //           <a className="hover:font-bold ">Productos</a>
  //         </Link>
  //         <Link href={`/client/${clientID}`}>
  //           <a className="hover:font-bold ">Mi cuenta</a>
  //         </Link>
  //         <Link href={`/client/${clientID}/cart`}>
  //           <a>
  //             <FontAwesomeIcon className="text-charleston className='hover:font-bold'" icon={faBagShopping} />
  //           </a>
  //         </Link>
  //         <a onClick={() => signOut({callbackUrl: "/"})} className="hover:font-bold ">Cerrar sesión</a>

  //       </ul>
  //     </header>
  //   )
  {
    /* AUTHENTICATED ADMIN */
  }
  // } else if (hasPrivileges === true && status === "authenticated") {
  //   return (
  //     <header className="fixed top-0 z-10 flex flex-row items-center justify-between w-full h-20 px-10 backdrop-blur-lg navbar bg-ivory/80 ">
  //       <Link href="/">
  //         <a className="text-3xl font-Pacifico text-charleston">GloriousAdmin</a>
  //       </Link>
  //       <ul className="flex flex-row gap-12 font-Comfortaa">
  //         <Link href="/">
  //           <a className="hover:font-bold ">Inicio</a>
  //         </Link>
  //         <Link href="/">
  //           <a className="hover:font-bold ">Panel de administración</a>
  //         </Link>
  //         <a onClick={() => signOut({callbackUrl: "/"})} className="hover:font-bold ">Cerrar sesión</a>

  //       </ul>
  //     </header>
  //   )
  {
    /* NAVBAR VISITOR */
  }

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

        <Link href="/access/register">
          <a className="hover:font-bold ">Registro</a>
        </Link>
      </ul>
    </header>
  );
};

export default Navbar;
