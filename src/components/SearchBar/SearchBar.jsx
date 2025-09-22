import { useContext, useState } from "react";
import negativo from "../../assets/pensamiento-negativo.png";
import { IoIosSearch } from "react-icons/io";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
  // Context
  const context = useContext(CartContext);
  const { getProducts, searchkey, setSearchkey } = context;
  // Estado del buscador
  // const [search, setSearch] = useState("");

  // const filterSearchData = getProducts
  //   .filter((obj) => obj.title.toLowerCase().includes(search))
  //   .slice(0, 8);

  const naviegate = useNavigate();
  return (
    <div>
      <div className=" flex justify-center">
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => setSearchkey(e.target.value)}
          className="w-[200px] group-hover:w-[300px] transition-all duration-300
           rounded-full border border-gray-400 px-2 py-1 focus:outline-none
          focus:border-1 focus:border-bgDesingColor sm:w-[200px]"
          value={searchkey}
          name="searchkey"
          id="searchkey"
        />
        <span
          className="absolute text-gray-500 group-hover:text-bgBodyColor
          top-1/2 -translate-y-1/2 right-3 text-xl">
          <IoIosSearch />
        </span>
      </div>

      {/* <div className="flex justify-center">
        {searchkey && (
          <div
            className="block absolute bg-gray-300 w-96 md:w-96 lg:w-96
            z-50 my-1 rounded-lg px-2 py-2">
            {getProducts.length > 0 ? (
              <>
                {getProducts.map((item, index) => {
                  return (
                    <div 
                    onClick={() => naviegate(`productinfo/${item.id}`)}
                    key={index} 
                    className="py-2 px-2 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <img
                          className="w-10"
                          src={item.image}
                          alt={item.title}
                        />
                        {item.title}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="flex justify-center">
                  <img className="w-20" src={negativo} alt="" />
                </div>
                <div className="flex justify-center mt-2">
                  <h4 className="uppercase font-semibold text-gray-600">
                    not found
                  </h4>
                </div>
              </>
            )}
          </div>
        )}
      </div> */}
    </div>
  );
};

export default SearchBar;
