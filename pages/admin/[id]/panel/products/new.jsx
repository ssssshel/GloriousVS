import { useState } from "react";
import { nanoid } from "nanoid";

import HeadLayout from "../../../../../components/Head";
import Navbar from "../../../../../components/Navbar";
import FormProduct from "../../../../../components/admin/FormProduct";

const NewProduct = () => {
  const id = nanoid(10);

  const formNewProduct = {
    productCode: id,
    category: "",
    name: "",
    material: "",
    season: "",
    color: "",
    img: "",
    sizes: [
      {
        size: "S",
        stock: 0,
        prize: 0,
      },
      {
        size: "M",
        stock: 0,
        prize: 0,
      },
      {
        size: "L",
        stock: 0,
        prize: 0,
      },
      {
        size: "XL",
        stock: 0,
        prize: 0,
      },
    ],
  };

  return (
    <div>
      <HeadLayout section={"Nuevo Producto"} />
      <Navbar />
      <div className="flex flex-col w-full min-h-screen gap-6 px-10 py-20 bg-ivory">
        <div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
          <p className="text-3xl font-Pacifico text-charleston">
            Nuevo producto
          </p>
        </div>
        <div className="w-full px-6 py-6 shadow-xl bg-cornsilk rounded-2xl">
          <FormProduct formData={formNewProduct} />
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
