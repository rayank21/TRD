import React from 'react';
import { Truck, Package, Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        id: '01',
        title: 'Transport National',
        desc: 'Flotte dédiée pour liaisons inter-cités quotidiennes.',
        icon: Truck,
        image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: '02',
        title: 'Logistique Express',
        desc: 'Livraison J+1 garantie sur tout le territoire.',
        icon: Clock,
        image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: '03',
        title: 'Fret Volumineux',
        desc: 'Solutions adaptées pour charges lourdes et hors-gabarit.',
        icon: Package,
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80'
    }
];

const ServiceCards = () => {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4 md:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-black pb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                        className="font-display font-black text-5xl md:text-7xl uppercase leading-none"
                    >
                        Nos<br /><span className="text-accent">Services</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="font-mono text-right mt-4 md:mt-0"
                    >
                        <div className="text-sm text-gray-500">CAPACITÉ OPÉRATIONNELLE</div>
                        <div className="text-3xl font-bold">100%</div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-gray-200 border border-gray-200">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative bg-white h-96 flex flex-col justify-between cursor-pointer overflow-hidden"
                            onClick={() => alert(`Navigation vers: ${service.title}`)}
                        >

                            {/* Background Image - Always Visible */}
                            <div className="absolute inset-0 z-0 opacity-100 transition-all duration-500 ease-velocity">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover grayscale contrast-125 brightness-50 group-hover:brightness-75 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-ink/50 group-hover:bg-accent/20 mix-blend-multiply transition-colors duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between text-white transition-colors duration-300">
                                <div className="flex justify-between items-start">
                                    <div></div> {/* Spacer to keep Arrow on right */}
                                    <ArrowUpRight className="text-accent group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </div>

                                <div>
                                    <h3 className="font-display font-black text-2xl md:text-3xl uppercase mb-4 leading-tight text-white drop-shadow-lg">
                                        {service.title}
                                    </h3>
                                    <p className="font-body text-gray-300 group-hover:text-white max-w-xs transition-colors duration-300 drop-shadow-md">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Line Animation */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500 ease-velocity z-20"></div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServiceCards;
