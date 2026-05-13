import React, { useState } from "react";
import { digital, binary } from "../../helpers/shifrator";

// Интерфейс для пропсов компонента
interface BinaryCoderProps {
    onCodeGenerated: (bits: number[]) => void;
}

const BinaryCoder: React.FC<BinaryCoderProps> = ({ onCodeGenerated }) => {
    const [inputValue, setValue] = useState("");
    const [outputValue, setOutputValue] = useState("");

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const rashifr = () => {
        let answer = "";
        const str = inputValue;
        const arrayStr = str.split(' ');

        for (let i = 0; i < arrayStr.length; i++) {
            for (let j = 0; j < digital.length; j++) {
                let rezult = digital[j];
                if (arrayStr[i] === rezult.toString()) {
                    answer += binary[j];
                }
            }
        }
        setOutputValue(answer);
        const bitsArray = answer
            .split("")
            .map(char => parseInt(char, 10))
            .filter(num => !isNaN(num));
        onCodeGenerated(bitsArray);
    };

    return (
        <div>
            <label htmlFor="myInputshifr">Расшифровка </label>
            <input
                id="myInputshifr"
                type="text"
                value={inputValue}
                onChange={handleInput}
            />
            <button onClick={rashifr}>получить расшифр</button>
            <p>Результат: {outputValue}</p>
        </div>
    );
};

export default BinaryCoder;
