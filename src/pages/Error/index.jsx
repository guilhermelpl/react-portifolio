import React from "react";
import gif from "../../assets/Kimetsu.gif";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={gif} alt="gif" className="w-40" />
        <span className="mt-4 text-4xl">404: Página não encontrada.</span>
        <span className="text-1xl mb-4">Parece que a página que você está procurando não existe.</span>
        <Link to={"/"}>
          <button className="bg-transparent hover:bg-orange-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
            Início
          </button>
        </Link>
      </div>
    </div>
  );
};

export default index;
