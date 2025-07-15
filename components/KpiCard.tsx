import React from 'react';

interface KpiCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
    description: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, icon, description }) => {
    return (
        <div className="bg-brand-surface p-5 rounded-lg shadow-sm flex flex-col justify-between border border-brand-border/50 hover:shadow-md hover:border-brand-border transition-all duration-300">
            <div className="flex justify-between items-start">
                <h3 className="text-base font-semibold text-brand-text-secondary">{title}</h3>
                <div className="text-brand-blue">{icon}</div>
            </div>
            <div className="mt-4">
                <p className="text-4xl font-bold text-brand-text-primary">{value}</p>
                <p className="text-sm text-brand-text-secondary mt-1 truncate">{description}</p>
            </div>
        </div>
    );
};

export default KpiCard;