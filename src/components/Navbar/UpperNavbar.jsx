import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import navLogo from "../../assets/logoNavbar.avif";
import CartWidget from "../CartWidget/CartWidget";

const UpperNavBar = () => {
  // Obtenemos el usuario del local
  const user = JSON.parse(localStorage.getItem("users"));
  // Navegacion
  const navigate = useNavigate();

  // Cerrar sesion
  const logOut = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  return (
    <nav className="bg-bgBodyColor sticky top-0">
      <div
        className="lg:flex lg:justify-between items-center 
        py-3 lg:px-3 container">
        <Link to={"/"}>
          <div className="py-3 lg:py-0 flex items-center sm:justify-center">
            <img className="w-20" src={navLogo} alt="Logo Navbar" />
            <h2 className="capitalize font-titleFont font-semibold text-white text-2xl text-center">
              combat airsoft
            </h2>
          </div>
        </Link>

        <div className="flex items-center justify-center gap-4">
          <div className="group relative hidden sm:block">
            <SearchBar />
          </div>
          <CartWidget />
          {!user ? (
            <Link className="text-gray-300 capitalize" to={"/signup"}>
              signup
            </Link>
          ) : (
            ""
          )}
          {!user ? (
            <Link className="text-gray-300 capitalize" to={"/login"}>
              login
            </Link>
          ) : (
            ""
          )}
          {user?.rol === "user" && (
            <Link className="text-gray-300 capitalize" to={"/user"}>
              {user?.nombre} {user?.apellido}
            </Link>
          )}

          {user?.rol === "admin" && (
            <Link
              to={"/admin"}
              className="text-gray-400 font-medium text-lg capitalize 
            hover:text-gray-700">
              {user?.nombre} {user?.apellido}
            </Link>
          )}

          {user && (
            <button className="text-gray-300 capitalize" onClick={logOut}>
              logOut
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default UpperNavBar;
