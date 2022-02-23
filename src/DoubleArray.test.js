import {cleanup, fireEvent, render} from "@testing-library/react";
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
    expect(outputElement.value).toBe("2,4");
});

test("Change output works correctly given input text with float value", () => {
    expect(inputElement.value).toBe("");
    expect(outputElement.value).toBe("");
    fireEvent.change(inputElement, {
        target: {
            value: "1,2.3,42,3.12",
        },
    });

    expect(inputElement.value).toBe("1,2.3,42,3.12");
    expect(outputElement.value).toBe("2,4.6,84,6.24");
});

test("Change output works correctly given invalid text", () => {
    expect(inputElement.value).toBe("");
    expect(outputElement.value).toBe("");
    fireEvent.change(inputElement, {
        target: {
            value: "3a,42",
        },
    });

    expect(inputElement.value).toBe("3a,42");
    expect(outputElement.placeholder).toBe("");
});

afterEach(() => {
    cleanup();
});
