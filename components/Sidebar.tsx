import React from 'react';
import { ParabyteLogo, DashboardIcon, LiveDashboardIcon, LiveSessionsIcon, LearningGroupIcon, CourseContentsIcon, SettingsIcon, UsersIcon as UserIcon, CourseGroupIcon } from './icons';

const NavLink = ({ icon, label, isActive, isDropdown = false }: { icon: React.ReactNode, label: string, isActive?: boolean, isDropdown?: boolean }) => (
    <a href="#" className={`flex items-center w-full text-left px-3 py-2.5 rounded-lg transition-colors duration-200 text-sm ${isActive ? 'bg-white text-brand-blue shadow-sm' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}>
        {icon}
        <span className="ml-3 font-medium flex-1">{label}</span>
        {isDropdown && (
             <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        )}
    </a>
);

const Sidebar = () => {
    return (
        <aside className="w-64 bg-brand-blue flex-shrink-0 flex flex-col justify-between p-4">
            <div>
                <div className="px-3 pt-2 pb-6">
                    <ParabyteLogo />
                </div>
                <nav className="flex flex-col space-y-1.5">
                    <NavLink icon={<DashboardIcon className="h-5 w-5" />} label="Dashboard" isActive />
                    <NavLink icon={<LiveDashboardIcon className="h-5 w-5" />} label="Live Dashboard" />
                    <NavLink icon={<UserIcon className="h-5 w-5" />} label="User" />
                    <NavLink icon={<LearningGroupIcon className="h-5 w-5" />} label="Learning Group" />
                    <NavLink icon={<CourseGroupIcon className="h-5 w-5" />} label="Course Group" />
                    <NavLink icon={<CourseContentsIcon className="h-5 w-5" />} label="Course Contents" isDropdown />
                    <NavLink icon={<LiveSessionsIcon className="h-5 w-5" />} label="Live Sessions" />
                    <NavLink icon={<SettingsIcon className="h-5 w-5" />} label="Setting" />
                </nav>
            </div>
            <div className="border-t border-white/20 pt-4 text-xs text-white/80">
                Logged in as:
                <p className="font-semibold text-white text-sm mt-0.5">Ninja Van</p>
            </div>
        </aside>
    );
};

export default Sidebar;