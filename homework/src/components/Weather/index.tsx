import React, { useCallback, useEffect, useState } from "react";
import { weatherService } from "../Weather/service";

interface IWeather {
  id: number;
  name: string;
  temp: number;
}

export const Weather = () => {
  const [city, setCity] = useState<string>("");
  const [unit, setUnit] = useState<string>("metric");
  const [weather, setWeather] = useState<IWeather[]>([]);

  const handleRadio = useCallback(
    (e) => {
      setUnit(e.target.value);
    },
    [unit]
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
          <input
            value={city}
            type="text"
            className="form-control"
            placeholder="First name"
            onKeyPress={search}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="col">
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="metric"
                defaultChecked
                onChange={handleRadio}
              />
              <label className="form-check-label" htmlFor="Celsius">
                Celsius
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="kelvin"
                onChange={handleRadio}
              />
              <label className="form-check-label" htmlFor="Kelvin">
                Kelvin
              </label>
            </div>
            <div className="form-check disabled">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="imperial"
                onChange={handleRadio}
              />
              <label className="form-check-label" htmlFor="Fahrenheit">
                Fahrenheit
              </label>
            </div>
          </div>
        </div>
      </div>
      <ul>
        <li>ddsds</li>
        <li>ddsds</li>
        <li>ddsds</li>
        <li>ddsds</li>
        <li>ddsds</li>
      </ul>
    </div>
  );
};
