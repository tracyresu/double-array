import './DoubleArray.css';
import React, { useState } from "react";

function DoubleArray() {
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
        console.log(input)
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
