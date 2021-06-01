import React from "react";

interface Props {
  item: any;
  handleRemoveCity: any;
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
