import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine } from 'recharts';

interface SignalPoint {
    id: number;
    signal: number;
}

interface ChartProps {
    binaryData: number[];
}

const generateBPSKWave = (bits: number[]): SignalPoint[] => {
    const points: SignalPoint[] = [];
    const pointsPerBit = 30;
    let globalTime = 0;

    if (bits.length === 0) {
        for (let i = 0; i < 100; i++) points.push({ id: i, signal: 0 });
        return points;
    }

    bits.forEach((bit) => {
        // Фазовый сдвиг: инвертируем знак синуса в зависимости от бита
        const phaseSign = bit === 1 ? 1 : -1;

        for (let i = 0; i < pointsPerBit; i++) {
            const angle = (i / pointsPerBit) * Math.PI * 2;
            
            points.push({
                id: globalTime,
                signal: parseFloat((Math.sin(angle) * phaseSign).toFixed(3))
            });
            globalTime++;
        }
    });
    return points;
};

export const BPSKChart: React.FC<ChartProps> = ({ binaryData }) => {
    const chartData = generateBPSKWave(binaryData);

    return (
        <div style={{ width: '100%', height: 350, background: '#000', padding: '24px', }}>
            <h4 style={{ color: '#fff', }}>
                Фазовый график
            </h4>
            <ResponsiveContainer width="100%" height="85%">
                <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid stroke="#374151" strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="id" hide />
                    <YAxis domain={[-1, 1]} ticks={[0, 1]} stroke="#9CA3AF" />
                    <ReferenceLine y={0} stroke="#4B5563" strokeWidth={1.5} />
                    <Line
                        type="monotone"
                        dataKey="signal"
                        stroke="#EC4899" 
                        strokeWidth={2.5}
                        dot={false}
                        isAnimationActive={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
