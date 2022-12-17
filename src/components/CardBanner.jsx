import React from "react";

export function CardBanner(props) {
  return (
    <React.Fragment>
      <div data-sal="fade" className="flex flex-col">
        <div className="relative w-full bg-card-after">
          <img
            className="w-full object-cover h-[350px]"
            src={props.bannerUrl}
          />
        </div>
        <div className="bg-card text-center p-4">
          <h2 className="font-bold text-[#68482c] -mt-8 text-1xl uppercase">
            {props.title}
          </h2>
          <hr className="w-1/2 mx-auto mt-2 border-b-[#68482c] border-t-0 border" />
          <p className="text-[13px] mt-2">{props.subparagraph}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
