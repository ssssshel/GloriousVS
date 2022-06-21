import useSWR from "swr";
import { useRouter } from "next/router";

import HeadLayout from "../../../../../../../components/Head";
import Navbar from "../../../../../../../components/Navbar";
import FormProduct from "../../../../../../../components/admin/FormProduct";
import PrivateRoute from "../../../../../../../components/alerts/Private";

import { useAuth } from "../../../../../../../utils/auth";

// FUNCTION FETCHER
const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error(
      "Ha ocurrido un error mientras se solicitaba la información"
    );
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const { data } = await res.json();
  return data;
};

// COMPONENT
export default function EditProduct() {
  const router = useRouter();

  const user = useAuth();

  const { productCode } = router.query;

  const { data: product, error } = useSWR(
    productCode ? `/api/admin/products/${productCode}` : null,
    fetcher
  );

  if (!user || user.hasPrivileges != true) {
    return <PrivateRoute />;
  }

  if (!product) {
    return <div>Cargando...</div>;
  }

  const formEditProduct = {
    productCode: product.productCode,
    category: product.category,
    name: product.name,
    material: product.material,
    season: product.season,
    color: product.color,
    img: product.img,
    sizes: [
      {
        size: product.sizes[0].size,
        stock: product.sizes[0].stock,
        prize: product.sizes[0].prize,
      },
      {
        size: product.sizes[1].size,
        stock: product.sizes[1].stock,
        prize: product.sizes[1].prize,
      },
      {
        size: product.sizes[2].size,
        stock: product.sizes[2].stock,
        prize: product.sizes[2].prize,
      },
      {
        size: product.sizes[3].size,
        stock: product.sizes[3].stock,
        prize: product.sizes[3].prize,
      },
    ],
  };
  return (
    <div>
      <HeadLayout section={"Edición de producto"} />
      <Navbar />
      <h1>Editar producto {productCode} </h1>
      <div className="p-20">
        <FormProduct formNewProduct={false} formData={formEditProduct} />
      </div>
      edit
    </div>
  );
}
