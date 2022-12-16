import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { CardBanner } from "./CardBanner";
import { SliderBanner } from "./SliderBanner";

export function Update() {
  const { data: cards } = useFetch("http://localhost:3333/cards");

  return (
    <div className="z-20 mx-auto relative w-full p-40 mt-80">
      <div className="max-w-[1344px] w-full">
        <div className="flex">
          <div className="-mt-[120px] w-[800px]">
            <img src="https://playruneterra.com/assets/3ea4dfb6a024da0f7a847aab8ae1cd56baf0baa5/static/image/video/video-preview-poster.jpg" />
          </div>
          <div className="text-left ml-20">
            <h1 className="text-[#c49250] tracking-wide uppercase leading-5  text-3xl font-[Oswaldo] mb-8 ">
              seja lendário
            </h1>
            <div className="border-t-2 border-t-[#99664d] pt-4 pb-4 w-80"></div>
            <p className="max-w-xs text-[13px] font-normal text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non optio
              libero sit esse in aperiam ut, aspernatur officiis hic earum
              deserunt fugit facere a iste quasi quibusdam dolore nihil rem.
            </p>
          </div>
        </div>
        {/* Cards */}
        <div className="pt-40">
          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-12 justify-center">
            {cards?.map((card, key) => {
              return (
                <CardBanner
                  key={key}
                  title={card?.title}
                  subparagraph={card.subparagraph}
                  bannerUrl={card?.bannerUrl}
                />
              );
            })}
            </div>
          </div>
        </div>
        <SliderBanner />
      </div>
    </div>
  );
}
