import './DoubleArray.css';
import React, {useState, useEffect} from "react";

function DoubleArray() {
    const [input, setInput] = useState("");
    const [newArray, setNewArray] = useState([]);
    const [output, setOutput] = useState([]);

    useEffect(() => {
        setNewArray([]);
        let value = input;
        splitStringToArray(value);
    }, [input]);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const printDoubleOfArray = (value) => {
        console.log("newArray: " + value);
        splitStringToArray(value);
        console.log("newArray: " + value);
    };

    const splitStringToArray = (value) => {
        let isValid = validateString(value);
        if (isValid) {
            if (!value.includes(",")) {
                setNewArray(new Array(value));
                return;
            }
            let splitArray = value.split(",").map((element) => parseInt(element, 10));
            setNewArray(splitArray);
        } else {
            setNewArray([]);
        }
    };

    const validateString = (value) => {
        if (/^[0-9,.]*$/.test(value)) {
            let charArray = value.split("");
            return charArray.length &&
                charArray[charArray.length - 1] !== "," &&
                charArray[charArray.length - 1] !== ".";
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
                    onKeyUp={(e) => handleInput(e)}
                />
            </div>
            <div className="container">
                <div className="container-label">Output</div>
                <div className="data-label">Double</div>
                <input
                    className="input-element"
                    data-testid="output-test"
                    type="text"
                    placeholder={newArray}
                />
            </div>
        </div>
    );
}

export default DoubleArray;
