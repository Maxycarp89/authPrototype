import React, { useState } from "react";
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiUser3Line,
} from "react-icons/ri";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("")


  const handleShowpassword = () => {
    setShowPassword(!showPassword);
  };
   /* `const handleSubmit` es una función que se llama cuando el usuario envía el formulario de
  registro. Primero evita el comportamiento predeterminado de envío de formularios usando
  `e.preventDefault()`. Luego verifica si alguno de los campos requeridos (nombre, apellido, correo
  electrónico, contraseña, confirmar contraseña) está vacío usando el método `includes()`. Si alguno
  de los campos está vacío, muestra un mensaje de error utilizando la función `toast` de la
  biblioteca `react-toastify` y regresa antes para evitar que se siga ejecutando la función. También
  verifica si la contraseña tiene al menos 6 caracteres y si los campos de contraseña y confirmación
  de contraseña coinciden, mostrando mensajes de error si no es así. */
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name,lastName,email,password,confirmPassword].includes("")) {
      toast.error("All fields are required", {
        theme: "dark",

      });
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long", {
        theme: "dark",
      });
      return;
    }
    if (password !==confirmPassword) {
      toast.error("Passwords do not match", {
        theme: "dark",
      });
      return;
    }
    //VALIDAR QUE EL EMAIL NO EXISTA EN LA BASE DE DATOS

    // ENVIAR EMAIL DE VERIFICACIÓN

  };
  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-[500px]">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">
          Registrarse
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <div className="relative">
          <RiUser3Line className="absolute left-1 top-2 text-gray-500 translate-y-1/2" />
          <input
            type="text"
            className=" border border-gray-200 w-full outline-none py-2 px-6 rounded-lg"
            placeholder="Nombre(s)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="relative">
          <RiUser3Line className="absolute left-1 top-2 text-gray-500 translate-y-1/2" />
          <input
            type="text"
            className=" border border-gray-200 w-full outline-none py-2 px-6 rounded-lg"
            placeholder="Apellido(s)"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
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
        <div className="relative">
          <RiLockLine className="absolute left-1 top-2 text-gray-500 translate-y-1/2" />
          <input
            type={showPassword ? "text" : "password"}
            className=" border border-gray-200 w-full outline-none py-2 px-6 rounded-lg"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={handleShowpassword}
              className="absolute right-2 top-2 text-gray-500 translate-y-1/2 cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={handleShowpassword}
              className="absolute right-2 top-2 text-gray-500 translate-y-1/2 cursor-pointer"
            />
          )}
        </div>
        <div className="relative">
          <RiLockLine className="absolute left-1 top-2 text-gray-500 translate-y-1/2" />
          <input
            type={showPassword ? "text" : "password"}
            className=" border border-gray-200 w-full outline-none py-2 px-6 rounded-lg"
            placeholder=" confirmar Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={handleShowpassword}
              className="absolute right-2 top-2 text-gray-500 translate-y-1/2 cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={handleShowpassword}
              className="absolute right-2 top-2 text-gray-500 translate-y-1/2 cursor-pointer"
            />
          )}
        </div>
        <div>
          <button
            className=" mt-6 bg-sky-600 text-white w-full py-2 px6 rounded-lg
            hover:scale-105 transition-all"
          >
            Registrarse
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
        <div className="text-right">
          <Link
            to="/olvide-password"
            className="text-gray-500 font-medium hover:underline transition-all"
          >
            ¿olvidaste tu password?{" "}
          </Link>
        </div>
      </div>
      
      </div>
    
  );
};

export default Register;
