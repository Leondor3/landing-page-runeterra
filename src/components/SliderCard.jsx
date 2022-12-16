import React from "react";

export function SliderCard(props) {
  return (
    <React.Fragment>
      <div className="z-20 relative keen-slider__slide number-slide">
        <img src={props.bannerSlide} />
      </div>
    </React.Fragment>
  );
}
