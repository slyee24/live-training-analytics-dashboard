import React from 'react';
import { ParticipantTimeSpent } from '../types';

interface ParticipantsTableProps {
    data: ParticipantTimeSpent[];
}

const formatMinutes = (minutes: number): string => {
    return `${Math.floor(minutes)} min`;
}

const ParticipantsTable: React.FC<ParticipantsTableProps> = ({ data }) => {
    return (
        <div className="bg-brand-surface p-6 rounded-lg shadow-sm col-span-1 lg:col-span-2 border border-brand-border/50">
            <h3 className="text-lg font-semibold text-brand-text-primary mb-4">Time Spent by Participants</h3>
            <div className="overflow-y-auto" style={{maxHeight: '284px'}}>
                <table className="w-full text-left">
                    <thead className="sticky top-0 bg-brand-surface/95 backdrop-blur-sm">
                        <tr>
                            <th className="p-3 text-sm font-semibold text-brand-text-secondary tracking-wide border-b-2 border-brand-border">Participant</th>
                            <th className="p-3 text-sm font-semibold text-brand-text-secondary tracking-wide text-right border-b-2 border-brand-border">Time Spent</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border">
                        {data.map((participant) => (
                            <tr key={participant.id} className="hover:bg-brand-bg">
                                <td className="p-3 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <img className="w-10 h-10 rounded-full mr-4 object-cover" src={participant.avatar} alt={participant.name} />
                                        <div>
                                            <p className="font-medium text-brand-text-primary">{participant.name}</p>
                                            <p className="text-xs text-brand-text-secondary">{participant.id}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3 whitespace-nowrap text-right font-semibold text-brand-text-primary">
                                    {formatMinutes(participant.timeSpent)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ParticipantsTable;