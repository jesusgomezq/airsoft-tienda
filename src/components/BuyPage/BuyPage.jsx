import { Dialog, DialogBody } from "@material-tailwind/react";
import  { useState } from "react";

const BuyPage = ({ addressInfo, setAddressInfo, buyFunction }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button
        className="w-full capitalize bg-bgDesingColor hover:bg-bgBodyColor
        text-white py-3 rounded-lg transition-all duration-300"
        type="button"
        onClick={handleOpen}>
        comprar ahora
      </button>
      <Dialog className="bg-blue-gray-400" open={open} handler={handleOpen}>
        <DialogBody className="px-8">
          <div className="mb-3">
            <input
              className="bg-gray-300 border border-gray-400 px-2 py-2
                w-full rounded-xl outline-none text-gray-800 placeholder:text-gray-500"
              placeholder="Su nombre"
              type="text"
              name= 'nombre'
              value={addressInfo.nombre}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  nombre: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <input
              className="bg-gray-300 border border-gray-400 px-2 py-2
                w-full rounded-xl outline-none text-gray-800 placeholder:text-gray-500"
              placeholder="Tu apellido"
              type="text"
              name= 'apellido'
              value={addressInfo.apellido}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  apellido: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <input
              className="bg-gray-300 border border-gray-400 px-2 py-2
                w-full rounded-xl outline-none text-gray-800 placeholder:text-gray-500"
              placeholder="direccion"
              type="text"
              name= 'direccion'
              value={addressInfo.direccion}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  direccion: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <input
              className="bg-gray-300 border border-gray-400 px-2 py-2
                w-full rounded-xl outline-none text-gray-800 placeholder:text-gray-500"
              placeholder="Celular"
              type="text"
              name= 'celular'
              value={addressInfo.celular}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  celular: e.target.value,
                });
              }}
            />
          </div>
          {/* <div className="mb-3">
            <input
              className="bg-gray-300 border border-gray-400 px-2 py-2
                w-full rounded-xl outline-none text-gray-800 placeholder:text-gray-500"
              placeholder="Tu codigo"
              type="number"
              name= 'codigo'
              value={addressInfo.codigo}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  codigo: e.target.value,
                });
              }}
            />
          </div> */}
          <div className="mb-3">
            <button
              className="w-full bg-bgBodyColor text-center text-white px-4
              py-3 rounded-xl capitalize text-xl hover:bg-bgDesingColor"
              onClick={() => {
                handleOpen();
                buyFunction();
              }}
              type="button">
              comprar ahora
            </button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default BuyPage;
