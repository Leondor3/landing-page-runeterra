import React from "react";
import "../styles/main.css";

export const Cards = () => {
  return (
    <div className="pt-40">
      <div className="text-center">
        <h1 className="text-white text-3xl">COMBINE REGIÕES PARA VENCER</h1>
        <p className="text-[#c0b6a0] text-1xl pt-4 pb-8">
          Cada região de Runeterra tem seu próprio estilo e estratégia. Como
          você quer jogar?
        </p>
      </div>
      <div>
        <div className="mt-4 relative mx-auto w-[1344px] bg-cards ">
          <ul
            className="flex mx-auto justify-between gap-4 py-8 px-32  border-[#68482c] border-b text-center"
          >
            <li className="flex flex-col text-[#c0b6a0] opacity-30 uppercase font-bold text-[13px]">
              Ilha das sombras
              <span className="capitalize">Morte e Sacrificio</span>
            </li>
            <li className="flex flex-col text-[#c0b6a0] opacity-30 uppercase font-bold text-[13px]">
              Ilha das sombras
              <span className="capitalize">Morte e Sacrificio</span>
            </li>
            <li className="flex flex-col text-[#c0b6a0] opacity-30 uppercase font-bold text-[13px]">
              Ilha das sombras
              <span className="capitalize">Morte e Sacrificio</span>
            </li>
            <li className="flex flex-col text-[#c0b6a0] opacity-30 uppercase font-bold text-[13px]">
              Ilha das sombras
              <span className="capitalize">Morte e Sacrificio</span>
            </li>
            <li className="flex flex-col text-[#c0b6a0] opacity-30 uppercase font-bold text-[13px]">
              Ilha das sombras
              <span className="capitalize">Morte e Sacrificio</span>
            </li>{" "}
            <li className="flex flex-col text-[#c0b6a0] opacity-30 uppercase font-bold text-[13px]">
              Ilha das sombras
              <span className="capitalize">Morte e Sacrificio</span>
            </li>
          </ul>
        </div>
        <div className="h-[30rem] bg-[#151415] w-[1344px] flex justify-center mx-auto border-[#68482c] border-b ">
          <div className="flex mx-auto justify-center">
            <div className="max-h-96 w-full flex gap-8 mt-16">
              <img
                className="h-96"
                src="https://dd.b.pvp.net/latest/set5/pt_br/img/cards/05BC116.png"
              />
              <img
                className="h-96"
                src="https://dd.b.pvp.net/latest/set5/pt_br/img/cards/05BC116.png"
              />
              <img
                className="h-96"
                src="https://dd.b.pvp.net/latest/set5/pt_br/img/cards/05BC116.png"
              />
              <img
                className="h-96"
                src="https://dd.b.pvp.net/latest/set5/pt_br/img/cards/05BC116.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
