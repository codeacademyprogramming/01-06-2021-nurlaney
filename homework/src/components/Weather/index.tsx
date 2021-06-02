import React, { FC, useCallback, useState } from "react";
import { weatherService } from "../Weather/service";
import { Item } from "./Item";
import { UnitItems } from "./UnitItems";
import { WeatherInput } from "./WeatherInput";
import { IWeather } from "./interface/index";

export const Weather: FC = () => {
  const [city, setCity] = useState<string>("");
  const [unit, setUnit] = useState<string>("metric");
  const [weather, setWeather] = useState<IWeather[]>([]);

  const handleRadio = useCallback((e) => {
    setUnit(e.target.value);
  }, []);

  const handleRemoveCity = useCallback(
    (e) => {
      const id = Number(e.target.id);
      const weatherlist = weather.filter((item) => item.id !== id);
      setWeather(weatherlist);
    },
    [weather]
  );

  const search = useCallback(
    async (e) => {
      if (e.key === "Enter") {
        weatherService
          .getWeather({
            params: {
              q: city,
              units: unit,
              appid: "2e34811cf10e1918241aaa0e832ad82d",
            },
          })
          .then((response) => {
            const data: IWeather = response.data;
            setWeather([...weather, data]);
            setCity("");
          });
      }
    },
    [weather, unit, city]
  );

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col">
          <WeatherInput city={city} search={search} setCity={setCity} />
        </div>
        <div className="col">
          <UnitItems handleRadio={handleRadio} />
        </div>
      </div>
      <ul>
        {weather.map((item) => (
          <Item
            key={item.main.temp}
            item={item}
            handleRemoveCity={handleRemoveCity}
          />
        ))}
      </ul>
    </div>
  );
};
