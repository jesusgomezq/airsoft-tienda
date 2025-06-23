import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const OrderDetail = () => {
  // Context
  const context = useContext(CartContext);
  const { getOrder, deleteOrder } = context;
  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        <h1 className="text-xl text-bgDesingColor font-bold">
          Todas las orden
        </h1>
      </div>
      <div className="w-full overflow-x-auto">
        <table
          className="w-full text-left border border-collapse sm:border-separate
         border-gray-400 text-bgDesingColor">
          <tbody>
            <tr>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
              text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                s.no.
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
              text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                id orden
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
              text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                imagen
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
              text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                producto
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
              text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                categora
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
              text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                precio
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
              text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                cantidad
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
              text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                precio total
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
              text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                compra
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
              text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                nombre
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
              text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                apellido
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
              text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                direccion
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
              text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                telefono
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
              text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                email
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
              text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                date
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
              text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                action
              </th>
            </tr>
            {getOrder.map((order) => {
              return (
                <>
                  {order.cartItems.map((item, i) => {
                    const { id, title, image, quantity, category, price } =
                      item;
                    return (
                      <tr key={i} className="text-bgDesingColor">
                        <td
                          className="h-12 px-6 text-md transition duration-300 border-t
                          border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                         text-green-500 cursor-pointer">
                          {i + 1}
                        </td>
                        <td
                          className="h-12 px-6 text-md transition duration-300 border-t
                          border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                         text-gray-600 cursor-pointer capitalize">
                          {id}
                        </td>
                        <td
                          className="h-12 px-6 text-md transition duration-300 border-t
                          border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                          cursor-pointer capitalize">
                          <img src={image} alt="" />
                        </td>
                        <td
                          className="h-12 px-6 text-md transition duration-300 border-t
                          border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                         text-gray-600 cursor-pointer capitalize">
                          {title}
                        </td>
                        <td
                          className="h-12 px-6 text-md transition duration-300 border-t
                          border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                         text-gray-600 cursor-pointer capitalize">
                          {category}
                        </td>
                        <td
                          className="h-12 px-6 text-md transition duration-300 border-t
                          border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                         text-green-500 cursor-pointer capitalize">
                          ${Number.parseFloat(price).toFixed(2)}
                        </td>
                        <td
                          className="h-12 px-6 text-md transition duration-300 border-t
                          border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                         text-gray-700 cursor-pointer capitalize">
                          {quantity}
                        </td>
                        <td
                          className="h-12 px-6 text-md transition duration-300 border-t
                          border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                         text-green-500 cursor-pointer capitalize">
                          ${quantity * price}
                        </td>
                        <td
                          className="h-12 px-6 text-md transition duration-300 border-t
                          border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                         text-green-500 cursor-pointer capitalize">
                          {order.status}
                        </td>
                        <td
                          className="h-12 px-6 text-md transition duration-300 border-t
                          border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                         text-bgDesingColor cursor-pointer capitalize">
                          {order.addressInfo.nombre}
                        </td>
                        <td
                          className="h-12 px-6 text-md transition duration-300 border-t
                          border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                         text-bgDesingColor cursor-pointer capitalize">
                          {order.addressInfo.apellido}
                        </td>
                        <td
                          className="h-12 px-6 text-md transition duration-300 border-t
                          border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                         text-bgDesingColor cursor-pointer capitalize">
                          {order.addressInfo.direccion}
                        </td>
                        <td
                          className="h-12 px-6 text-md transition duration-300 border-t
                          border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                         text-bgDesingColor cursor-pointer capitalize">
                          {order.addressInfo.celular}
                        </td>
                        <td
                          className="h-12 px-6 text-md transition duration-300 border-t
                          border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                         text-green-500 cursor-pointer capitalize">
                          {order.email}
                        </td>
                        <td
                          className="h-12 px-6 text-md transition duration-300 border-t
                          border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                         text-gray-600 cursor-pointer capitalize">
                          {order.date}
                        </td>
                        <td
                          onClick={() => deleteOrder(order.id)}
                          className="h-12 px-6 text-md transition duration-300 border-t
                          border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                         text-red-500 cursor-pointer capitalize">
                          eliminar
                        </td>
                      </tr>
                    );
                  })}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetail;
