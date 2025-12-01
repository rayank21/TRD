import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TrackingWidget = () => {
    return (
        <div id="tracking-widget" className="bg-paper py-20 border-b border-gray-300">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 items-end lg:items-center justify-between">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >
                        <h3 className="font-display font-bold text-3xl mb-2 uppercase">Suivi en temps réel</h3>
                        <p className="font-body text-gray-600">Entrez votre numéro de référence pour localiser votre expédition.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full max-w-2xl"
                    >
                        <div className="relative group">
                            <div className="absolute -top-6 left-0 font-mono text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                // INPUT_STREAM_READY
                            </div>

                            <div className="flex bg-white border border-black p-1 focus-within:ring-2 focus-within:ring-accent transition-all duration-200">
                                <div className="flex items-center justify-center w-12 text-gray-400 bg-gray-100 border-r border-gray-200">
                                    <Search size={20} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="TRD-8842-X9"
                                    className="flex-1 bg-transparent border-none px-6 py-4 font-mono text-lg uppercase placeholder-gray-300 focus:outline-none text-ink w-full"
                                />
                                <button
                                    className="bg-ink text-white px-8 hover:bg-accent transition-colors duration-200 flex items-center gap-2 group/btn cursor-pointer"
                                    onClick={() => alert('Système de tracking connecté. Veuillez entrer un numéro valide.')}
                                >
                                    <span className="font-bold tracking-wider text-sm">TRACK</span>
                                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                                </button>
                            </div>

                            <div className="flex justify-between mt-2 font-mono text-[10px] text-gray-400 uppercase">
                                <span>Server Status: Online</span>
                                <span>Latency: 12ms</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default TrackingWidget;
