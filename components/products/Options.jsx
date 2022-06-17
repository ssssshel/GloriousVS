import { useState } from "react";
import Image from "next/image";

const ProductOptions = ({ item, selectedProduct }) => {
  const [productQuantity, setProductQuantity] = useState(1);

  const handleQuantity = (e) => {
    setProductQuantity(e.target.value);
  };

  const calcSubtotal = () => {
    return productQuantity * selectedProduct.prize;
  };

  function hidePopup() {
    document.getElementById("popup").style.display = "none";
    setProductQuantity(1);
  }

  return (
    <div
      id="popup"
      className="w-screen h-screen z-50 fixed top-0 left-0 hidden grid-cols-4 grid-rows-4 bg-black/50"
    >
      <div className="col-start-2 col-span-2 flex flex-col gap-6 p-12 justify-center w-full h-full row-start-2 bg-ivory rounded-lg row-span-2">
        <div className="flex justify-between">
          <p>Agregar a la bolsa de compras</p>
          <button className="text-xl hover:font-bold" onClick={hidePopup}>
            X
          </button>
        </div>
        <form className="flex justify-between">
          <div className="relative w-20 h-28">
            <Image
              alt=""
              src={item.img}
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div>
            <p>{item.productCode}</p>
            <p>{item.name}</p>
            <p>Talla: {selectedProduct.size}</p>
          </div>
          <div>
            <p>Precio unitario: S/.{selectedProduct.prize}</p>
            <p>Precio total: S/.{calcSubtotal()}</p>
            {selectedProduct.stock <= 0 ? (
              <div></div>
            ) : (
              <label>
                Cantidad:
                <input
                  className="ml-5 w-12"
                  type="number"
                  name="qnt"
                  id="qnt"
                  value={productQuantity}
                  onChange={handleQuantity}
                  min={1}
                  max={selectedProduct.stock}
                />
              </label>
            )}
          </div>
        </form>
        <div className="flex justify-end">
          {selectedProduct.stock <= 0 ? (
            <p>PRODUCTO SIN STOCK</p>
          ) : (
            <button
              id="btCart"
              className=" bg-charleston text-ivory w-fit p-3 rounded-lg hover:bg-teal"
            >
              Agregar al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;
