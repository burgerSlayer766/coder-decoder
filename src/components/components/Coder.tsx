import { useState } from "react";
import { digital, littera } from "../../helpers/shifrator";
const Coder = () => {
    const [inputValue, setValue] = useState("")
    const [outputValue, setOutputValue] = useState("")
    const [isCopied, setIsCopied] = useState(false);
    const handleInput = (event: any) => {
        setValue(event.target.value)
    }
    const shifr = () => {
        let answer = "";
        const str: string = inputValue;
        const arrayStr = str.split('');
        console.log(arrayStr)
        for (let i = 0; i < arrayStr.length; i++) {
            for (let j = 0; j < littera.length; j++) {
                if (arrayStr[i] == littera[j]) {
                    answer += digital[j] + " ";
                    console.log(answer)
                    break
                }
            }
        }
        setOutputValue(answer)
    };
    const EnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            shifr();
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
    return <div>
        <label htmlFor="myInputshifr">Шифровка</label>
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
};
export default Coder;