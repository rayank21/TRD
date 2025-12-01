import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    {
        id: '01',
        value: '15',
        label: 'Années d\'Expérience',
        sub: 'Depuis 2009'
    },
    {
        id: '02',
        value: '45+',
        label: 'Véhicules',
        sub: 'Flotte Propriétaire'
    },
    {
        id: '03',
        value: '24/7',
        label: 'Disponibilité',
        sub: 'Support & Astreinte'
    },
    {
        id: '04',
        value: '98%',
        label: 'Satisfaction',
        sub: 'Clients B2B'
    }
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
                            <span className="font-body text-gray-600 text-[10px] mt-1">
                                {stat.sub}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
