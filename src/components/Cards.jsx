import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styles/main.css";
import { CardTabs } from "./CardTabs";

export const Cards = () => {

  const { data: cardsTabs } = useFetch("http://localhost:3333/cardstabs");
  console.log(cardsTabs);

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
        <div className="mt-4 relative mx-auto w-[1344px] bg-cards">
          <ul className="flex mx-auto justify-between gap-4 py-8 px-32  border-[#68482c] border-b text-center">
            {cardsTabs?.map((tabs) => {
              return (
                <li
                  className="flex flex-col text-[#c0b6a0] opacity-30 uppercase font-bold text-[13px]"
                >
                  {tabs?.title}
                  <span className="capitalize">{tabs.subtitle}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="h-[30rem] bg-[#151415] w-[1344px] flex justify-center mx-auto border-[#68482c] border-b ">
          <div
            className="flex mx-auto gap-12 justify-center"
          >
            {cardsTabs?.map((tabs) => {
              return <CardTabs bannerUrl={tabs.bannerUrl} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
