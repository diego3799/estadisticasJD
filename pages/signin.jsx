import React from "react";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setJwtAction } from "../redux/actions/commonAction";
import { useRouter } from "next/router";
const Login = () => {
  const { handleSubmit } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();
  function onSubmit(data) {
    dispatch(setJwtAction());
    router.push("/");
  }
  return (
    <div className="backNaranja">
      <div className="shadow-lg cardPosition w-1/2  px-10 pt-10 pb-5 rounded-xl max-w-xl bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="user"
            placeholder="Usuario"
            className="border-2 border-gray-200 w-full rounded px-3 py-1 text-gray-400 leading-relaxed focus:outline-none focus:ring-4 focus:ring-opacity-70 focus:ring-foodie "
          />
          <input
            name="password"
            type="password"
            placeholder="*******"
            className="mt-5  border-2 border-gray-200 w-full rounded px-3 py-1 text-gray-400 leading-relaxed focus:outline-none focus:ring-4 focus:ring-opacity-70 focus:ring-foodie"
          />
          <div className="flex justify-center my-4">
            <button
              type="submit"
              className="bg-foodie shadow-md focus:shadow-xl focus:outline-none cursor-pointer hover:bg-yellow-600 rounded-full font-bold  text-white py-2 px-6 "
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
        <p className="cursor-pointer mt-5 text-right text-blue-400">
          <Link href="/signup">Crear una cuenta</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
