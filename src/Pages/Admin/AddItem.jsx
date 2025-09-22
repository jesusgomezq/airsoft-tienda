import { useContext, useState } from "react";
import { CartContext } from "../../components/context/CartContext";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/firebaseConfig";
import Loader from "../../components/Loader/Loader";
import {

  categoryData,
  
} from "../../components/constants";

const AddItem = () => {
  // Context
  const context = useContext(CartContext);
  const { loading, setLoading } = context;

  // Navegacion
  const navigate = useNavigate();

  // Estado de productos
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
    description: "",
    quantity: "1",
    stock: "",
    logoBrand: "",
    brand: "",
    range: "",
    time: Timestamp.now(),
    date: new Date().toLocaleDateString("en-AR", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Funcion agregar producto
  const addProductFunction = async () => {
    if (
      product.title === "" ||
      product.price === "" ||
      product.image === "" ||
      product.category === "" ||
      product.logoBrand === ""
    ) {
      return toast.error("Campos Requeridos");
    }
    setLoading(true);

    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, product);
      toast.success("Agregaste el Producto Exitosamente");
      navigate("/admin");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Error, vuelve a Cargar el Producto");
    }
  };
  return (
    <div className="h-auto">
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
              value={product.price}
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
              placeholder="marca"
              type="text"
              onChange={(e) => {
                setProduct({
                  ...product,
                  brand: e.target.value,
                });
              }}
              value={product.brand}
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
              <optgroup label="Categorias">
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
              onClick={addProductFunction}
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

export default AddItem;
