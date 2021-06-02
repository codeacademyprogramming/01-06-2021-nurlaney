import { render, fireEvent } from "@testing-library/react";
import { UnitItems } from "../UnitItems";

describe("Units", () => {
  it("should have valid labels", () => {
    const { getByText, getByLabelText } = render(<UnitItems />);

    expect(getByLabelText("Celsius")).not.toBeUndefined();
    expect(getByLabelText("Fahrenheit")).not.toBeUndefined();
    expect(getByLabelText("Kelvin")).not.toBeUndefined();
  });
});
