import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="sticky z-30 flex items-center justify-center w-full h-screen px-10 bg-charleston">
      <div className="flex flex-row justify-around w-full">
        <h2 className="text-6xl font-Pacifico text-ivory">Glorious</h2>
        {/* col1 */}
        <ul className="flex flex-col gap-4">
          <li className="mb-2 -ml-4 text-xl font-Comfortaa text-ivory">
            Te ayudamos
          </li>
          <li className="font-Comfortaa hover:font-bold text-ivory">
            <Link href="">
              <a>Libro de reclamaciones</a>
            </Link>
          </li>
          <li className="font-Comfortaa hover:font-bold text-ivory">
            <Link href="">
              <a>Atención al cliente</a>
            </Link>
          </li>
          <li className="font-Comfortaa hover:font-bold text-ivory">
            <Link href="">
              <a>Preguntas frecuentes</a>
            </Link>
          </li>
          <li className="font-Comfortaa hover:font-bold text-ivory">
            <Link href="">
              <a>Cambios y devoluciones</a>
            </Link>
          </li>
          <li className="font-Comfortaa hover:font-bold text-ivory">
            <Link href="">
              <a>Seguimiento a mi orden</a>
            </Link>
          </li>
          <li className="font-Comfortaa hover:font-bold text-ivory">
            <Link href="">
              <a>Términos y condiciones</a>
            </Link>
          </li>
        </ul>
        {/* col2 */}
        <ul className="flex flex-col gap-4">
          <li className="mb-2 -ml-4 text-xl font-Comfortaa text-ivory">
            Nosotros
          </li>
          <li className="font-Comfortaa hover:font-bold text-ivory">
            <Link href="">
              <a>Nuestra empresa</a>
            </Link>
          </li>
          <li className="font-Comfortaa hover:font-bold text-ivory">
            <Link href="">
              <a>Nuestros diseñadores</a>
            </Link>
          </li>
          <li className="font-Comfortaa hover:font-bold text-ivory">
            <Link href="">
              <a>Proveedores</a>
            </Link>
          </li>
          <li className="font-Comfortaa hover:font-bold text-ivory">
            <Link href="">
              <a>Trabaja con nosotros</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-0 flex flex-row items-center justify-end w-full h-16 px-10 bg-cornsilk ">
        <div className="flex flex-row gap-8 text-3xl">
          <FontAwesomeIcon className="hover:text-cornsilk" icon={faFacebook} />
          <FontAwesomeIcon className="hover:text-cornsilk" icon={faInstagram} />
          <FontAwesomeIcon className="hover:text-cornsilk" icon={faTwitter} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
