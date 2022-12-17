import React from "react";

export function SliderCard({index, ...props}) {
  return (
    <React.Fragment>
      <div className={`z-20 relative keen-slider__slide number-slide${index + 1}`}>
        <img src={props.bannerSlide} />
      </div>
    </React.Fragment>
  );
}
