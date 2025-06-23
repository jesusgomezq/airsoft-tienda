import { useNavigate } from "react-router-dom";
import { categoryData } from "../constants";


const LowNavBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex bg-white px-2">     
          <div className="flex lg:justify-center overflow-x-scroll hide-scroll-bar w-full">
            <div className="flex mt-2">
              {categoryData.map((item, i) => {
                return (
                  <div key={i} className="px-3 flex justify-center flex-col">
                    <div
                      onClick={() => navigate(`/category/${item.title}`)}
                      className="w-16 h-16 lg:w-20 lg:h-20 max-w-xs rounded-full 
                      transition-all cursor-pointer">
                      <div className="flex justify-center mb-8">
                        <img
                          className="w-20 h-20 rounded-full  object-contain"
                          src={item.image}
                          alt=""
                        />
                      </div>
                    </div>
                    <h2 className="text-gray-700 text-sm lg:text-sm mb-2 text-center first-letter:uppercase">
                      {item.title}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
          ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}",
        }}
        />
    </div>
  );
};

export default LowNavBar;
