import { useState } from "react";
import { CartContext } from "./CartContext";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query
} from "firebase/firestore";
import { fireDB } from "../../firebase/firebaseConfig";
import { useEffect } from "react";
import toast from "react-hot-toast";

const State = ({ children }) => {
  const [loading, setLoading] = useState(false);

  // Setemos los productos de la DB
  const [getProducts, setGetProducts] = useState([]);

  const getProductFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setGetProducts(productArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Estado de pedidos
  const [getOrder, setGetOrder] = useState([]);

  // Funcion para obtener los pedidos
  const getOrderFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "order"), orderBy("time"));

      const data = onSnapshot(q, (QuerySnapshot) => {
        let getOrderArray = [];
        QuerySnapshot.forEach((doc) => {
          getOrderArray.push({ ...doc.data(), id: doc.id });
        });
        setGetOrder(getOrderArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  // console.log(getOrder);

  // Funcion para borrar una orden
  const deleteOrder = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "order", id));
      toast.success("👌Orden eliminada👌");
      getOrderFunction();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Estados para informacion de los usuarios
  const [getUsers, setGetUsers] = useState([]);

  // Funcion para obtener datos de los usuarios
  const getUsersFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "user"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let getUserArray = [];
        QuerySnapshot.forEach((doc) => {
          getUserArray.push({ ...doc.data(), id: doc.id });
        });
        setGetUsers(getUserArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };


  useEffect(() => {
    getProductFunction();
    getOrderFunction();
    getUsersFunction();
  }, []);

  const [searchkey, setSearchkey] = useState('')

  return (
    <CartContext.Provider
      value={{
        loading,
        setLoading,
        getProducts,
        getProductFunction,
        getOrder,
        deleteOrder,
        getUsers,
        searchkey,
        setSearchkey
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default State;
