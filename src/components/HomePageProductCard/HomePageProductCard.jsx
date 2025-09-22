import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteItemToCart } from "../../Redux/cartSlice";


const HomePageProductCard = () => {
  const context = useContext(CartContext);
  const { loading, getProducts, searchkey, setSearchkey } = context;
  // Navegavión
  const navigate = useNavigate();

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
    toast.success("Eliminaste un producto del carrito 👍");
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  },[cartItems])

  return (
    <div className="mt-10">
      <div>
        <h1
          className="flex justify-center items-center gap-1 
        text-center mb-5 text-2xl font-semibold font-titleFont">
          Lo más vendido
          <div className="h-7 w-1 bg-gray-400 ml-6" />
          <span className="text-gray-400">+1000</span>
        </h1>
      </div>
      <section className="text-gray-600">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex justify-center">{loading && <Loader />}</div>
          <div className="flex flex-wrap -m-4">
            {getProducts.filter((obj) => obj.title.toLowerCase().includes(searchkey)).slice(0, 5).map((item, index) => {
              const { id, image, title, price, logoBrand } = item;

              return (
                <div key={index} className="p-4 w-full md:w-1/2 xl:w-1/5">
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
                      <h1 className="text-xl font-medium text-gray-900 mb-3">
                        {title.substring(0, 25)}
                      </h1>
                      <div>
                        <h2 className="flex justify-between  items-center text-bgBodyColor text-lg font-semibold mb-3">
                          ${Number.parseFloat(price).toFixed(2)}
                          <img className="w-10" src={logoBrand} alt="logo" />
                        </h2>
                      </div>
                      <div className="flex justify-center">
                        {cartItems.some((p) => p.id === item.id) ? (
                          <button
                            onClick={() => deleteItem(item)}
                            className="capitalize bg-bgDesingColor hover:bg-bgBodyColor w-full
                          text-white py-1.5 rounded-lg transition-all duration-300">
                            eliminar del carrito
                          </button>
                        ) : (
                          <button
                            onClick={() => addItem(item)}
                            className="capitalize bg-bgBodyColor hover:bg-bgDesingColor w-full
                           text-white py-1.5 rounded-lg transition-all duration-300">
                            agregar al carrito
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
  );
};

export default HomePageProductCard;
