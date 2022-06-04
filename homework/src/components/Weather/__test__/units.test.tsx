import { render, fireEvent } from "@testing-library/react";
import { UnitItems } from "../UnitItems";

describe("Units", () => {
  it("should have valid labels", () => {
    const { getByLabelText } = render(<UnitItems />);

    expect(getByLabelText("Celsius")).not.toBeUndefined();
    expect(getByLabelText("Fahrenheit")).not.toBeUndefined();
    expect(getByLabelText("Kelvin")).not.toBeUndefined();
  });

  it("should check first value of radio button", () => {
    const { getByTestId } = render(<UnitItems />);

    expect(getByTestId("radio1")).toBeChecked();
  });
});
