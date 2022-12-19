import React from "react";
import * as Tabs from "@radix-ui/react-tabs";

export function CardTabs({ value, ...props }) {
  return (
    <React.Fragment>
      <Tabs.Content
        value={`tab${value}`}
        className="max-h-96 w-full flex mt-16"
      >
        <img
          className="h-96"
          src={props.bannerUrl}
        />
      </Tabs.Content>
    </React.Fragment>
  );
}
