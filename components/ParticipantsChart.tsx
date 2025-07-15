import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ParticipantsOverTimeData } from '../types';

interface ParticipantsChartProps {
    data: ParticipantsOverTimeData[];
}

const ParticipantsChart: React.FC<ParticipantsChartProps> = ({ data }) => {
    return (
        <div className="bg-brand-surface p-6 rounded-lg shadow-sm col-span-1 lg:col-span-3 border border-brand-border/50">
            <h3 className="text-lg font-semibold text-brand-text-primary mb-4">Participants Over Time</h3>
             <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <LineChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 20,
                            left: -10,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="time" stroke="#6C757D" fontSize={12} />
                        <YAxis stroke="#6C757D" fontSize={12} allowDecimals={false}/>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #DEE2E6',
                                color: '#212529',
                                borderRadius: '0.5rem',
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                            }}
                            labelStyle={{ color: '#6C757D', fontWeight: 'bold' }}
                        />
                        <Legend wrapperStyle={{ color: '#212529', fontSize: '14px', paddingTop: '10px' }} />
                        <Line type="monotone" dataKey="participants" name="Unique Users" stroke="#0D6EFD" strokeWidth={2.5} activeDot={{ r: 8 }} dot={{r: 4}} />
                    </LineChart>
                </ResponsiveContainer>
             </div>
        </div>
    );
};

export default ParticipantsChart;