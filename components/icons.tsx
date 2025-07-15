import React from 'react';

// New Icons for Light Theme UI

export const ParabyteLogo = () => (
    <div className="flex items-center gap-2">
        <div className="p-1 border-2 border-white/50 rounded-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 7L12 12L22 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 4.5L7 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <span className="text-white font-bold text-xl tracking-wide">PARABYTE</span>
    </div>
);


export const MenuIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

export const BellIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
);


// Sidebar Icons
export const DashboardIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1-1.5m1 1.5l1-1.5m0 0l.5 1.5m.5-1.5l1.5-2.25m1.5 2.25l1.5-2.25m0 0l.5 1.5m.5-1.5l1-1.5m-19.5 2.25v.75A2.25 2.25 0 003.75 21h16.5a2.25 2.25 0 002.25-2.25v-.75m0 0l-2.25-2.25M3.75 16.5l-2.25-2.25m16.5 0l2.25 2.25" />
    </svg>
);

export const LiveDashboardIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5l3.432 3.432a4.5 4.5 0 006.364 0l2.828-2.829a4.5 4.5 0 016.364 0l3.432 3.432m-1.88-1.88l-3.433 3.433a4.5 4.5 0 01-6.364 0l-2.828-2.829a4.5 4.5 0 00-6.364 0L3.75 9.25m12 6l-3.432-3.432a4.5 4.5 0 00-6.364 0l-2.828 2.829a4.5 4.5 0 01-6.364 0L3.75 14.75" />
    </svg>
);

export const LearningGroupIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.28a4.5 4.5 0 00-1.397 8.93a4.5 4.5 0 00-1.397-8.93C3.12 8.404 0 10.225 0 13.5c0 1.62.323 3.16.89 4.537m1.541 2.368a4.5 4.5 0 01-2.932 0m11.25-6.044a4.5 4.5 0 10-8.93 0 4.5 4.5 0 008.93 0zm-1.397-8.93a4.5 4.5 0 01-2.932 0m-2.932 0a4.5 4.5 0 012.932 0" />
    </svg>
);

export const CourseGroupIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375M9 12h6.375m-6.375 5.25h6.375M5.25 6.75h.008v.008H5.25V6.75zm.008 5.25h.008v.008H5.25v-.008zm0 5.25h.008v.008H5.25v-.008zM18.75 6.75h.008v.008h-.008V6.75zm.008 5.25h.008v.008h-.008v-.008zm0 5.25h.008v.008h-.008v-.008z" />
    </svg>
);

export const CourseContentsIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);

export const LiveSessionsIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
        <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

export const SettingsIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.036 1.182-1.151a6.002 6.002 0 015.034 1.151c.622.115 1.092.61 1.182 1.151C17.101 4.49 17.34 5.25 17.5 6c.16.75.074 1.503-.25 2.188a5.979 5.979 0 01-2.133 3.01c-.77.625-1.574 1.186-2.133 1.688a6.01 6.01 0 01-5.034-1.688 5.979 5.979 0 01-2.133-3.01c-.324-.685-.41-1.438-.25-2.188.16-.75.399-1.51.606-2.06zM12 15a3 3 0 110-6 3 3 0 010 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v5.25m0 0a2.25 2.25 0 002.25 2.25H15M12 20.25a2.25 2.25 0 01-2.25 2.25H9.75" />
    </svg>
);

// Icons for KPI Cards (retained from previous version but can be used with new theme)
export const UsersIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-2.42 8.25 8.25 0 00-4.47-2.663 8.25 8.25 0 00-1.923-.443M15 19.128v-2.187a6.375 6.375 0 00-6.375-6.375H3.75a6.375 6.375 0 00-6.375 6.375v2.187M15 19.128a9.37 9.37 0 01-9.375 0M9 3.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const ClockIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const LogoutIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
);

export const ChartBarIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);

export const SparklesIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.553L16.5 21.75l-.398-1.197a3.375 3.375 0 00-2.3-2.3L12.75 18l1.197-.398a3.375 3.375 0 002.3-2.3L16.5 14.25l.398 1.197a3.375 3.375 0 002.3 2.3l1.197.398-1.197.398a3.375 3.375 0 00-2.3 2.3z" />
    </svg>
);