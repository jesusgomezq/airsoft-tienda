import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const UserDetail = () => {
  // Context
  const context = useContext(CartContext);
  const { getUsers } = context;
  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        <h1 className="text-xl text-bgDesingColor font-bold">Usuarios</h1>
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
                nombre
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
                user-id
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
                text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                rol
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
                text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                date
              </th>
            </tr>
            {getUsers.map((item, i) => {
              return (
                <>
                  <tr 
                  key={i}
                  className="text-bgDesingColor">
                    <td
                      className="h-12 px-6 text-md transition duration-300 border-t
                border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                text-green-500 cursor-pointer">
                      {i +1}
                    </td>
                    <td
                      className="h-12 px-6 text-md transition duration-300 border-t
                border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                text-green-500 cursor-pointer capitalize">
                      {item.nombre}
                    </td>
                    <td
                      className="h-12 px-6 text-md transition duration-300 border-t
                border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                text-green-500 cursor-pointer">
                      {item.email}
                    </td>
                    <td
                      className="h-12 px-6 text-md transition duration-300 border-t
                border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                text-green-500 cursor-pointer capitalize">
                      {item.uid}
                    </td>
                    <td
                      className="h-12 px-6 text-md transition duration-300 border-t
                border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                text-green-500 cursor-pointer capitalize">
                      {item.rol}
                    </td>
                    <td
                      className="h-12 px-6 text-md transition duration-300 border-t
                border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                text-red-500 cursor-pointer capitalize">
                      {item.date}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetail;
