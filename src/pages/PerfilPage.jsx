import React from "react";
import ImagenLenguajes from "../assets/Lenguajes.png";
import "./profileStyle.css";

export const PerfilPage = () => {
  return (
    <>
     <div className="max-w-xl mx-auto text-center">
     <div className="px-4 py-16 max-w-screen-xl sm:px-6 lg:px-8">
    <h2 class="text-4xl font-bold text-center tracking-tight sm:text-4xl">
              Perfil
            </h2>
      </div>
      </div>      
    <div className="flex">
      <div className="w-1/2 p-4">
      <img
            className="w-1/2 -mt-25 shadow-xl rounded-full mx-auto mb-6 border-white border-4"
            src={ImagenLenguajes}
          />

        
      </div>
      <div className="justify-center items-center w-1/2 p-4">
       <h1 className="font-bold text-5xl Texto">
            Desarrollador FrontEnd con ReactJS
          </h1>
          <p className="text-black text-4xl bold mt-12">
            Creador y desarrollador de páginas y aplicaciones web, Si tienes
            alguna idea y quieres desarrollarla, te inivito a que me contactes.
          </p>
      </div>
    </div>
    </>
  );
};
