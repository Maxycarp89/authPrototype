import React, { useState } from "react";
import { RiMailLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

/* Este es un componente funcional en React que define un formulario para restablecer una contraseña
olvidada. Utiliza el enlace useState para crear una variable de estado para el campo de entrada de
correo electrónico y la función handleSubmit para gestionar el envío de formularios. La función
handleSubmit evita el comportamiento predeterminado de envío de formularios, verifica si el campo de
correo electrónico está vacío y muestra un mensaje de error usando la biblioteca de brindis si lo
está. */
const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([email].includes("")) {
      toast.error("Email is required", {
        theme: "dark",
      });
      return;
    }
    toast.success("Email sent", {
      theme: "colored",
    });
  };

  //VERIFICAR QUE EL EMAIL EXISTA
  //ENVIAR MAIL DE RECUPERACIÓN DE CONTRASEÑA
  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-96">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">
          Recuperar contraseña
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <div className="relative">
          <RiMailLine className="absolute left-1 top-2 text-gray-500 translate-y-1/2" />
          <input
            type="email"
            className=" border border-gray-200 w-full outline-none py-2 px-6 rounded-lg"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <button
            className=" mt-6 bg-sky-600 text-white w-full py-2 px6 rounded-lg
            hover:scale-105 transition-all"
          >
            enviar instrucciones
          </button>
        </div>
      </form>
      <div className="flex items-center justify-between">
        <div>
          ¿Ya tienes una cuenta?{" "}
          <Link
            to="/"
            className="text-sky-600 font-medium hover:underline transition-all"
          >
            Ingresa
          </Link>
        </div>

        <div>
          ¿No tienes una cuenta?{" "}
          <Link
            to="/registro"
            className="text-sky-600 font-medium hover:underline transition-all"
          >
            Registrate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
