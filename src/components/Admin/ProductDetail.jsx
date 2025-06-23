import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Loader from "../Loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/firebaseConfig";
import toast from "react-hot-toast";

const ProductDetail = () => {
  // Context 
  const context = useContext(CartContext);
  const { loading, setLoading, getProducts, getProductFunction } = context;

  // Navegacion 
  const navigate = useNavigate()

  // Función para borrar un producto 
  const deleteItem = async (id) => {
    setLoading(true)

    try {
      await deleteDoc(doc(fireDB, 'products', id))
      toast.success('Borraste un Producto, Correctamente')
      getProductFunction()
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
      
    }
  }

  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        <h1 className="text-xl text-bgDesingColor font-bold">
          Todos los productos
        </h1>
        <Link to={"/additem"}>
          <button
            className="bg-bgDesingColor hover:bg-bgBodyColor transition-all
            duration-300 rounded-xl py-2 px-5 text-gray-200 capitalize">
            agregar producto
          </button>
        </Link>
      </div>

      <div className="flex justify-center relative top-32">
        {
          loading && <Loader/>
        }
      </div>
      <div className="w-full overflow-x-auto mb-5">
        <table
          className="w-full border border-collapse sm:border-separate
        border-gray-400 text-bgDesingColor text-center">
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
                imagen
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
                text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                título
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
                categoría
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
                text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                fecha
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
                text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                stock
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
                text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                marca
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
                text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                acción
              </th>
              <th
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-400
                text-slate-700 bg-slate-100 font-bold fontPara capitalize"
                scope="col">
                acción
              </th>
            </tr>

            {getProducts.map((item, i) => {
              const {
                id,
                title,
                price,
                category,
                date,
                image,
                // quantity,
                stock,
                logoBrand,
              } = item;
              return (
                <tr key={i} className="text-bgDesingColor">
                  <td
                    className="h-12 px-6 text-md transition duration-300 border-t
                    border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                  text-green-500 cursor-pointer flex items-center justify-center">
                    {i + 1}.
                  </td>
                  <td
                    className="h-12 px-6 text-md transition duration-300 border-t
                    border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                  text-green-500 cursor-pointer capitalize">
                    <div className="flex justify-center">
                      <img className="w-16" src={image} alt={title} />
                    </div>
                  </td>
                  <td
                    className="h-12 px-6 text-md transition duration-300 border-t
                    border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                  text-gray-700 cursor-pointer capitalize">
                    {title}
                  </td>
                  <td
                    className="h-12 px-6 text-md transition duration-300 border-t
                    border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                  text-gray-700 cursor-pointer capitalize">
                    ${price}
                  </td>
                  <td
                    className="h-12 px-6 text-md transition duration-300 border-t
                    border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                   text-gray-700 cursor-pointer capitalize">
                    {category}
                  </td>
                  <td
                    className="h-12 px-6 text-md transition duration-300 border-t
                    border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                   text-gray-700 cursor-pointer capitalize">
                    {date}
                  </td>
                   <td
                    className="h-12 px-6 text-md transition duration-300 border-t
                    border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                   text-gray-700 cursor-pointer capitalize">
                    {stock}
                  </td>
                  <td
                    className="h-12 px-6 text-md transition duration-300 border-t
                    border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                   text-green-500 cursor-pointer capitalize">
                    <div className="flex justify-center">
                      <img className="w-10" src={logoBrand} alt={title} />
                    </div>
                  </td>
                  <td
                  onClick={() => navigate(`/updateItem/${id}`)}
                    className="h-12 px-6 text-md transition duration-300 border-t
                    border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                   text-green-500 cursor-pointer capitalize">
                    edit
                  </td>
                  <td
                  onClick={() => deleteItem(id)}
                    className="h-12 px-6 text-md transition duration-300 border-t
                    border-l first:border-l-0 border-gray-400 stroke-slate-500 text-slate-500
                  text-red-500 cursor-pointer capitalize">
                    eliminar
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetail;
