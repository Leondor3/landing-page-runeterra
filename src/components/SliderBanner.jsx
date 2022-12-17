import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useFetch } from "../hooks/useFetch";
import { SliderCard } from "./SliderCard";

export const SliderBanner = () => {
  const { data: sliderCard } = useFetch("http://localhost:3333/slider");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  }); 

  function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        onClick={props.onClick}
        className={`${
          props.left
            ? "absolute z-30 ml-2 top-72 w-12 h-12 bg-zinc-800 p-4 rounded-full"
            : "absolute z-30 ml-2 top-72 w-12 h-12 bg-zinc-800 p-4 rounded-full right-1"
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="orange"
        width="80"
        height="80"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    );
  }

  return (
    <div className="pt-40">
      <div className="text-center mb-16">
        <h2 className="text-white text-4xl tracking-wider leading-5 font-[Oswaldo]">
          ESCOLHA SEUS CAMPEÕES
        </h2>
        <p className="text-[#c0b6a0] text-1xl pt-8 font-semibold">
          Quem você levará a batalha?
        </p>
      </div>
      <div className="w-[1230px] mx-auto keen-slider" ref={sliderRef}>
        {sliderCard?.map((item, index) => {
          return <SliderCard bannerSlide={item?.bannerSlide} index={index} />;
        })}
       {/* {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}  */}
      </div>
      <div className="z-10 h-96 w-full absolute bottom-[30rem] flex-shrink-0 -scale-x-100 opacity-20 left-0">
        <img
          className="w-full h-[610px]"
          src="https://dd.b.pvp.net/latest/set1/pt_br/img/cards/01FR009-full.png"
        />
      </div>
      <div className="bg left-[350px] border-[#68482c] border absolute h-40 w-[900px] z-40 bottom-40">
        <div className="flex flex-col items-center mx-auto text-center relative justify-center mt-4">
          <div className="flex items-center gap-4 mb-4">
            <span className=" text-[#c0b6a0] text-1xl">Noxus</span>
            <h2 className="text-4xl font-bold text-[#c0b6a0] uppercase">
              Darius
            </h2>
            <span className="text-[#c0b6a0] text-1xl max-w-[100px]">
              Agressividade Implacável
            </span>
          </div>
          <div className="w-8/12 h-1 border-[#68482c] border-b-2"></div>
          <p className="text-[13px] text-[#c0b6a0] max-w-xl mt-4">
            Com o poder de Noxus, esmague um inimigo ferido e destrua-o por
            completo com uma execução implacável.
          </p>
          <img
            className="absolute right-36 mr-12 bottom-14 h-20 w-20"
            src="https://images.contentstack.io/v3/assets/blta38dcaae86f2ef5c/blteaf99763b9f45590/5e850560ca20f06480e5e544/Noxus.png"
          />
        </div>
      </div>
      <div className="absolute right-60 bottom-2 h-96 w-60 z-40">
        <img
          src="https://dd.b.pvp.net/latest/set1/pt_br/img/cards/01NX038.png"
          alt=""
        />
      </div>
    </div>
  );
};
