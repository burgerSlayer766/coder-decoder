import React, { useState } from "react";
import { digital, binary } from "../../helpers/shifrator";
interface BinaryCoderProps {
    onCodeGenerated: (bits: number[]) => void;
}
const BinaryCoder: React.FC<BinaryCoderProps> = ({ onCodeGenerated }) => {
    const [inputValue, setValue] = useState("");
    const [outputValue, setOutputValue] = useState("");
    const [isCopied, setIsCopied] = useState(false);
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
    const EnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            rashifr();
        }
    }
    const CopyKey = async () => {
        if (!outputValue) return; 
        try {
            await navigator.clipboard.writeText(outputValue);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); 
        } catch (err) {
            console.error("Не удалось скопировать текст: ", err);
        }
    }
    return (
        <div>
            <label htmlFor="myInputshifr">Двоичный Шифр </label>
            <input
                id="myInputshifr"
                type="text"
                value={inputValue}
                onChange={handleInput}
                onKeyDown={EnterKey}
            />
            <p 
                    onClick={CopyKey} 
                    style={{ cursor: 'pointer', userSelect: 'none' }}
                    title="Нажмите, чтобы скопировать"
                >
                    Результат: {outputValue} 
                    {isCopied && <span style={{ color: 'black', marginLeft: '10px' }}>(Скопировано!)</span>}
                </p>
        </div>
    );
};
export default BinaryCoder;
