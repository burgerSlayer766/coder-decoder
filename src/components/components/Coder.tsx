import { useState } from "react";
import { digital, littera } from "../../helpers/shifrator";


const Coder = () => {
const [inputValue, setValue] = useState("")
    const [outputValue, setOutputValue] = useState("")
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

    }

    return <div>
        <label htmlFor="myInputshifr">Шифровка</label>
        <input type="text" value={inputValue} onChange={event => handleInput(event)} />

        <button onClick={shifr}> получить шифр</button>
        {outputValue}
    </div>

};

export default Coder;