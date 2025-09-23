import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../components/context/CartContext";
import toast from "react-hot-toast";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/firebaseConfig";
import Loader from "../../components/Loader/Loader";
import { signInWithEmailAndPassword } from "firebase/auth";
import Layout from "../../components/Layout/Layout";
import { MdAlternateEmail } from "react-icons/md";
import { LiaUserLockSolid } from "react-icons/lia";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const context = useContext(CartContext);
  const { loading, setLoading } = context;

  // Seteamos la contraseña
  const [showPassword, setShowPassword] = useState(false);

  // Funcion para cubrir la contraseña
  const togglePassworVisibility = () => setShowPassword(!showPassword);

  // navigate
  const navigate = useNavigate();

  // User Signup State
  const [userLogin, setUserLogin] = useState({
    email: "",
    contraseña: "",
  });

  // Funcion de logeo de usuario
  const userLoginFunction = async () => {
    // validation
    if (userLogin.email === "" || userLogin.contraseña === "") {
      toast.error("Se Requieren Todos Los Campos");
    }

    setLoading(true);
    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.contraseña
      );

      try {
        const q = query(
          collection(fireDB, "user"),
          where("uid", "==", users?.user?.uid)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            contraseña: "",
          });
          toast.success("Acceso Exitoso");
          setLoading(false);
          if (user.rol === "user") {
            navigate("/user");
          } else {
            navigate("/admin");
          }
        });
        return () => data;
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Acceso No Permitido");
    }
  };
  return (
    <Layout>
      <div className="flex justify-center items-center h-screen container">
        {loading && <Loader />}
        <div
          className="bg-bgBodyColor/10 px-2 lg:px-8 py-6 border border-gray-300
          rounded-xl shadow-lg">
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold font-titleFont capitalize">
              login
            </h2>
          </div>
          <div className="mb-5">
            <div className="flex items-center">
              <MdAlternateEmail className="absolute ml-1 text-blue-gray-600" />
              <input
                className="bg-gray-300 border border-gray-400 px-6 py-2 rounded-xl
                outline-none placeholder-blue-gray-600 w-96 focus:outline-none focus:ring-1 focus:ring-bgBodyColor"
                placeholder="correo"
                type="text"
                value={userLogin.email}
                onChange={(e) => {
                  setUserLogin({
                    ...userLogin,
                    email: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="mb-5 relative">
            <div className="flex items-center">
              <LiaUserLockSolid className="absolute ml-1 text-blue-gray-600" />
              <input
                className="bg-gray-300 border border-gray-400 px-6 py-2 rounded-xl
                outline-none placeholder-blue-gray-600 w-96 focus:outline-none focus:ring-1 focus:ring-bgBodyColor"
                placeholder="contraseña"
                type={showPassword ? 'text' : 'password'}
                value={userLogin.contraseña}
                onChange={(e) => {
                  setUserLogin({
                    ...userLogin,
                    contraseña: e.target.value,
                  });
                }}
              />
              {showPassword ? (
                <FaRegEye 
                onClick={togglePassworVisibility}
                className="absolute right-5 cursor-pointer" />
              ) : (
                <FaRegEyeSlash 
                onClick={togglePassworVisibility}
                className="absolute right-5 cursor-pointer" />
              )}
            </div>
          </div>
      
          <div className="mb-5">
            <button
              onClick={userLoginFunction}
              className="bg-bgDesingColor hover:bg-bgBodyColor text-white
             capitalize w-full py-2 rounded-xl font-semibold text-center">
              login
            </button>
          </div>
          <div>
            <h2 className="text-bgDesingColor flex gap-1">
              ¿Aun no tienes una cuenta?
              <Link className="capitalize font-bold" to={"/signup"}>
                signUp
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
