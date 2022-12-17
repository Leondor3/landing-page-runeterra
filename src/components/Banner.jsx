import React from "react";
import "../styles/main.css";

export function Banner() {
  return (
    <div className="h-[600px] flex mx-auto flex-1 relative -mt-10 flex-col">
      <div className="">
        <video
          class="w-full aspect-video"
          src="https://assets.contentstack.io/v3/assets/blta38dcaae86f2ef5c/blt64ba8409035f7da2/63448cfba81944136692822b/LoR_6D2022_Domination_Website_IntroVideo_loop_EN_PCruz.mp4"
        ></video>
      </div>
      <div className="">
        <div className="z-10 pt-80 -ml-[80px] absolute bottom-0 left-1/2 translate-x-0 translate-y-2/4">
          <button className="p-4 flex items-center uppercase m-4 h-10 bg-yellow-600 rounded-md text-white">
            <span className="font-[Oswaldo] font-bold leading-5 tracking-tighter">
              Jogar agora
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 -mt-20 items-center bg-after z-10">
        <span className="z-10 uppercase text-sm font-bold text-[#696053]">
          DISPONIVEL EM
        </span>
        <div className="flex flex-row items-center justify-center -mt-10 gap-4 z-20">
          <img className="h-32 w-32" src="https://playruneterra.com/assets/3ea4dfb6a024da0f7a847aab8ae1cd56baf0baa5/static/image/badges/pc-version-pt-br.svg" />
          <img className="h-32 w-32" src="https://playruneterra.com/assets/3ea4dfb6a024da0f7a847aab8ae1cd56baf0baa5/static/image/badges/app-store-pt-br.svg" />
          <img className="h-32 w-32" src="https://playruneterra.com/assets/3ea4dfb6a024da0f7a847aab8ae1cd56baf0baa5/static/image/badges/google-play-pt_get.svg" />
        </div>
      </div>
    </div>
  );
}
