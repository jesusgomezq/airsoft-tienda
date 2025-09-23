function Testimonial() {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1 className=" text-center text-3xl font-bold text-gray-800 font-titleFont">
            Testimonial
          </h1>
          <h2 className=" text-center text-2xl font-semibold mb-10">
            nuestors <span className=" text-bgBodyColor">clientes</span>{" "}
            comentan
          </h2>
          <div className="flex flex-wrap -m-4 bg-bgBodyColor/20 rounded-xl">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center border rounded-lg p-4">
                <img
                  alt="testimonial"
                  className="w-24 h-24 mb-8 object-contain object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://www.evike.com/images/large/prima-10531.jpg"
                />
                <p className="leading-relaxed p-3">
                  "KJW KP-12 Polymer! Esta réplica de airsoft es una bestia en
                  el campo de juego. Su construcción en polímero es ligera y
                  resistente, lo que la hace perfecta para largas sesiones de
                  juego. La precisión y el alcance son impresionantes, y el
                  cargador es fácil de recargar. Me ha sorprendido gratamente la
                  calidad y el rendimiento de esta réplica. ¡Altamente
                  recomendada para cualquier jugador de airsoft!" 😊👍
                </p>
                <span className="inline-block h-1 w-10 rounded bg-bgBodyColor mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  daniel valera
                </h2>
                <p className="text-gray-500">nuevo</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center border rounded-lg p-4">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-contain objec-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://www.evike.com/images/large/cyma-25029.jpg"
                />
                <p className="leading-relaxed p-3">
                  "¡Esta AK47 es una bestia en el campo de juego! La calidad de
                  construcción es impresionante, con un peso y un equilibrio
                  perfectos. La velocidad de disparo es rápida y precisa, y el
                  sistema de disparo selectivo es suave y fiable. Me encanta el
                  detalle de la licencia oficial de Kalashnikov, es un toque de
                  autenticidad que me gusta. En general, estoy muy satisfecho
                  con esta réplica y la recomiendo a cualquier jugador de
                  airsoft que busque una opción fiable y potente. ¡Cinco
                  estrellas!" 😊👊
                </p>
                <span className="inline-block h-1 w-10 rounded bg-bgBodyColor mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  sergio ruiz
                </h2>
                <p className="text-gray-500">Nuevo</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center border rounded-lg p-4">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-contain object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://www.evike.com/images/21/large/kj-71766a.jpg"
                />
                <p className="leading-relaxed p-3">
                  "¡Este chaleco es una bestia! La calidad del material 600D es
                  impresionante, es resistente y duradero. Me encanta el sistema
                  MOLLE, es muy versátil y me permite personalizar mi equipo
                  según mis necesidades. La bolsa de hidratación es un gran
                  añadido, me permite llevar mi agua y mis snacks sin problemas.
                  El color Desert Tan es perfecto para misiones en entornos
                  áridos. En general, estoy muy satisfecho con este chaleco y lo
                  recomiendo a cualquier jugador de airsoft o practicante de
                  tácticas que busque un equipo fiable y funcional. ¡Excelente
                  compra!" 😊💪
                </p>
                <span className="inline-block h-1 w-10 rounded bg-bgBodyColor mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  jorge coss
                </h2>
                <p className="text-gray-500">Cliente Frecuente</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
