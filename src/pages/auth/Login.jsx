import React, { useState } from "react";
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowpassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.error("Email or Password is required", {
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
  };
  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-96">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">
          iniciar sesión
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
        <div>
          <div className="text-right">
            <Link
              to="/olvide-password"
              className="text-gray-500 hover:text-sky-600 transition-colors hover:underline "
            >
              ¿Olvidaste tu password?
            </Link>
          </div>
          <button
            className=" mt-6 bg-sky-600 text-white w-full py-2 px6 rounded-lg
            hover:scale-105 transition-all"
          >
            Ingresar
          </button>
        </div>
      </form>
      <div className="text-center">
        ¿No tienes una cuenta?
        <Link
          to="/registro"
          className="text-sky-600 translate-y-500 font-medium hover:underline transition-all"
        >
          Registrate
        </Link>
      </div>
    </div>
  );
};

export default Login;
