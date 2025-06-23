import { FaUser } from "react-icons/fa";
import Layout from "../../components/Layout/Layout";
import { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import Loader from "../../components/Loader/Loader";



const User = () => {
  // Usuarios
  const user = JSON.parse(localStorage.getItem("users"));

  const context = useContext(CartContext);
  const { loading, getOrder } = context;
  return (
    <Layout>
      <div className="container mx-auto px-4 py-5 lg:py-8">
        <div>
          <div className="bg-gray-300 py-5 rounded-xl border border-gray-400">
            <div className="flex justify-center text-5xl text-bgBodyColor">
              <FaUser />
            </div>
            <div>
              <h1 className="text-center text-xl">
                <span className="font-bold capitalize">nombre: </span>
                <span className="capitalize font-bold text-gray-700">
                  {user?.nombre} {user?.apellido}
                </span>
              </h1>
              <h2 className="text-center text-lg">
                <span className="font-bold capitalize">email:</span>
                &nbsp;
                <span className="font-bold text-gray-700">{user?.email}</span>
              </h2>
              <h2 className="text-center text-lg">
                <span className="font-bold capitalize text-gray-700">
                  fecha:
                </span>
                &nbsp;
                <span className="font-bold text-gray-700">{user?.date}</span>
              </h2>
              <h2 className="text-center text-lg">
                <span className="font-bold capitalize">rol:</span>
                &nbsp;
                <span className="font-bold text-gray-700">{user?.rol}</span>
              </h2>
            </div>
          </div>
        </div>

        <div>
          <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
            <h2 className="text-2xl lg:text-3xl font-bold">
              Detalle de la compra
            </h2>
            <div className="flex justify-center relative top-10">
              {loading && <Loader/>}
            </div>

            {getOrder
              .filter((obj) => obj.userid === user?.uid)
              .map((order, i) => {
                // console.log(order);

                return (
                  <div key={i}>
                    {order.cartItems.map((item, i) => {
                      const {
                        id,
                        title,
                        category,
                        quantity,
                        price,
                        image,
                        date,
                      } = item;
                      const { status } = order;
                      return (
                        <div
                          key={i}
                          className="mt-5 flex flex-col overflow-hidden rounded-xl border border-gray-400
                          md:flex-row">
                          <div className="w-full border-r border-gray-400 bg-gray-300 md:max-w-xs">
                            <div className="p-8">
                              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1">
                                <div className="mb-4">
                                  <div className="text-lg font-semibold text-bgDesingColor capitalize">
                                    order id
                                  </div>
                                  <div className="text-lg font-medium text-gray-600">
                                    #{id}
                                  </div>
                                </div>
                                <div className="mb-4">
                                  <div className="text-lg font-semibold capitalize">
                                    fecha:
                                  </div>
                                  <div className="font-medium text-lg text-gray-600 capitalize">
                                    {date}
                                  </div>
                                </div>
                                <div className="mb-4">
                                  <div className="text-lg font-semibold">
                                    Total de la compra
                                  </div>
                                  <div className="font-semibold text-lg text-green-600">
                                    ${price * quantity}
                                  </div>
                                </div>
                                <div className="mb-4">
                                  <div className="font-semibold text-lg">
                                    Estatus de la compra
                                  </div>
                                  <div className="uppercase font-medium text-green-700">
                                    {status}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="p-8">
                              <ul className="divide-y divide-gray-200 -my-7">
                                <li
                                  className="space-x-5 flex flex-col justify-between
                                    py-7 md:flex-row"
                                  key={i}>
                                  <div className="flex flex-1 items-stretch border-b border-b-gray-300">
                                    <div className="flex-shrink-0">
                                      <img
                                        className="h-20 w-20 object-contain rounded-xl border
                                         border-gray-200 mb-2"
                                        src={image}
                                        alt={title}
                                      />
                                    </div>

                                    <div className="ml-5 flex flex-col justify-between">
                                      <div className="flex-1">
                                        <p className="text-sm font-bold text-bgDesingColor">
                                          {title}
                                        </p>
                                        <p className="mt-3 text-sm font-medium text-bgDesingColor capitalize">
                                          <span className="text-gray-700">
                                            category: &nbsp;
                                          </span>
                                          <span className="text-gray-900">
                                            {category}
                                          </span>
                                        </p>
                                        <p className="mt-3 text-sm font-medium text-bgDesingColor capitalize">
                                          <span className="text-gray-700">
                                            cantidad: &nbsp;
                                          </span>
                                          <span className="text-gray-900">
                                            {quantity}
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                    <div className="ml-auto flex flex-col items-end justify-between">
                                      <p className="text-right text-sm font-bold text-bgDesingColor">
                                        ${price}
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default User;
