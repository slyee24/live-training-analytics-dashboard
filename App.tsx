import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import KpiCard from './components/KpiCard';
import ParticipantsChart from './components/ParticipantsChart';
import ParticipantsTable from './components/ParticipantsTable';
import { UsersIcon, ClockIcon, LogoutIcon, ChartBarIcon, SparklesIcon } from './components/icons';
import { getDashboardData } from './services/dataService';
import { DashboardData } from './types';

const formatTime = (totalMinutes: number): string => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);
    return `${String(hours).padStart(2, '0')} hr ${String(minutes).padStart(2, '0')} min`;
};

// Filter constants
const SESSION_TOPICS = ['All', 'React Fundamentals', 'Advanced TypeScript', 'UI/UX Design Principles', 'State Management with Redux'];
const CURRENT_YEAR = new Date().getFullYear();
const YEARS = ['All', CURRENT_YEAR, CURRENT_YEAR - 1, CURRENT_YEAR - 2];
const MONTHS = [
    { value: 'All', name: 'All' },
    ...Array.from({ length: 12 }, (_, i) => ({
        value: i + 1,
        name: new Date(0, i).toLocaleString('en-US', { month: 'long' })
    }))
];

// Helper component for filter dropdowns
const FilterSelect = ({ label, name, value, onChange, options }: { label: string, name: string, value: string | number, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, options: (string | number | { value: string | number; label: string })[] }) => (
    <div className="flex flex-col">
        <label htmlFor={name} className="text-xs font-medium text-brand-text-secondary mb-1">{label}</label>
        <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="bg-brand-surface border border-brand-border text-brand-text-primary text-sm rounded-md focus:ring-brand-blue focus:border-brand-blue block w-full sm:w-auto p-2.5 shadow-sm"
        >
            {options.map((option, index) => {
                const optionValue = typeof option === 'object' ? option.value : option;
                const optionLabel = typeof option === 'object' ? option.label : option;
                return <option key={`${name}-${index}`} value={optionValue}>{optionLabel}</option>;
            })}
        </select>
    </div>
);

interface Filters {
    topic: string;
    month: string | number;
    year: string | number;
}

const App = () => {
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [filters, setFilters] = useState<Filters>({
        topic: 'All',
        month: 'All',
        year: 'All',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await getDashboardData(filters);
                setData(result);
            } catch (error) {
                console.error("Failed to fetch dashboard data:", error);
                setData(null); // Clear data on error to show error message
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [filters]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: (name === 'month' || name === 'year') && value !== 'All' ? parseInt(value, 10) : value
        }));
    };

    if (loading && !data) {
        return (
            <div className="flex items-center justify-center h-screen bg-brand-bg text-brand-text-primary">
                <div className="text-xl">Loading Dashboard...</div>
            </div>
        );
    }
    
    // This state will be hit if the initial fetch fails
    if (!data) {
        return (
             <div className="flex h-screen bg-brand-bg">
                <Sidebar />
                <main className="flex-1 flex flex-col">
                    <Header />
                    <div className="flex-1 p-6 flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold text-red-600">Failed to Load Data</h2>
                            <p className="text-brand-text-secondary mt-2">There was an error fetching the dashboard data. Please try again later.</p>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-brand-bg">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-y-auto">
                <Header />
                <div className="flex-1 p-6 space-y-6">
                    {/* Filter Controls */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center p-4 bg-brand-surface rounded-lg shadow-sm">
                        <h2 className="text-lg font-semibold text-brand-text-primary mr-2 whitespace-nowrap">Filter by:</h2>
                        <FilterSelect name="topic" label="Session Topic" value={filters.topic} onChange={handleFilterChange} options={SESSION_TOPICS} />
                        <FilterSelect name="month" label="Month" value={filters.month} onChange={handleFilterChange} options={MONTHS.map(m => ({ value: m.value, label: m.name }))} />
                        <FilterSelect name="year" label="Year" value={filters.year} onChange={handleFilterChange} options={YEARS} />
                    </div>

                    {/* Content Area */}
                    <div className="relative">
                        {loading && (
                             <div className="absolute inset-0 bg-brand-surface/70 backdrop-blur-sm flex items-center justify-center z-10 rounded-xl">
                                <div className="flex items-center gap-2 text-lg text-brand-text-primary">
                                     <svg className="animate-spin h-5 w-5 text-brand-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Updating Data...</span>
                                </div>
                            </div>
                        )}
                         <div className={`transition-opacity duration-300 ${loading ? 'opacity-30' : 'opacity-100'}`}>
                            {/* KPI Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                                <KpiCard
                                    title="Total Participants"
                                    value={String(data.totalParticipants)}
                                    icon={<UsersIcon className="h-8 w-8" />}
                                    description="Unique users who joined"
                                />
                                <KpiCard
                                    title="Session Length"
                                    value={formatTime(data.totalSessionLength)}
                                    icon={<ClockIcon className="h-8 w-8" />}
                                    description="Total duration of the session"
                                />
                                <KpiCard
                                    title="Drop-off Rate"
                                    value={`${data.dropOffRate}%`}
                                    icon={<LogoutIcon className="h-8 w-8" />}
                                    description="Left before 50% of session"
                                />
                                <KpiCard
                                    title="Avg. Time Spent"
                                    value={formatTime(data.avgTimeSpent)}
                                    icon={<ChartBarIcon className="h-8 w-8" />}
                                    description="Average time per participant"
                                />
                                <KpiCard
                                    title="Engagement Score"
                                    value={String(data.engagementScore)}
                                    icon={<SparklesIcon className="h-8 w-8" />}
                                    description="Talk, chat, and reactions"
                                />
                            </div>
                            
                            {/* Charts and Tables Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
                                <ParticipantsChart data={data.participantsOverTime} />
                                <ParticipantsTable data={data.participantsTimeSpent} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;