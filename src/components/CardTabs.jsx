import React from "react";

export function CardTabs(props) {
  return (
    <React.Fragment>
      <div className="max-h-96 w-full flex mt-16">
        <img className="h-96" src={props.bannerUrl}/>
      </div>
    </React.Fragment>
  );
}
