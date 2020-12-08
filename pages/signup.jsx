import React from "react";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="backNaranja">
      <div className="shadow-lg cardPosition w-1/2  px-10 pt-10 pb-5 rounded-xl max-w-xl bg-white">
        <input
          type="text"
          placeholder="Nombre"
          className="border-2 border-gray-200 w-full rounded px-3 py-1 text-gray-400 leading-relaxed focus:outline-none focus:ring-4 focus:ring-opacity-70 focus:ring-foodie "
        />
        <input
          type="text"
          placeholder="Usuario"
          className="border-2 mt-5 border-gray-200 w-full rounded px-3 py-1 text-gray-400 leading-relaxed focus:outline-none focus:ring-4 focus:ring-opacity-70 focus:ring-foodie "
        />
        <input
          type="password"
          placeholder="*******"
          className="mt-5  border-2 border-gray-200 w-full rounded px-3 py-1 text-gray-400 leading-relaxed focus:outline-none focus:ring-4 focus:ring-opacity-70 focus:ring-foodie"
        />
        <div className="flex justify-center my-4">
          <button className="bg-foodie shadow-md focus:shadow-xl focus:outline-none cursor-pointer hover:bg-yellow-600 rounded-full font-bold  text-white py-2 px-6 ">
            Crear cuenta
          </button>
        </div>
        <p className="cursor-pointer mt-5 text-right text-blue-400">
          <Link href="/signin">Ya tengo una cuenta</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
