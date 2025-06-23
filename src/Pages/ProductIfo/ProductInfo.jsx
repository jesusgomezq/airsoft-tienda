import { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { FaStar } from "react-icons/fa";
import { CartContext } from "../../components/context/CartContext";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/firebaseConfig";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteItemToCart } from "../../Redux/cartSlice";

const ProductInfo = () => {
  const context = useContext(CartContext);
  const { loading, setLoading } = context;
  const [product, setProduct] = useState("");
  const { id } = useParams();

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
      <section className="py-5 lg:py-16">
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
                      className="max-w-xl mb-6 text-xl font-semibold leading-loose
                      tracking-wide text-gray-800 md:text-2xl dark:text-gray-300">
                      {product?.title}
                      <p className="text-sm text-gray-500 mt-1">
                        ID: (<span className="">{product?.id}</span>)
                      </p>
                    </h2>
                    <div className="flex flex-wrap items-center mb-6">
                      <ul className="flex mb-4 mr-2 lg:mb-0 text-2xl text-orange-500">
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                    <p className="flex justify-between items-center text-2xl font-semibold text-bgDesingColor dark:text-gray-400">
                      <span>
                        ${Number.parseFloat(product?.price).toFixed(2)}
                      </span>
                      <img
                        className="w-12 mr-10"
                        src={product.logoBrand}
                        alt={product.title}
                      />
                    </p>
                  </div>
                  <div className="mb-6">
                    <h2 className=" capitalize mb-2 text-lg font-bold text-gray-800 dark:text-gray-400">
                      descripcion:
                    </h2>

                    <p className="mb-2">{product?.description}</p>

                    <div>
                      <h2 className=" capitalize mb-2 text-lg font-bold text-gray-800 dark:text-gray-400">
                        cantidad:{" "}
                        <span className="text-gray-700">{product.stock}</span>
                      </h2>
                    </div>
                  </div>
                  <div className="mb-6" />
                  <div className="flex flex-wrap items-center mb-6">
                    {cartItems.some((p) => p.id === product.id) ? (
                      <button
                        onClick={() => deleteItem(product)}
                        className="capitalize bg-bgDesingColor hover:bg-bgBodyColor w-full
                          text-white py-3 rounded-lg transition-all duration-300">
                        eliminar del carrito
                      </button>
                    ) : (
                      <button
                        onClick={() => addItem(product)}
                        className="capitalize bg-bgBodyColor hover:bg-bgDesingColor w-full
                           text-white py-3 rounded-lg transition-all duration-300">
                        agregar al carrito
                      </button>
                    )}
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
