import Link from "next/link";

import { useState } from "react"
import { connectDb } from "../../../../lib/connectDb";
import Product from "../../../../models/Product";
import { useRouter } from "next/router";

import HeadLayout from "../../../../components/Head";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import LoadingScreen from "../../../../components/alerts/Loading";

export default function IndividualProduct({ success, error, item }) {

  const router = useRouter();
  const { category } = router.query;

  let cat = "";
  cat = category.substring(0, 1).toUpperCase() + category.substring(1);

  // HOOK DE ESTADO DE TALLA SELECCIONADA
  let [selectedSize, setSelectedSize] = useState({ size: item.sizes[0].size, stock: item.sizes[0].stock, prize: item.sizes[0].prize })

  if (!success) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <div>
      <HeadLayout section={item.name} description={item.name} />
      <Navbar />
      <div className="w-full h-auto py-20 bg-ivory">
        {/* principal */}
        <section className="grid items-center w-full h-80% grid-cols-10 grid-rows-1 px-40 ">
          <div className="w-full h-full col-start-1 col-end-5 bg-center bg-no-repeat bg-cover shadow-xl rounded-3xl bg-abrigoGris" />
          <div className="flex flex-col h-full col-start-7 col-end-11 justify-evenly">
            {/* name */}
            <h1 className="text-5xl font-Pacifico text-charleston">
              {item.name}
            </h1>
            <p className="text-lg text-charleston font-Comfortaa">S/.{selectedSize.prize}</p>
            {/* colorSelected */}
            <div>
              <p className="text-base text-charleston font-Comfortaa">
                Color: {item.color}
              </p>
              {/* colors */}
              <div>
                <ul className="flex flex-row gap-4">
                  <li className="w-6 h-6 border-2 cursor-pointer hover:brightness-75 bg-amber-400 border-charleston rounded-3xl"></li>
                </ul>
              </div>
            </div>
            <div>
              {/* sizeSlected */}
              <p className="text-base text-charleston font-Comfortaa">
                Talla: {selectedSize.size}
              </p>
              {/* size */}
              <div>
                <ul className="flex flex-row gap-5">
                  {
                    item.sizes.map(({ size, stock, prize }) => (
                      <li key={size} onClick={() => setSelectedSize(selectedSize = { size, stock, prize })} className="text-center border-2 rounded-lg cursor-pointer hover:bg-slate-400 border-charleston w-14 h-7">
                        {size}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div>
              {/* details */}
              <p className="text-lg text-charleston font-Comfortaa">
                Características:
              </p>
              {/* detailsList */}
              <ul className="text-sm font-Comfortaa text-charleston">
                <li>Modelo: {item.productCode}</li>
                <li>Tipo: {cat}</li>
                <li>Material: {item.material}</li>
                <li>Temporada: {item.season}</li>
              </ul>
            </div>
            {/* stock */}
            <div>
              <p className="text-xs font-Comfortaa text-charleston">
                Stock: {
                  selectedSize.stock ? `${selectedSize.stock} unidad/es`:
                  'Sin stock'
                }
              </p>
              {/* selectOptions */}
              <div className="flex flex-col items-center justify-center h-16 shadow-xl cursor-pointer hover:bg-teal rounded-2xl bg-charleston w-80">
                <p className="text-lg font-Comfortaa text-ivory">
                  Elige tus opciones
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* other products */}
        <section className="flex flex-col w-full h-screen gap-16 py-20 pt-40 pl-40 pr-10">
          <h2 className="text-5xl font-Pacifico text-charleston">
            Productos similares
          </h2>
          <div className="grid w-full h-full grid-cols-4 grid-rows-1 gap-20">
            <Link href={`/catalogo/`}>
              <a>
                <div className="flex flex-col justify-end w-full h-full bg-no-repeat bg-cover shadow-xl hover:brightness-75 bg-abrigo rounded-2xl">
                  <div className="grid w-full grid-cols-3 grid-rows-1 rounded-b-3xl h-14 hover:cursor-pointer">
                    <div className="flex flex-col justify-center col-start-1 col-end-3 pl-4 text-sm font-Comfortaa rounded-bl-2xl hover:bg-ivory bg-green">
                      <h3>Abrigo camel</h3>
                      <p>S/.42</p>
                    </div>
                    <div className="flex flex-col justify-center text-xs bg-charleston hover:bg-ivory hover:text-charleston font-Comfortaa text-ivory rounded-br-2xl">
                      <p className="text-center">Elige tus opciones</p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  await connectDb()
  const { category, productCode } = params

  try {
    const res = await Product.findOne({ category: category, productCode: productCode }).lean()
    if (!res) {
      return {
        props: {
          success: false,
          error: "Categoría o código de producto inválidos"
        }
      }
    }
    res._id = `${res._id}`
    const { sizes } = res
    sizes.forEach(size => {
      size._id = `${size._id}`
      return size
    });
    return {
      props: {
        success: true,
        item: res
      }
    }

  } catch (error) {
    return {
      props: {
        success: false,
        error: "Error del servidor"
      }
    }
  }
}