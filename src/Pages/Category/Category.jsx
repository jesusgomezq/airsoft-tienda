import { useContext, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../components/context/CartContext";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteItemToCart } from "../../Redux/cartSlice";
import toast from "react-hot-toast";

const Category = () => {
  // Context
  const context = useContext(CartContext);
  const { getProducts, loading } = context;

  // Navegamos entre categorias
  const { categorytitle } = useParams();

  //   Navegacion
  const navigate = useNavigate();

  //   Filtrar productos
  const categoryFilter = getProducts.filter((obj) =>
    obj.category.includes(categorytitle)
  );

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Funcion para agregar un producto al carrito
  const addItem = (item) => {
    dispatch(addToCart(item));
    toast.success("Agregaste un producto a tu carrito 👍");
  };

  // Funcion para borrar un producto del carrito
  const deleteItem = (item) => {
    dispatch(deleteItemToCart(item));
    toast.success("Borraste un producto correctamente 👍");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      
      <div className="mt-10">
        <div>
          <h1 className="text-center mb-5 font-semibold text-2xl text-bgDesingColor">
            <span className="capitalize">{categorytitle}</span>
          </h1>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <section className="text-gray-600">
            <div className="container px-5 py-5 mx-auto">
              <div className="flex flex-wrap -m-4 justify-center">
                {categoryFilter.length > 0 ? (
                  <>
                    {categoryFilter.map((item, index) => {
                      const { id, image, title, price, logoBrand } = item;

                      return (
                        <div
                          key={index}
                          className="p-4 w-full md:w-1/2 xl:w-1/5">
                          <div
                            className="h-full border border-gray-300 rounded-xl
                            overflow-hidden shadow-xl cursor-pointer">
                            <img
                              onClick={() => navigate(`/productinfo/${id}`)}
                              className="lg:h-44 h-96 w-full px-2 pt-2 object-contain"
                              src={image}
                              alt={title}
                            />

                            <div className="p-6">
                              <h2
                                className="tracking-widest text-xs 
                                font-titleFont capitalize text-blue-gray-400 mb-1">
                                combatAirsoft
                              </h2>
                              <h1 className="text-lg font-medium text-gray-900 mb-3">
                                {title.substring(0, 25)}
                              </h1>
                              <div>
                                <h2 className="flex justify-between  items-center text-bgBodyColor text-lg font-semibold mb-3">
                                  ${Number.parseFloat(price).toFixed(2)}
                                  <img
                                    className="w-10"
                                    src={logoBrand}
                                    alt="logo"
                                  />
                                </h2>
                              </div>
                              <div className="flex justify-center">
                                {cartItems.some((p) => p.id === item.id) ? (
                                  <button
                                    onClick={() => deleteItem(item)}
                                    className="bg-bgDesingColor hover:bg-bgBodyColor w-full
                                   text-white py-1.5 rounded-lg transition-all duration-300">
                                    eliminar del carrito
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => addItem(item)}
                                    className="bg-bgBodyColor hover:bg-bgDesingColor w-full
                                   text-white py-1.5 rounded-lg transition-all duration-300">
                                    agregrar el carrito
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <div className="uppercase text-gray-700 text-xl font-semibold">
                    <h1>Not fount</h1>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Category;
