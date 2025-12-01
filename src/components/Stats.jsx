import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Années d'expérience", value: "15" },
    { label: "Véhicules en flotte", value: "500+" },
    { label: "Colis livrés / an", value: "10M+" },
    { label: "Pays desservis", value: "28" },
];

const Stats = () => {
    return (
        <section className="bg-ink text-white py-20 border-t border-gray-800">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="flex flex-col items-center md:items-start border-l-2 border-accent pl-6"
                        >
                            <span className="font-display font-black text-4xl md:text-6xl text-white mb-2">
                                {stat.value}
                            </span>
                            <span className="font-mono text-gray-400 text-xs uppercase tracking-widest">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
