import React from "react";

interface Props {
  city: string;
  search: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

export const WeatherInput = ({ city, search, setCity }: Props) => {
  return (
    <input
      value={city}
      type="text"
      className="form-control"
      placeholder="Type here.."
      onKeyPress={search}
      onChange={(e) => setCity(e.target.value)}
    />
  );
};
