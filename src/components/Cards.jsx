import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styles/main.css";
import { CardTabs } from "./CardTabs";
import * as Tabs from "@radix-ui/react-tabs";

export const Cards = () => {
  const { data: region } = useFetch("http://localhost:3333/region");
  const [regionCard, setRegionCard] = useState([]);

  const regions = region?.map((item) => item.cardsTabs);

  // Object.entries(region || {}).forEach(([key, element, item]) => {
  //   console.log(key)
  //   console.log(element.cardsTabs[key]?.bannerUrl)
  //   return (
  //     <>
  //       {/* <CardTabs value={value} bannerUrl={element?.bannerUrl} /> */}
  //     </>
  //   );
  // });

  // for (const key in regions) {
  //   console.log(regions);
  // }

  // console.log(regions);

  return (
    <div className="pt-40">
      <div className="text-center">
        <h1 className="text-white text-3xl">COMBINE REGIÕES PARA VENCER</h1>
        <p className="text-[#c0b6a0] text-1xl pt-4 pb-8">
          Cada região de Runeterra tem seu próprio estilo e estratégia. Como
          você quer jogar?
        </p>
      </div>
      <Tabs.Root defaultValue="tab0">
        <div className="mt-4 relative mx-auto w-[1344px] bg-cards">
          <Tabs.List className="flex mx-auto justify-between gap-4 py-8 px-32  border-[#68482c] border-b text-center">
            {region?.map((item, index) => {
              return (
                <Tabs.Trigger
                  value={`tab${index}`}
                  className="flex flex-col text-[#c0b6a0] opacity-30 uppercase font-bold text-[13px] hover:text-white hover:opacity-100"
                >
                  {item?.title}
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
        </div>
        <div className="h-[30rem] bg-[#151415] w-[1344px] flex justify-center mx-auto border-[#68482c] border-b ">
          <div className="flex mx-auto gap-12 justify-center">
            {regions?.map((item, value) => {
              for (let i = 0; i < 10; i++) {
                return (
                  <>
                    <CardTabs value={value} bannerUrl={item[i]?.bannerUrl} />
                  </>
                );
              }
            })}
          </div>
        </div>
      </Tabs.Root>
    </div>
  );
};
