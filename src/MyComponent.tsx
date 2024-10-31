import { useMemo } from "react";

interface Props {
    word: string;
    counter: number;
}

function MyComponent({ word, counter }: Props) {
    const tt = () => {
        console.log("ew");
        return word + word + word;
    };

    // const repeatWord = word + word + word;
    // const repeatWord = tt();
    const repeatWord = useMemo(tt, [word]);

    return (
        <div>
            <div>counter: {counter}</div>
            <div>repeat: {repeatWord}</div>
        </div>
    );
}

export default MyComponent;