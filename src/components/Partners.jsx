import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    { name: "SOCIÉTÉ GÉNÉRALE", opacity: 0.6 },
    { name: "LCL", opacity: 0.8 },
    { name: "INTERMARCHÉ", opacity: 0.7 },
    { name: "CRÉDIT AGRICOLE", opacity: 0.6 },
    { name: "BANQUE POPULAIRE", opacity: 0.7 }
];

const Partners = () => {
    return (
        <section className="bg-paper py-16 border-b border-gray-300 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-8 text-center">
                    Ils nous font confiance
                </p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: partner.opacity }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 1 }}
                            className="font-display font-black text-2xl md:text-3xl text-ink uppercase tracking-tighter hover:text-accent transition-colors duration-300 cursor-default select-none"
                        >
                            {partner.name}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
