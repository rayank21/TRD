import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.95 }}
                        className="fixed inset-0 m-auto max-w-lg h-fit bg-paper border border-gray-300 shadow-2xl z-50 p-8 md:p-12"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-accent transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="font-display font-black text-3xl uppercase mb-2">Demander un devis</h2>
                        <p className="font-body text-gray-600 mb-8 text-sm">
                            Réponse sous 30 minutes pour toute course urgente sur le secteur Dijonnais.
                        </p>

                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Demande envoyée au dispatch !'); onClose(); }}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="font-mono text-xs uppercase text-gray-500">Départ</label>
                                    <input type="text" placeholder="Ex: Dijon Centre" className="w-full bg-white border border-gray-300 p-3 font-mono text-sm focus:border-accent outline-none" />
                                </div>
                                <div className="space-y-1">
                                    <label className="font-mono text-xs uppercase text-gray-500">Arrivée</label>
                                    <input type="text" placeholder="Ex: Dole" className="w-full bg-white border border-gray-300 p-3 font-mono text-sm focus:border-accent outline-none" />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="font-mono text-xs uppercase text-gray-500">Type de marchandise</label>
                                <select className="w-full bg-white border border-gray-300 p-3 font-mono text-sm focus:border-accent outline-none">
                                    <option>Colis Standard</option>
                                    <option>Palette (80x120)</option>
                                    <option>Documents Confidentiels</option>
                                    <option>Hors Gabarit</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="font-mono text-xs uppercase text-gray-500">Email de contact</label>
                                <input type="email" placeholder="pro@entreprise.com" className="w-full bg-white border border-gray-300 p-3 font-mono text-sm focus:border-accent outline-none" />
                            </div>

                            <button type="submit" className="w-full bg-accent text-white font-bold uppercase py-4 hover:bg-ink transition-colors duration-300 mt-4">
                                Envoyer la demande
                            </button>
                        </form>

                        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                            <p className="font-mono text-xs text-gray-400">
                                DISPATCH: +33.3.80.00.00.00
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default QuoteModal;
