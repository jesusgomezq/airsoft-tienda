import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../components/context/CartContext";
import { auth, fireDB } from "../../firebase/firebaseConfig";
import toast from "react-hot-toast";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "../../components/Loader/Loader";
import Layout from "../../components/Layout/Layout";

const SignUp = () => {
  const context = useContext(CartContext);
  const { loading, setLoading } = context;

  //=========> NAVEGACION <===========|
  const navigate = useNavigate();

  //=========> ESTADO PARA USUARIO <============|
  const [userSignup, setUserSignup] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contraseña: "",
    rol: "user",
  });

  //=========> USER SIGNUP FUNCION <=========|
  const userSignupFuntion = async () => {
    // validamos
    if (
      userSignup.nombre === "" ||
      userSignup.apellido === "" ||
      userSignup.email === "" ||
      userSignup.contraseña === ""
    ) {
      toast.error("Se requieren todos los campos");
    }

    setLoading(true);

    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.contraseña
      );
      // Creamos el objeto de usuario
      const user = {
        nombre: userSignup.nombre,
        apellido: userSignup.apellido,
        email: users.user.email,
        uid: users.user.uid,
        rol: userSignup.rol,
        time: Timestamp.now(),
        date: new Date().toLocaleDateString("en-AR", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };
      // Referencia de usuario
      const userReference = collection(fireDB, "user");

      // Detalles de usuario
      addDoc(userReference, user);
      setUserSignup({
        nombre: "",
        apellido: "",
        contraseña: "",
      });

      toast.success("Creado con Exito");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Layout>
      <div className="flex justify-center items-center py-44 container">
        {loading && <Loader />}
        <div
          className="bg-bgBodyColor/20 px-4 lg:px-8 py-6 border border-gray-300
        rounded-xl shadow-lg">
          <div className="mt-5">
            <h2 className=" mb-4 text-center text-2xl font-bold capitalize text-bgDesingColor font-titleFont">
              signUp
            </h2>
          </div>
          <div className="mb-3">
            <input
              className="bg-gray-300 capitalize border border-gray-300 px-3 py-2 w-96 rounded-xl
            outline-none placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-bgBodyColor"
              placeholder="Nombre"
              type="text"
              value={userSignup.nombre}
              onChange={(e) => {
                setUserSignup({
                  ...userSignup,
                  nombre: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <input
              className="bg-gray-300 capitalize border border-gray-300 px-3 py-2 w-96 rounded-xl
            outline-none placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-bgBodyColor"
              placeholder="Apellido"
              type="text"
              value={userSignup.apellido}
              onChange={(e) => {
                setUserSignup({
                  ...userSignup,
                  apellido: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <input
              className="bg-gray-300 border border-gray-300 px-3 py-2 w-96 rounded-xl
            outline-none placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-bgBodyColor"
              placeholder="Correo"
              type="email"
              value={setUserSignup.email}
              onChange={(e) => {
                setUserSignup({
                  ...userSignup,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <input
              className="bg-gray-300 border border-gray-300 px-3 py-2 w-96 rounded-xl
            outline-none placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-bgBodyColor"
              placeholder="Contraseña"
              type="pasword"
              value={setUserSignup.contraseña}
              onChange={(e) => {
                setUserSignup({
                  ...userSignup,
                  contraseña: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-5">
            <button
              onClick={userSignupFuntion}
              className="bg-bgDesingColor hover:bg-bgBodyColor w-full text-white
            text-center py-2 capitalize font-semibold rounded-xl transition-all duration-300">
              sigUp
            </button>
          </div>
          <div>
            <h2 className="text-bgBodyColor flex gap-1">
              ¿Tienes una cuenta?
              <Link
                className="text-bgBodyColor font-bold capitalize"
                to={"/login"}>
                login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
