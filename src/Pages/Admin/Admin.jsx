import { FaUser } from "react-icons/fa";
import { LuBaggageClaim } from "react-icons/lu";
import { MdOutlineBorderColor } from "react-icons/md";
import { PiUsersFourBold } from "react-icons/pi";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProductDetail from "../../components/Admin/ProductDetail";
import OrderDetail from "../../components/Admin/OrderDetail";
import UserDetail from "../../components/Admin/UserDetail";
import { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import Layout from "../../components/Layout/Layout";

const Admin = () => {
  const context = useContext(CartContext);
  const { getProducts, getOrder, getUsers } = context;


  // Guardamos en la Storage
  const user = JSON.parse(localStorage.getItem("users"));
  return (
    <Layout>
      <div className="container mx-auto px-4 py-5 lg:py-8">
        <div className="mb-5 px-5 mt-5">
          <div className="bg-gray-300 py-5 border border-gray-400 rounded-xl">
            <h1 className="capitalize text-center text-2xl font-bold text-bgDesingColor">
              administrador
            </h1>
          </div>
        </div>
        <div className="px-5">
          <div className="mb-5">
            <div className="bg-gray-300 border border-gray-400 rounded-xl py-5">
              <div className="flex justify-center text-5xl mb-3">
                <FaUser />
              </div>
              <div>
                <h1 className="text-center text-lg">
                  <span className="font-bold capitalize text-bgDesingColor">
                    nombre:
                  </span>
                  &nbsp;
                  <span className="capitalize font-semibold text-gray-700">
                    {user?.nombre} {user?.apellido}
                  </span>
                </h1>
                <h2 className="text-center text-lg text-bgDesingColor">
                  <span className="font-bold capitalize">email:</span>
                  &nbsp;
                  <span className="font-semibold text-gray-700">
                    {user?.email}
                  </span>
                </h2>
                <h2 className="text-center text-lg text-bgDesingColor">
                  <span className="font-bold capitalize">fecha:</span>
                  &nbsp;
                  <span className="font-semibold text-gray-700">
                    {user?.date}
                  </span>
                </h2>
                <h2 className="text-center text-lg text-bgDesingColor">
                  <span className="font-bold capitalize">rol:</span>
                  &nbsp;
                  <span className="font-semibold text-gray-700">
                    {user?.rol}
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div>
            <Tabs>
              
              <TabList className="flex flex-wrap justify-center -m-4 text-center">
                <Tab className="p-4 md:w-1/3 sm:w-1/2 cursor-pointer w-full">
                  <div
                    className="border border-gray-400 bg-gray-300 hover:bg-gray-400
                    px-4 py-3 rounded-xl">
                    <div className="text-bgDesingColor text-4xl mb-3 inline-block">
                      <LuBaggageClaim />
                    </div>
                    <h2 className="font-medium text-3xl text-bgDesingColor">
                      {getProducts.length}
                    </h2>
                    <p className="capitalize text-bgDesingColor font-bold">
                      total de productos
                    </p>
                  </div>
                </Tab>

                <Tab className="p-4 md:w-1/3 sm:w-1/2 cursor-pointer w-full">
                  <div
                    className="border border-gray-400 bg-gray-300 hover:bg-gray-400
                  px-4 py-3 rounded-xl">
                    <div className="text-bgDesingColor text-4xl mb-3 inline-block">
                      <MdOutlineBorderColor />
                    </div>
                    <h2 className="font-medium text-3xl text-bgDesingColor">
                      {getOrder.length}
                    </h2>
                    <p className="capitalize text-bgDesingColor font-bold">
                      total de orden
                    </p>
                  </div>
                </Tab>

                <Tab className="p-4 md:w-1/3 sm:w-1/2 cursor-pointer w-full">
                  <div
                    className="border border-gray-400 bg-gray-300 hover:bg-gray-400
                        px-4 py-3 rounded-xl">
                    <div className="text-bgDesingColor text-4xl mb-3 inline-block">
                      <PiUsersFourBold />
                    </div>
                    <h2 className="font-medium text-3xl text-bgDesingColor">
                      {getUsers.length}
                    </h2>
                    <p className="capitalize text-bgDesingColor font-bold">
                      usuarios
                    </p>
                  </div>
                </Tab>
              </TabList>

              <TabPanel>
                <ProductDetail />
              </TabPanel>

              <TabPanel>
                <OrderDetail />
              </TabPanel>
              <TabPanel>
                <UserDetail />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
