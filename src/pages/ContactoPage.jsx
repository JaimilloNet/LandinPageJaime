import React from "react";

export const ContactoPage = () => {
  return (
    <form class="basis-full">
      <section className="bg-black">
        <div class="max-w-screen-xl mx-auto sm:px-6 lg:px-2 sm:py-24">
          <div class="max-w-xl mx-auto text-center">
            <h2 class="text-4xl font-bold tracking-tight text-white sm:text-4xl">
              Contacto
            </h2>
          </div>
        </div>
        <div className="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:py-12 lg:col-span-2">
              <p className="text-lg font-bold mt-4 text-white">
                Para mi es importante conocer tu proyecto y que podamos trabajar
                en conjunto, llena el formulario y pronto estare en contacto
                contigo.
              </p>

              <div className="mt-8">
                <address className="mt-2 not-italic">Armenia, Colombia</address>
              </div>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
              <form action="" className="space-y-4">
                <div>
                  <label className="sr-only" for="name">
                    Nombre Completo
                  </label>
                  <input
                    className="w-full p-3 text-sm border-gray-800 rounded-lg"
                    placeholder="Nombre Completo"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="sr-only" for="email">
                      Email
                    </label>
                    <input
                      className="w-full p-3 text-sm border-gray-800 rounded-lg"
                      placeholder="Email"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" for="phone">
                      Celular
                    </label>
                    <input
                      class="w-full p-3 text-sm border-gray-800 rounded-lg"
                      placeholder="Celular"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" for="message">
                    Mensaje
                  </label>
                  <textarea
                    class="w-full p-3 text-sm border-gray-800 rounded-lg"
                    placeholder="Mensaje"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                  >
                    <span className="font-medium"> Enviar </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};
