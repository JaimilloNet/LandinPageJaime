import { proyectos } from "../database/proyectos";

export const MyCard = ({
  url,
  titulo,
  descripcion,
  url_preview,
  url_github,
}) => {
  return (
    <>
      <div className="container grid gap-4 grid-cols-1 lg:grid-cols-2 grid-rows-2 justify-between w-full h-full mb-24">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            className="flex container justify-between flex-col bg-secondary-color lg:flex flex-grow items-center w-[100%] h-[100%] px-5 py-5 rounded-md mr-5 my-10"
          >
            <div className="flex flex-row w-full h-full justify-around">
              <div className="flex flex-col justify-center w-[50%] h-[80%]">
                <img
                  src={proyecto.url}
                  className="h-auto justify-center self-center rounded-lg"
                  alt="Imagen-portafolio"
                />
              </div>
              <div className="bg-secondary-color w-[50%] sm:w-[40%] rounded-md p-4">
                <div className="w-full">
                  <h1 className="text-white text-3xl font-bold mb-4">
                    {proyecto.titulo}
                  </h1>
                  <p className="text-white text-lg">{proyecto.descripcion}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row w-full justify-around mb-5">
              <div className="flex">
                <a href={proyecto.url}>
                  <button className="flex sm: bg-quinario-color-complement text-white w-auto h-auto px-4 sm:px-16 rounded-3xl items-center py-1 mr-5">
                    GitHub
                  </button>
                </a>
              </div>

              <div className="flex">
                <a href={proyecto.url}>
                  <button className="flex bg-quinario-color-complement text-white w-full h-full px-4 sm:px-16 rounded-3xl items-center py-1"></button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
