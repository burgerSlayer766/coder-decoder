import { useState } from "react";
import { digital, littera } from "../../helpers/shifrator";


const DeCoder = () => {
const [inputValue, setValue] = useState("")
    const [outputValue, setOutputValue] = useState("")
    const handleInput = (event: any) => {
        setValue(event.target.value)
    }

    const rashifr = () => {
        let answer = "";
        const str = inputValue;
        const arrayStr = str.split(' ');
        
        console.log(arrayStr)
        
        for (let i = 0; i < arrayStr.length; i++) {
            
            for (let j = 0; j < digital.length; j++) {
                let rezult = digital[j]
                if (arrayStr[i] == rezult.toString()) {
                    answer += littera[j] + " ";
                    console.log(answer)
                    
                }
            }
        }

        setOutputValue(answer)

    }

    return <div>
        <label htmlFor="myInputshifr">Расшифровка</label>
        <input type="text" value={inputValue} onChange={event => handleInput(event)} />

        <button onClick={rashifr}> получить расшифр</button>
        {outputValue}
    </div>

};

export default DeCoder;