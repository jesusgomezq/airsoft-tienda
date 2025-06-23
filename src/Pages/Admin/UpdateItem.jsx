import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../components/context/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/firebaseConfig";
import Loader from "../../components/Loader/Loader";
import {
  categoryData,
  
} from "../../components/constants";

export const repuestosAccData = [
  {
    title: "cargadores",
  },
  {
    title: "baterias",
  },
  {
    title: "BBs y gas",
  },
  {
    title: "partes internas",
  },
  {
    title: "granadas y minas",
  },
  {
    title: "supresores",
  },
  {
    title: "trazadoras",
  },
  {
    title: "decorativos",
  },
  {
    title: "miras/opticas",
  },
];

export const indumentariaData = [
  {
    title: "chalecos",
  },
  {
    title: "cascos",
  },
  {
    title: "fundas",
  },
  {
    title: "uniformes",
  },
  {
    title: "bolsas",
  },
  {
    title: "fundas rigidas",
  },
  {
    title: "cuchillos",
  },
  {
    title: "protección",
  },
  {
    title: "radios",
  },
];

const UpdateItem = () => {
  // Context
  const context = useContext(CartContext);
  const { loading, setLoading, getProductFunction } = context;

  // Navegacion
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  // Estado de productos
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
    description: "",
    logoBrand: "",
    brand: "",
    range: "",
    time: Timestamp.now(),
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Funcion para obtener un producto
  const getSingleProduct = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      const product = productTemp.data();
      console.log(product);

      setProduct({
        title: product?.title,
        price: product?.price,
        image: product?.image,
        category: product?.category,
        description: product?.description,
        stock: product?.stock,
        quantity: product?.quantity,
        logoBrand: product?.logoBrand,
        range: product?.range,
        time: product?.time,
        date: product?.date,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Cargar el producto
  const upDateItem = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", id), product);
      toast.success("Producto Cargado Correctamente");
      getProductFunction();
      setLoading(false);
      navigate("/admin");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        {loading && <Loader />}
        <div className="bg-blue-gray-200 px-8 py-6 border border-gray-300 rounded-xl shadow-xl">
          <div className="mb-5">
            <h2 className="capitalize text-center text-2xl font-bold text-bgDesingColor">
              agregar producto
            </h2>
          </div>

          <div className="mb-3">
            <input
              className="bg-gray-200 border border-gray-400 px-2 py-2 rounded-xl w-96 outline-none
            placeholder-gray-500"
              name="title"
              placeholder="Titulo del Porducto"
              type="text"
              onChange={(e) => {
                setProduct({
                  ...product,
                  title: e.target.value,
                });
              }}
              value={product.title}
            />
          </div>

          <div className="mb-3">
            <input
              className="bg-gray-200 border border-gray-400 px-2 py-2 rounded-xl w-96 outline-none
            placeholder-gray-500"
              placeholder="Precio del Producto"
              type="number"
              onChange={(e) => {
                setProduct({
                  ...product,
                  price: e.target.value,
                });
              }}
              value={Number.parseFloat(product.price).toFixed(2)}
            />
          </div>

          <div className="mb-3">
            <input
              className="bg-gray-200 border border-gray-400 px-2 py-2 rounded-xl w-96 outline-none
            placeholder-gray-500"
              name="title"
              placeholder="Imagen del producto"
              type="text"
              onChange={(e) => {
                setProduct({
                  ...product,
                  image: e.target.value,
                });
              }}
              value={product.image}
            />
          </div>

          <div className="mb-3">
            <input
              className="bg-gray-200 border border-gray-400 px-2 py-2 rounded-xl w-96 outline-none
            placeholder-gray-500"
              name="title"
              placeholder="Logo de la Marca"
              type="text"
              onChange={(e) => {
                setProduct({
                  ...product,
                  logoBrand: e.target.value,
                });
              }}
              value={product.logoBrand}
            />
          </div>

          <div className="mb-3">
            <input
              className="bg-gray-200 border border-gray-400 px-2 py-2 rounded-xl w-96 outline-none
                  placeholder-gray-500"
              name="title"
              placeholder="stock"
              type="number"
              onChange={(e) => {
                setProduct({
                  ...product,
                  stock: e.target.value,
                });
              }}
              value={product.stock}
            />
          </div>

          {/* 
          <div className="mb-3">
            <input
              className="bg-gray-200 border border-gray-400 px-2 py-2 rounded-xl w-96 outline-none
            placeholder-gray-500"
              name="title"
              placeholder="precio original"
              type="text"
              onChange={(e) => {
                setProduct({
                  ...product,
                  originalPrice: e.target.value,
                });
              }}
              value={product.originalPrice}
            />
          </div> */}

          {/* <div className="mb-3">
            <input
              className="bg-gray-200 border border-gray-400 px-2 py-2 rounded-xl w-96 outline-none
            placeholder-gray-500"
              name="title"
              placeholder="Rango"
              type="text"
              onChange={(e) => {
                setProduct({
                  ...product,
                  range: e.target.value,
                });
              }}
              value={product.range}
            />
          </div> */}

          <div className="mb-3">
            <select
              onChange={(e) => {
                setProduct({
                  ...product,
                  category: e.target.value,
                });
              }}
              value={product.category}
              className="w-full px-1 py-2 text-gray-600 bg-gray-200 border
            border-gray-400 rounded-xl outline-none capitalize">
              <option>seleciona una categoria</option>
              <optgroup label="Marcadoras">
                {categoryData.map((value, i) => {
                  const { title } = value;
                  return (
                    <option
                      className="first-letter:uppercase text-gray-600"
                      key={i}
                      value={title}>
                      {title}
                    </option>
                  );
                })}
              </optgroup>
              <optgroup label="repuestos/accesorios">
                {repuestosAccesoriosData.map((value, i) => {
                  const { title } = value;
                  return (
                    <option
                      className="first-letter:uppercase text-gray-600"
                      key={i}
                      value={title}>
                      {title}
                    </option>
                  );
                })}
              </optgroup>
              <optgroup label="indumantaria">
                {indumentariaData.map((value, i) => {
                  const { title } = value;
                  return (
                    <option
                      className="first-letter:uppercase text-gray-600"
                      key={i}
                      value={title}>
                      {title}
                    </option>
                  );
                })}
              </optgroup>
            </select>
          </div>

          <div className="mb-3">
            <textarea
              className="w-full px-2 py-1 text-gray-700 bg-gray-200 border
            border-gray-400 rounded-xl outline-none placeholder:text-gray-500"
              rows="5"
              placeholder="Descripción del producto"
              name="description"
              onChange={(e) => {
                setProduct({
                  ...product,
                  description: e.target.value,
                });
              }}
              value={product.description}></textarea>
          </div>

          <div className="mb-3">
            <button
              onClick={upDateItem}
              type="button"
              className="capitalize bg-bgDesingColor hover:bg-bgBodyColor
            transition-all duration-300 w-full text-gray-300 py-2 font-semibold
            rounded-xl">
              agregar producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
