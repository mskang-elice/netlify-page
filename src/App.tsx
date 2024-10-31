import React, { useState } from "react";
import MyComponent from "./MyComponent";

export default function App() {
    const [counter, setCounter] = useState(0);
    const [word, setWord] = useState('hi');

    return (
        <div>
            <input value={word} onChange={(e) => setWord(e.target.value)} />
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <MyComponent word={word} counter={counter} />
        </div>
    );
}