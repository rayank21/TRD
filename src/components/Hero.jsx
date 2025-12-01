import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onOpenQuote }) => {
    return (
        <section className="relative h-[90vh] w-full overflow-hidden bg-ink text-paper flex items-center">
            {/* Abstract Background - Simulating Road/Speed */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 brightness-50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-ink"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-8">
                <div className="max-w-5xl">
                    <div className="overflow-hidden mb-4">
                        <motion.h2
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                            className="font-mono text-accent text-sm md:text-base tracking-[0.2em]"
                        >
                            EST. 2009 — REFIT 2025
                        </motion.h2>
                    </div>

                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1, ease: [0.25, 1, 0.5, 1] }}
                        className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter uppercase mb-8 mix-blend-difference"
                    >
                        Nous prenons<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-paper to-gray-500">soin de vos</span><br />
                        <span className="text-accent">colis</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col md:flex-row gap-4 items-start md:items-center mt-12"
                    >
                        <button
                            className="btn-primary cursor-pointer"
                            onClick={onOpenQuote}
                        >
                            Demander un devis
                        </button>
                        <div className="font-mono text-xs text-gray-400 max-w-xs leading-relaxed border-l border-accent pl-4">
                            // VÉLOCITÉ CONTRÔLÉE
                            <br />
                            LOGISTIQUE DE PRÉCISION POUR L'INDUSTRIE EUROPÉENNE.
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-full h-1 bg-accent origin-left"
            ></motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 right-8 font-mono text-xs text-gray-500 rotate-90 origin-right"
            >
                SCROLL_DOWN [V]
            </motion.div>
        </section>
    );
};

export default Hero;
