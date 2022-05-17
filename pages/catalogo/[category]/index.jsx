import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { connectDb } from "../../../lib/connectDb";
import Product from "../../../models/Product";
import Footer from "../../../components/Footer";
import HeadLayout from "../../../components/Head";
import Navbar from "../../../components/Navbar";
import LoadingScreen from "../../../components/alerts/Loading";

export default function ProductCategory({ success, error, items }) {
  const router = useRouter();
  const { category } = router.query;

  let cat = "";

  if(category){
    cat = category.substring(0, 1).toUpperCase() + category.substring(1);
  }


  if (!success) {
    return (
      <LoadingScreen/>
    );
  }
  
  return (
    <div>
      <HeadLayout section={cat} description={`Catálogo de ${cat}`} />
      <Navbar />
      {/* section */}
      <div>
        <div className="w-full h-auto py-20 pl-40 pr-10 bg-ivory">
          <div className="grid grid-rows-1 grid-cols-11 w-full h-80% items-center ">
            <h1 className="text-6xl text-charleston font-Pacifico">
              {cat}
            </h1>
            <div className="w-full h-full col-span-11 col-start-5 bg-center bg-no-repeat bg-cover shadow-xl rounded-3xl bg-abrigoGris" />
          </div>
          <div className="grid grid-flow-row grid-cols-3 mt-20 bg-ivory gap-y-20 gap-x-28">
            {
              items.map(({_id, name, sizes, productCode, img }) => (
                <Link key={_id} href={`/catalogo/${category}/${productCode}`}>
                  <a>
                    <div className={`shadow-xl w-full h-60% hover:brightness-75 flex flex-col justify-end bg-[url("https://${img}")] bg-cover bg-center rounded-3xl bg-no-repeat`}>
                      <div className="grid w-full grid-cols-3 grid-rows-1 rounded-b-3xl h-14 hover:cursor-pointer">
                        <div className="flex flex-col justify-center col-start-1 col-end-3 pl-6 text-base font-Comfortaa rounded-bl-3xl hover:bg-ivory bg-green">
                          <h3>{name}</h3>
                          <p>S/.{sizes[0].prize}</p>
                          {/* <p>{img}</p> */}
                        </div>
                        <div className="flex flex-col justify-center text-sm bg-charleston hover:bg-ivory hover:text-charleston font-Comfortaa text-ivory rounded-br-3xl">
                          <p className="text-center">Elige tus opciones</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>

              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ params }) {
  await connectDb()
  const { category } = params
  try {
    const res = await Product.find({ category: category })
    if (!res) {
      return {
        props: {
          success: false,
          error: "Categoría inválida"
        }
      }
    }
    const items = res.map((doc) => {
      const item = doc.toObject()
      item._id = `${item._id}`
      const { sizes } = item
      sizes.forEach(size => {
        size._id = `${size._id}`
        return size
      });
      return item
    })
    return {
      props: {
        success: true,
        items
      }
    }
  } catch (error) {
    return {
      props: {
        success: false,
        error: "Error de servidor"
      }
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}