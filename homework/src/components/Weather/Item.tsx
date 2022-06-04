import React from "react";
import { IWeather } from "./interface/index";

interface Props {
  item: IWeather;
  handleRemoveCity: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Item = ({ item, handleRemoveCity }: Props) => {
  return (
    <li key={item.id}>
      <div style={{ display: "inline" }}>
        <button onClick={handleRemoveCity} id={item.id.toString()}>
          -
        </button>
      </div>
      <div style={{ display: "inline" }}>
        {item.name} - {item.main.temp}
      </div>
    </li>
  );
};
