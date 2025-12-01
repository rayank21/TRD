import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "SOCIÉTÉ GÉNÉRALE", style: "font-black tracking-tighter" },
  { name: "LCL", style: "font-black italic tracking-widest" },
  { name: "INTERMARCHÉ", style: "font-bold tracking-tight" },
  { name: "CRÉDIT AGRICOLE", style: "font-black tracking-normal" },
  { name: "BANQUE POPULAIRE", style: "font-bold tracking-wide" }
];

const Partners = () => {
  return (
    <section className="bg-paper py-16 border-b border-gray-300 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-12 text-center">
          Ils nous font confiance
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`text-3xl md:text-4xl text-ink ${partner.style} cursor-default select-none hover:text-accent transition-colors duration-300`}
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
