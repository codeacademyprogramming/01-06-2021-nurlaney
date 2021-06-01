import React from "react";

interface Props {
  handleRadio: any;
}

export const Units = ({ handleRadio }: Props) => {
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
  );
};
