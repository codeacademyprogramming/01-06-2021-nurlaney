import React, { FC } from "react";

interface Props {
  handleRadio?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UnitItems = ({ handleRadio }: Props) => {
  return (
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
        <label className="form-check-label" htmlFor="exampleRadios1">
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
        <label className="form-check-label" htmlFor="exampleRadios2">
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
        <label className="form-check-label" htmlFor="exampleRadios3">
          Fahrenheit
        </label>
      </div>
    </div>
  );
};
