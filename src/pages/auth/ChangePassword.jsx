import React, { useState } from "react";
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";
import { toast } from "react-toastify";
import { Link, useParams, useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const { token } = useParams();

  if (token !== "132134646") {
    navigate("/");
  }

  const handleShowpassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([password, confirmPassword].includes("")) {
      toast.error("Password is required", {
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

    if (password !== confirmPassword) {
      toast.error("Passwords do not match", {
        theme: "dark",
      })
  };
  toast.success(" Your password was changed successfully",{
    theme: "colored",
  })
}
  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-96">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">
          Actualizar Contraseña
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
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
            placeholder="Confirm Password"
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
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
