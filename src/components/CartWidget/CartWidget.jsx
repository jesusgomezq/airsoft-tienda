import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const cartItems = useSelector((state) =>  state.cart)
  return (
    <div>
      <Link to="/cart">
        <button
          className="bg-gradient-to-r from-bgBodyColor to-bgDesingColor transition-all
        duration-300 text-white py-2 px-3 rounded-full flex items-center group">
          <span
            className="capitalize group-hover:block hidden 
            transition-all duration-300">
            orden
          </span>
          <PiShoppingCartSimpleThin className="text-2xl" />
          <span className="relative -top-2.5 left-0  text-xs text-white">
            {cartItems.length}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CartWidget;
