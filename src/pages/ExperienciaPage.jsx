import Telesat from "../assets/Telesat.png"
import Celuweb from "../assets/Celuweb.png"


export const ExperienciaPage = () => {
  return (
    <section className="">
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-4xl">
              Experiencia
            </h2>

            <p className="text-lg font-bold mt-4 text-gring-offset-warm-gray-500">
              Aqui algunas de la empresas con las que he trabajado
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:gap-12 md:mt-16 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <img
                alt=""
                src={Celuweb}
                class="h-20 mx-auto rounded-full shadow-xl"
              />

              <blockquote className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl">
                <p className="text-lg font-bold text-gray-700">Celuweb</p>
                <p className="mt-1 text-xs font-medium text-gray-500">
                  Experiencia en Movilildad
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  Soporte en Aplicaciones Móviles Manejo de Base de Datos
                  SQLServer Noviembre 2020.
                </p>
              </blockquote>
            </div>

            <div>
              <img
                alt=""
                src={Telesat}
                className="h-20 mx-auto rounded-full shadow-xl"
              />

              <blockquote className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl">
                <p className="text-lg font-bold text-gray-700">Telesat S.A.</p>
                <p className="mt-1 text-xs font-medium text-gray-500">
                  Telecomunicaciones Satelitales S.A.
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  Soporte - Instalacion - Capacitaciòn del servico de internet,
                  cliente final. Marzo/2003
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
