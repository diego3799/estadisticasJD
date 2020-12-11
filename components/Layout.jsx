import React, { useEffect } from "react";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("jwt") === null) {
      router.push("/signin");
    }
  }, []);
  return (
    <div className="md:flex block">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-foodie  md:w-1/6 md:h-screen h-1/6 sticky top-0 shadow-xl backNav z-10">
        <h1 className="font-foddie font-extrabold text-white text-6xl text-center pt-5">
          foodie
        </h1>
        <nav className="h-1/5 hidden md:block mt-10">
          <ul className="flex flex-col h-full justify-between text-white font-foddie text-3xl  text-center">
            <Link href="/">
              <li
                className={`link ${
                  router.pathname === "/" && "activeLink font-bold"
                } cursor-pointer relative mx-auto transition-all`}
              >
                <a>Inicio</a>
              </li>
            </Link>
            <Link href="/estadisticas">
              <li
                className={`link  ${
                  router.pathname === "/estadisticas" && "activeLink font-bold"
                } cursor-pointer relative mx-auto transition-all`}
              >
                <a>Estadisticas</a>
              </li>
            </Link>

            {/* <Link href="/reportes">
              <li
                className={`link  ${
                  router.pathname === "/reportes" && "activeLink font-bold"
                } cursor-pointer relative mx-auto transition-all`}
              >
                <a>Reportes</a>
              </li>
            </Link> */}
          </ul>
        </nav>
      </div>
      <main className=" z-0 md:w-5/6 h-1/6 border md:pt-0 pt-10 md:h-screen overflow-x-auto backGris">
        {children}
      </main>
    </div>
  );
};

export default Layout;
