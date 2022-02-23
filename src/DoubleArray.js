import './DoubleArray.css';
import React, {useState, useEffect} from "react";

function DoubleArray() {
    const [input, setInput] = useState("");
    const [newArray, setNewArray] = useState([]);
    const [output, setOutput] = useState([]);

    useEffect(() => {
        let value = input;
        resetForm();
        splitStringToArray(value);
    }, [input]);

    useEffect(() => {
        doubleArray();
    }, [newArray]);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const resetForm = () => {
        setOutput([]);
        setNewArray([]);
    };

    const splitStringToArray = (value) => {
        let isValid = validateString(value);
        if (isValid) {
            if (!value.includes(",")) {
                setNewArray(new Array(value));
                return;
            }
            let splitArray = value.split(",").map((element) => parseFloat(element));
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

    const doubleArray = () => {
        let newArrayDouble = [];
        for (let i = 0; i < newArray.length; i++) {
            newArrayDouble[i] = newArray[i] * 2;
        }
        setOutput(newArrayDouble);
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
                    placeholder={output}
                />
            </div>
        </div>
    );
}

export default DoubleArray;
