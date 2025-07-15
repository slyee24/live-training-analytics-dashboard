import React from 'react';
import { MenuIcon, BellIcon } from './icons';

const Header = () => {
    return (
        <header className="bg-brand-surface p-4 border-b border-brand-border flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
                <button className="text-brand-text-secondary hover:text-brand-text-primary">
                    <MenuIcon className="h-6 w-6" />
                </button>
                <h1 className="text-xl font-semibold text-brand-text-primary">Dashboard</h1>
            </div>
            <div className="flex items-center gap-5">
                <button className="text-brand-text-secondary hover:text-brand-text-primary relative">
                    <BellIcon className="h-6 w-6" />
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                </button>
                <div className="flex items-center gap-3">
                    <img className="h-9 w-9 rounded-full" src="https://i.pravatar.cc/40?u=ninja-van" alt="User avatar" />
                    <div>
                        <p className="text-sm font-semibold text-brand-text-primary">Ninja Van</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;