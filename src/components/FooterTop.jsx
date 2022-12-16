import React from "react";

export const FooterTop = () => {
  return (
    <div className="pt-40 relative">
      <div
        className="flex justify-center items-center bg-[#292929] border-t-[2px]
      border-[#343434]"
      >
        <ul className="flex gap-8 text-center p-8">
          <li className="text-white text-[13px] uppercase font-semibold tracking-wider">
            Sobre o League of Legends
          </li>
          <li className="text-white text-[13px] uppercase font-semibold tracking-wider">
            Suporte
          </li>
          <li className="text-white text-[13px] uppercase font-semibold tracking-wider">
            Desenvolvedores
          </li>
          <li className="text-white text-[13px] uppercase font-semibold tracking-wider">
            Mídia
          </li>
          <li className="text-white text-[13px] uppercase font-semibold tracking-wider">
            Torneios indepedentes
          </li>
          <li className="text-white text-[13px] uppercase font-semibold tracking-wider">
            baixe o aplicativo de celular riot mobile
          </li>
        </ul>
      </div>
    </div>
  );
};
