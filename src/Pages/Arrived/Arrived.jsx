import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../../components/context/CartContext";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteItemToCart } from "../../Redux/cartSlice";
import toast from "react-hot-toast";


const AllProducts = () => {
  const context = useContext(CartContext);
  const { loading, getProducts } = context;

  // Navegación
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart);
  const disptch = useDispatch();

  // Funcion para agregar un producto al carrito
  const addItem = (item) => {
    disptch(addToCart(item));
    toast.success("Agregaste un producto a tu carrito 👍");
  };

  // Funcion para eliminar un producto del carrito
  const deleteItem = (item) => {
    disptch(deleteItemToCart(item));
    toast.success("Borraste un producto correctamente 👍");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    // <Layout>
    <div className="py-8">
      <div>
        <h1 className="font-titleFont flex justify-center gap-1 items-center capitalize text-center mb-5 text-3xl font-semibold">
          recién llegado
          <div className="h-7 w-1 bg-gray-400 ml-6" />
          <span className="text-gray-400">lo nuevo</span>
        </h1>
      </div>
      <section className="text-gray-600">
        <div className="container px-5 lg:px-0 py-5 mx-auto">
          <div className="flex justify-center">{loading && <Loader />}</div>
          <div className="flex flex-wrap -m-4">
            {getProducts.slice(0, 5).map((item, i) => {
              const { id, image, title, price, logoBrand } = item;
              return (
                <div key={i} className="px-4 w-full md:w-1/2 xl:w-1/5 lg:1/3">
                  <div
                    className="h-full border border-gray-300 rounded-xl
                    overflow-hidden shadow-xl cursor-pointer">
                    <img
                      onClick={() => navigate(`productinfo/${id}`)}
                      className="lg:h-44 h-96 w-full px-2 pt-2 object-contain"
                      src={image}
                      alt={title}
                    />
                    <div className="p-6">
                      <h2
                        className="tracking-widest text-xs font-titleFont text-blue-gray-400
                        m-1">
                        combat-airsoft
                      </h2>
                      <h1 className="text-lg font-medium text-gray-900 mb-3">
                        {title.substring(0, 25)}
                      </h1>
                      <h2 className="flex justify-between items-center text-lg text-bgBodyColor mb-3 font-semibold">
                        ${Number.parseFloat(price).toFixed(2)}
                        <img className="w-10" src={logoBrand} alt={logoBrand} />
                      </h2>
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
          </div>
        </div>
      </section>
    </div>
    // </Layout>
  );
};

export default AllProducts;
