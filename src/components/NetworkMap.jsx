import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NetworkMap = () => {
    // Coordinates calibrated to the provided Dijon map image
    const hub = { x: 48, y: 48 }; // Dijon Center

    const destinations = [
        { x: 41, y: 28, city: "Fontaine-lès-Dijon", status: "ACTIF" },
        { x: 65, y: 34, city: "Saint-Apollinaire", status: "ACTIF" },
        { x: 32, y: 60, city: "Chenôve", status: "ACTIF" },
        { x: 70, y: 45, city: "Quetigny", status: "ACTIF" },
        { x: 28, y: 65, city: "Marsannay", status: "ACTIF" },
        { x: 50, y: 60, city: "Longvic", status: "ACTIF" },
        { x: 50, y: 28, city: "Toison d'Or", status: "ACTIF" },
        { x: 79, y: 53, city: "Chevigny", status: "ACTIF" }
    ];

    const [activeNode, setActiveNode] = useState(null);

    return (
        <section className="bg-ink text-white py-12 md:py-24 overflow-hidden relative border-t border-gray-800">

            <div className="container mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="mb-12 relative z-20">
                    <h2 className="font-display font-black text-3xl md:text-5xl uppercase leading-none mb-2 drop-shadow-lg">
                        Maillage<br />Métropolitain
                    </h2>
                    <div className="w-24 h-1 bg-accent mb-4"></div>
                    <p className="font-body text-gray-200 max-w-md text-sm drop-shadow-md">
                        Opérations centralisées sur le Grand Dijon.
                    </p>
                </div>

                {/* Map Container - Responsive Aspect Ratio */}
                <div className="relative w-full max-w-5xl mx-auto">

                    {/* The Map Image - Defines the container size */}
                    <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                        <img
                            src="/dijon-map.png"
                            alt="Carte du réseau TRD Dijon"
                            className="w-full h-auto block filter invert grayscale contrast-125 brightness-75 opacity-50"
                        />
                        <div className="absolute inset-0 bg-ink/20 mix-blend-multiply"></div>

                        {/* Overlay Container for Markers - Matches Image Size Exactly */}
                        <div className="absolute inset-0 w-full h-full">

                            {/* SVG Layer for Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                                {destinations.map((dest, i) => (
                                    <motion.line
                                        key={i}
                                        x1={`${hub.x}%`}
                                        y1={`${hub.y}%`}
                                        x2={`${dest.x}%`}
                                        y2={`${dest.y}%`}
                                        stroke="#E60000"
                                        strokeWidth="1" // Thinner on mobile? No, 1 is fine.
                                        strokeOpacity="0.8"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                    />
                                ))}
                            </svg>

                            {/* Hub Marker - Dijon */}
                            <div
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
                                style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
                            >
                                <div className="relative flex items-center justify-center">
                                    <div className="w-3 h-3 md:w-4 md:h-4 bg-accent rounded-full z-20 shadow-[0_0_15px_rgba(230,0,0,1)] border-2 border-white"></div>
                                    <div className="absolute w-8 h-8 md:w-12 md:h-12 bg-accent/30 rounded-full animate-pulse"></div>
                                </div>
                            </div>

                            {/* Destination Markers */}
                            {destinations.map((dest, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
                                    style={{ left: `${dest.x}%`, top: `${dest.y}%` }}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    onMouseEnter={() => setActiveNode(i)}
                                    onMouseLeave={() => setActiveNode(null)}
                                >
                                    <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 border border-white shadow-lg ${activeNode === i ? 'bg-white scale-150' : 'bg-accent'}`}></div>

                                    {/* Label - Hidden on very small screens unless active? Or just smaller. */}
                                    <div className={`absolute top-3 md:top-4 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${activeNode === i ? 'opacity-100 z-50' : 'opacity-80'}`}>
                                        <span className="font-mono text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-white bg-black/90 px-1.5 py-0.5 md:px-2 md:py-1 rounded border border-gray-700 shadow-xl">
                                            {dest.city}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SEO Content - Visible but discreet */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-800 pt-8">
                    <div>
                        <h3 className="font-mono text-accent text-xs mb-4 uppercase tracking-widest">Zone d'Intervention</h3>
                        <p className="font-body text-gray-400 text-sm leading-relaxed">
                            TRD assure une couverture totale du <strong>Grand Dijon</strong> et de la région Bourgogne-Franche-Comté.
                            Nos navettes quotidiennes desservent les zones logistiques clés :
                            <span className="text-gray-300"> ZI Longvic</span>,
                            <span className="text-gray-300"> Cap Nord</span>,
                            <span className="text-gray-300"> Chevigny-Saint-Sauveur</span> et
                            <span className="text-gray-300"> Beaune</span>.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-mono text-accent text-xs mb-4 uppercase tracking-widest">Services Express</h3>
                        <p className="font-body text-gray-400 text-sm leading-relaxed">
                            Spécialiste du <strong>transport urgent</strong> et de la messagerie palette.
                            Départ immédiat pour vos courses critiques depuis Dijon vers toute la France.
                            Solutions dédiées pour l'industrie, le médical et l'événementiel.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default NetworkMap;
