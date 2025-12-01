import React from 'react';
import { Menu, Phone, Mail } from 'lucide-react';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-gray-300">
            <div className="max-w-[1920px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src="/logo.png" alt="TRD Logo" className="h-12 w-auto object-contain mix-blend-multiply" />
                    <div className="hidden md:block">
                        <h1 className="font-display font-bold text-lg leading-none tracking-tight">TRANSPORT RAPIDE</h1>
                        <span className="font-mono text-xs text-gray-500 tracking-widest">DIJON LOGISTICS HUB</span>
                    </div>
                </div>

                {/* Navigation / Info */}
                <div className="flex items-center gap-8">
                    <div className="hidden lg:flex items-center gap-6 font-mono text-sm">
                        <div className="flex items-center gap-2">
                            <Phone size={14} className="text-accent" />
                            <span>+33.3.80.00.00.00</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={14} className="text-accent" />
                            <span>trd.21@hotmail.com</span>
                        </div>
                    </div>

                    <button
                        className="bg-ink text-white p-3 hover:bg-accent transition-colors duration-200 cursor-pointer"
                        onClick={() => alert('Menu functionality coming soon')}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
