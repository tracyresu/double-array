import './DoubleArray.css';
import React, {useState} from "react";

function DoubleArray() {
    const [input, setInput] = useState("");
    const [newArray, setNewArray] = useState([]);

    const handleInput = (e) => {
        setInput(e.target.value);
        printDoubleOfArray(input)
    };

    const printDoubleOfArray = (value) => {
        splitStringToArray(value);
    };

    const splitStringToArray = (value) => {
        let isValid = validateString(value);
        if(isValid) {
            let splitArray = value.split(",");
            setNewArray(splitArray);
        } else {
            setNewArray([]);
        }
    };

    const validateString = (value) => {
        if (/^[0-9,.]*$/.test(value)) {
            let charArray = value.split("");
            if (
                charArray.length &&
                charArray[charArray.length - 1] !== "," &&
                charArray[charArray.length - 1] !== "."
            ) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };

    return (
        <div className="App">
            <div className="container">
                <div className="container-label">Input</div>
                <div className="data-label">Array</div>
                <input
                    className="input-element"
                    data-testid="input-test"
                    type="text"
                    onChange={(e) => handleInput(e)}
                />
            </div>
            <div className="container">
                <div className="container-label">Output</div>
                <div className="data-label">Double</div>
                <input
                className="input-element"
                data-testid="output-test"
                type="text"
            />
            </div>
        </div>
    );
}

export default DoubleArray;
