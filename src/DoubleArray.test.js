import {fireEvent, render} from "@testing-library/react";
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

test("Change input and output works correctly given onChange event", () => {
    expect(inputElement.value).toBe("");
    expect(outputElement.value).toBe("");
    fireEvent.change(inputElement, {
        target: {
            value: "text",
        },
    });

    expect(inputElement.value).toBe("text");
    expect(outputElement.value).toBe("");
});

test("Change output works correctly given valid input text", () => {
    expect(inputElement.value).toBe("");
    expect(outputElement.value).toBe("");
    fireEvent.change(inputElement, {
        target: {
            value: "1,2",
        },
    });

    expect(inputElement.value).toBe("1,2");
    expect(outputElement.placeholder).toBe("2,4");
});