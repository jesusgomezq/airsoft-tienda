
import { FcCheckmark, FcCustomerSupport } from "react-icons/fc";
import {TbTruckDelivery } from "react-icons/tb";

const Track = () => {
  return (
    <section>
      <div className="container mx-auto px-5 py-10 md:py-14">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div
              className="border-2 border-gray-200 bg-gray-100 
              shadow-[inset_0_0_2px_rgba(0,0,0,0.6)]
              px-4 py-6 rounded-xl">
              <span className="flex justify-center items-center text-6xl text-bgBodyColor">
                <FcCheckmark />
              </span>
              <h2 className="text-gray-900 text-xl capitalize">calida garantizada</h2>
              <p className="text-gray-500 first-letter:uppercase text-sm leading-relaxed">
                productos de las mejores marcas!!
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div
              className="border-2 border-gray-200 bg-gray-100 
              shadow-[inset_0_0_2px_rgba(0,0,0,0.6)]
              px-4 py-6 rounded-xl">
              <span className="flex justify-center items-center text-6xl text-bgBodyColor gap-2">
                <TbTruckDelivery/>

              </span>
              <h2 className="capitalize text-gray-900 text-xl">
                Envios
              </h2>
              <p className="text-gray-500 first-letter:uppercase text-sm leading-relaxed">
                entregas en 48h en todo el pais
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div
              className="border-2 border-gray-200 bg-gray-100 
              shadow-[inset_0_0_2px_rgba(0,0,0,0.6)]
              px-4 py-6 rounded-xl">
              <span className="flex justify-center items-center text-6xl text-bgBodyColor">
                <FcCustomerSupport/>
              </span>
              <h2 className="capitalize text-gray-900 text-xl">
                soporte 24/7
              </h2>
              <p className="text-gray-500 first-letter:uppercase text-sm leading-relaxed">
                atencion al cliente especializada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Track;
