import { render } from "@testing-library/react";
import DoubleArray from "./DoubleArray";

let getByTestId;
let inputElement;
let outputElement;

beforeEach(() => {
    const component = render(<DoubleArray />);
    getByTestId = component.getByTestId;

    inputElement = getByTestId("input-test");
    outputElement = getByTestId("output-test");
});

test("Component renders input correctly", () => {
    expect(inputElement).toBeTruthy;
    expect(inputElement.value).toBe("");
});

test("Component renders output correctly", () => {
    expect(outputElement).toBeTruthy;
    expect(outputElement.value).toBe("");
});