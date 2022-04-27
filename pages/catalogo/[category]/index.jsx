import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import HeadLayout from "../../../components/Head";
import Navbar from "../../../components/Navbar";

export default function ProductCategory() {
  const router = useRouter();
  const { category } = router.query;

  let cat = "";

  cat = category.substring(0, 1).toUpperCase() + category.substring(1);

  // setCat("loading");

  return (
    <div>
      <HeadLayout section={category} description={`Catálogo de ${category}`} />
      <Navbar />
      {/* section */}
      <div>
        <div className="w-full h-auto py-32 pl-40 pr-10">
          <div>
            <div className="" />
          </div>
          <h1 className="text-6xl text-charleston font-Pacifico">{cat}</h1>
          <div className="grid grid-flow-row grid-cols-3 mt-20 gap-y-20 gap-x-28">
            <Link href={`/catalogo/${category}/`}>
              <a>
                <div className="w-full h-60% hover:brightness-75 flex flex-col justify-end bg-abrigo bg-cover rounded-3xl bg-no-repeat">
                  <div className="flex flex-col items-center justify-center w-full hover:bg-teal h-14 rounded-b-3xl hover:cursor-pointer bg-charleston">
                    <span className="text-ivory font-Comfortaa">Abrigos</span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
