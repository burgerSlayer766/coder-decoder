import { useState } from "react";
import Coder from "../components/Coder";
import DeCoder from "../components/Decoder";
import BinaryCoder from "../components/BinaryCoder";
import { SineWaveChart } from "../components/AmplitudeChart";
import { FSKChart } from "../components/FrequencyChart";       // Частотный
import { BPSKChart } from "../components/PhaseChart";   // Корректно импортируем график
const MainPage = () => {
    const [bits, setBits] = useState<number[]>([]);
    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Coder/>
            <DeCoder/>
            <BinaryCoder onCodeGenerated={(newBits) => setBits(newBits)} />
            <SineWaveChart binaryData={bits} />
            <BPSKChart binaryData={bits} />
            <FSKChart binaryData={bits} />
        </div>
    );
};

export default MainPage;
