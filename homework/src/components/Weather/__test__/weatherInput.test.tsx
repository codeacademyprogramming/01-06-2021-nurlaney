import { render, fireEvent } from "@testing-library/react";
import { WeatherInput } from "../WeatherInput";

describe("Input", () => {
  it("should initialize correctly", () => {
    render(<WeatherInput />);
  });
});
