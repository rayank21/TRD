import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-ink text-white pt-20 pb-10 border-t border-accent">
            <div className="container mx-auto px-4 md:px-8">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="font-display font-black text-3xl mb-6">TRD</div>
                        <p className="font-body text-gray-400 text-sm leading-relaxed mb-6">
                            Leader européen de la logistique de précision. Nous connectons les industries avec vélocité et fiabilité depuis 2009.
                        </p>
                        <div className="flex gap-4">
                            <Linkedin className="text-gray-400 hover:text-accent cursor-pointer transition-colors" size={20} />
                            <Twitter className="text-gray-400 hover:text-accent cursor-pointer transition-colors" size={20} />
                            <Facebook className="text-gray-400 hover:text-accent cursor-pointer transition-colors" size={20} />
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-mono text-accent text-xs uppercase tracking-widest mb-6">Services</h4>
                        <ul className="space-y-4 font-body text-sm text-gray-300">
                            <li className="hover:text-white cursor-pointer transition-colors">Transport National</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Logistique Express</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Fret Volumineux</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Douane & Conformité</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-mono text-accent text-xs uppercase tracking-widest mb-6">Entreprise</h4>
                        <ul className="space-y-4 font-body text-sm text-gray-300">
                            <li className="hover:text-white cursor-pointer transition-colors">À propos</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Carrières <span className="text-xs bg-accent px-1 ml-2 text-white">Hiring</span></li>
                            <li className="hover:text-white cursor-pointer transition-colors">Investisseurs</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Presse</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-mono text-accent text-xs uppercase tracking-widest mb-6">Newsletter</h4>
                        <div className="flex border-b border-gray-600 pb-2 mb-4 focus-within:border-white transition-colors">
                            <input
                                type="email"
                                placeholder="votre@email.com"
                                className="bg-transparent border-none outline-none text-white w-full placeholder-gray-600 font-mono text-sm"
                            />
                            <button className="text-accent hover:text-white transition-colors">
                                <ArrowRight size={16} />
                            </button>
                        </div>
                        <p className="text-xs text-gray-500">
                            Recevez nos actualités logistiques. Pas de spam.
                        </p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono">
                    <div>
                        © 2025 TRANSPORT RAPIDE DIJON.
                    </div>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <span className="hover:text-white cursor-pointer">PRIVACY POLICY</span>
                        <span className="hover:text-white cursor-pointer">TERMS OF SERVICE</span>
                        <span className="hover:text-white cursor-pointer">SITEMAP</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
