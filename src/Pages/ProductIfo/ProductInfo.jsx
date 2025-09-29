import { Fragment, useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { FaFacebookF, FaStar } from "react-icons/fa";
import { CartContext } from "../../components/context/CartContext";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/firebaseConfig";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteItemToCart } from "../../Redux/cartSlice";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosChatboxes } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { Dialog, Transition } from "@headlessui/react";

const ProductInfo = () => {
  const context = useContext(CartContext);
  const { loading, setLoading } = context;
  const [product, setProduct] = useState("");
  const { id } = useParams();

  // Estado del modal
  let [open, setOpen] = useState(false);

  // Iniciamos funcion para abrir el modal
  function closeModal() {
    setOpen(false);
  }

  // Iniciamos funcion para cerrar el modal
  function openModal() {
    setOpen(true);
  }

  // Datos del producto
  const productData = async () => {
    setLoading(true);

    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      setProduct({ ...productTemp.data(), id: productTemp.id });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Funcion para agregar un producto al carrito
  const addItem = (item) => {
    dispatch(addToCart(item));
    toast.success("Agregaste un producto a tu carrito 👍");
  };

  // Funcion para eliminar un producto del carrito
  const deleteItem = (item) => {
    dispatch(deleteItemToCart(item));
    toast.success("Eliminaste un producto del carrito 👍");
  };
  useEffect(() => {
    productData();
  }, []);

  return (
    <Layout>
      <section className="py-5 lg:py-16 font-bodyFont overflow-hidden text-gray-600">
        {loading ? (
          <>
            <div className="flex justify-center">
              <Loader />
            </div>
          </>
        ) : (
          <div className="max-w-6xl px-4 mx-auto">
            <div className="flex flex-wrap mb-24 -mx-4">
              <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                <div>
                  <div>
                    <img
                      className="w-full rounded-lg lg:h-[35em] object-contain"
                      src={product?.image}
                      alt={product?.title}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="lg:pl-20">
                  <div className="mb-6">
                    <h2
                      className="max-w-xl mb-1 text-xl font-semibold leading-loose
                       text-gray-600 md:text-2xl dark:text-gray-300 font-titleFont tracking-widest">
                      {product?.brand}
                    </h2>
                    <h1 className="text-gray-800 text-3xl font-medium mb-1 capitalize">
                      {product?.title}
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                      ID: (<span className="">{product?.id}</span>)
                    </p>
                    <div className="flex flex-wrap items-center mb-6">
                      <span className="flex mb-4 mr-2 lg:mb-0 text-2xl text-orange-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </span>
                      <span className="text-gray-600 ml-3 border-l-2 border-gray-300 py-2 pl-3 text-xl">
                        4 comentarios
                      </span>
                      <span className="flex ml-3 pl-3 py-2 border-l-2 space-x-2 border-gray-300 text-xl text-gray-600">
                        <FaFacebookF />
                        <FaXTwitter />
                        <IoIosChatboxes />
                      </span>
                    </div>
                    <p className="flex justify-between items-center font-semibold text-bgDesingColor dark:text-gray-400 ">
                      <span className="text-gray-500 first-letter:uppercase">
                        cantidad: {product.stock}
                      </span>
                      <img
                        className="w-12 mr-10"
                        src={product.logoBrand}
                        alt={product.title}
                      />
                    </p>
                  </div>
                  <div className="mb-6">
                    <p className="mb-2 leading-relaxed border-b-2 pb-4 border-gray-300">
                      {product?.description}
                    </p>

                    {/* <div>
                      <h2 className=" capitalize mb-2 text-lg font-bold text-gray-800 dark:text-gray-400">
                        cantidad:{" "}
                        <span className="text-gray-700">{product.stock}</span>
                      </h2>
                    </div> */}
                  </div>
                  {/* <div className="mb-6" /> */}
                  <div className="flex justify-between">
                    <span className="font-medium text-2xl text-bgBodyColor">
                      ${Number.parseFloat(product?.price).toFixed(2)}
                    </span>
                    <div className="flex flex-wrap items-center mb-6">
                      {cartItems.some((p) => p.id === product.id) ? (
                        <button
                          onClick={() => deleteItem(product)}
                          className="focus:outline-none text-gray-300 bg-red-900  hover:bg-red-500 font-medium rounded-lg py-2 px-6 duration-300 transition-all ml-auto flex first-letter:uppercase">
                          Eliminar del carrito
                        </button>
                      ) : (
                        <button
                          onClick={() => addItem(product)}
                          className="focus:outline-none text-gray-300 bg-bgBodyColor  hover:bg-bgDesingColor font-medium rounded-lg py-2 px-6 duration-300 transition-all ml-auto flex first-letter:uppercase"
                          type="button">
                          Agregar al carrito
                        </button>
                      )}
                      <button className="rounded-full w-10 h-10 bg-gray-300 p-0 border-0 inline-flex items-center justify-center ml-4 text-xl">
                        <span>
                          <FcLike />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default ProductInfo;
