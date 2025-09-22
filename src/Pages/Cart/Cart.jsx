import { FaRegTrashAlt } from "react-icons/fa";
import Layout from "../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrementQuantity,
  deleteItemToCart,
  incrementQuantity,
} from "../../Redux/cartSlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import BuyPage from "../../components/BuyPage/BuyPage";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { fireDB } from "../../firebase/firebaseConfig";
import { Navigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Funcion para eliminar un producto en el carrito
  const deleteItem = (item) => {
    dispatch(deleteItemToCart(item));
    toast.success("Eliminaste un producto 👍");
  };

  // Funcion para vaciar carrito
  const handleClearToCart = () => {
    dispatch(clearCart());
  };
  // Funcion para incrementar un producto en el carrito
  const handleIncremente = (id) => {
    dispatch(incrementQuantity(id));
  };

  // Funcion para disminuir productos en el carrito
  const handleDecremente = (id) => {
    dispatch(decrementQuantity(id));
  };

  // Total productos en el carrito
  const cartItemTotal = cartItems
    .map((item) => Number(item.quantity))
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  const total = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);
  

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Funcion para la compra
  const user = JSON.parse(localStorage.getItem("users"));

  // Estado de la info del comprador
  const [addressInfo, setAddressInfo] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    celular: "",
    codigo: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-AR", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Funcion para finalizar compra
  const buyFunction = () => {
    // Validamos
    if (
      addressInfo.nombre === "" ||
      addressInfo.apellido === "" ||
      addressInfo.direccion === "" ||
      addressInfo.celular === ""
    ) {
      return toast.error("❌ Completa los campos ❌");
    }

    // Informacion del pedido
    const orderInfo = {
      cartItems,
      addressInfo,
      email: user.email,
      userid: user.uid,
      status: "confirmada",
      time: Timestamp.now(),
      date: new Date().toLocaleString("en-AR", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    try {
      const orderRef = collection(fireDB, "order");
      addDoc(orderRef, orderInfo);
      setAddressInfo({
        nombre: "",
        apellido: "",
        direccion: "",
        celular: "",
      });
      handleClearToCart();
      toast.success("✔ Gracias, compra confirmada ✔");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-7xl lg:px-0">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
          <h1
            className="text-3xl font-bold tracking-tight text-bgDesingColor
            font-titleFont capitalize sm:text-4xl">
            shopping cart
          </h1>
          <form
            className="mt-12 lg:grid lg:grid-cols-12 lg:items-startlg
            lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="rounded-lg bg-white lg:col-span-8">
              <h2 id="cart-heading" className="sr-only capitalize">
                item in your shopping cart
              </h2>
              <ul role="list" className="divide-y divide-gray-300">
                {cartItems.length > 0 ? (
                  <>
                    {cartItems.map((item, i) => {
                      const {
                        id,
                        title,
                        price,
                        image,
                        quantity,
                        category,
                        brand,
                      } = item;
                      return (
                        <div key={i}>
                          <li className="flex py-6 sm:py-6">
                            <div className="flex-shrink-0">
                              <img
                                className="sm:h-38 h-24 w-24 rounded-md
                           object-contain object-center"
                                src={image}
                                alt={title}
                              />
                            </div>
                            <div
                              className="ml-4 flex flex-1 flex-col justify-between
                        sm:ml-6">
                              <div
                                className="pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6
                            sm:pr-0">
                                <div>
                                  <div className="flex justify-between">
                                    <h3 className="text-sm font-semibold text-black capitalize">
                                      {title}
                                    </h3>
                                  </div>
                                  <div className="mt-1 flex items-end">
                                    <p className="text-sm font-medium text-gray-800">
                                      <span className="capitalize text-gray-800">
                                        precio:{" "}
                                      </span>
                                      <span className="text-gray-900">
                                        ${Number.parseFloat(price).toFixed(2)}
                                      </span>
                                    </p>
                                    &nbsp; &nbsp;
                                  </div>
                                  <p className="font-medium text-gray-700 mt-2.5 capitalize">
                                    categoria: &nbsp;
                                    <span className="text-gray-500">
                                      {category}
                                    </span>
                                  </p>
                                  <p className="font-medium text-gray-700 mt-2.5 capitalize">
                                    marca: &nbsp;
                                    <span className="text-gray-500">
                                      {brand}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <div className="mb-4 flex">
                            <div className="min-w-24 flex border-[1px] border-gray-400 rounded-md">
                              <button
                                onClick={() => handleDecremente(id)}
                                className="h-7 w-7"
                                type="button">
                                -
                              </button>
                              <input
                                className="mx-1 h-7 w-9 rounded-md border text-center text-black"
                                type="text"
                                value={quantity}
                              />
                              <button
                                // disabled={!stock}
                                onClick={() => handleIncremente(id)}
                                className="flex h-7 w-7 items-center justify-center"
                                type="button">
                                +
                              </button>
                            </div>
                            <div className="flex ml-6 text-sm">
                              <button
                                onClick={() => deleteItem(item)}
                                className="flex items-center space-x-1 py-1 px-2 pl-0"
                                type="button">
                                <FaRegTrashAlt
                                  size={12}
                                  className="text-red-500"
                                />
                                <span className="text-red-500 font-medium capitalize text-xs">
                                  remove
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div>
                      <button
                        onClick={handleClearToCart}
                        className="bg-red-800 mt-8 py-3 px-10 text-white
                        rounded-xl">
                        vaciar carrito
                      </button>
                    </div>
                  </>
                ) : (
                  <h1 className="text-2xl first-letter:uppercase text-gray-600">
                    agrega un producto al carrito
                  </h1>
                )}
              </ul>
            </section>

            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0">
              <h2
                id="summay-headig"
                className="border-b border-gray-300 px-4 py-3 text-lg font-medium
                text-gray-900 sm:p-4 capitalize">
                price detail
              </h2>
              <div>
                <dl className="space-y-1 px-2 py-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-800 capitalize">
                      price ({cartItemTotal} item)
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      $ {Number.parseFloat(total).toFixed(2)}
                    </dd>
                  </div>

                  <div className="capitalize items-center flex justify-between py-4 border-b border-b-gray-300">
                    <dt className="flex text-sm text-gray-800">
                      delivery cahrgers
                    </dt>
                    <dd className="text-sm font-medium text-green-700">free</dd>
                  </div>
                  <div
                    className="flex items-center justify-between border-y border-dashed
                  py-4">
                    <dt className="text-base font-medium text-gray-900 capitalize">
                      total amount
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ${total}
                    </dd>
                  </div>
                </dl>
                <div className="px-2 pb-4 font-medium text-green-700">
                  <div className="flex gap-4 mb-6">
                    {user ? (
                      <BuyPage
                        addressInfo={addressInfo}
                        setAddressInfo={setAddressInfo}
                        buyFunction={buyFunction}
                      />
                    ) : (
                      <Navigate to={"/login"} />
                    )}
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
