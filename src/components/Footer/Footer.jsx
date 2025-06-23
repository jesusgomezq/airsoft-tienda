import {
  FaFacebookSquare,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logoNav from "../../assets/logoNavbar.avif";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="text-white bg-bgBodyColor">
      <div
        className="lg:flex lg:justify-between items-center 
      py-3 lg:px-3 container">
        <div className="flex justify-center mb-3 mt-3">
          <img src="https://www.evike.com/images3/icon-cc.png" alt="tarjetas" />
        </div>
        <Link to="/">
          <div className="flex items-center capitalize justify-center flex-col mb-3">
            <img className="w-20" src={logoNav} alt="logoNavbar" />
            <h2>combat airsoft</h2>
          </div>
        </Link>
        <div className="flex gap-2 text-3xl text-gray-400 justify-center mb-3">
          <span>
            <FaFacebookSquare />
          </span>
          <span>
            <FaYoutube />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaTiktok />
          </span>
          <span>
            <MdOutlineEmail />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
