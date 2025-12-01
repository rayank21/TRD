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
        <section className="bg-ink text-white py-0 overflow-hidden relative h-[800px] flex items-center justify-center border-t border-gray-800">

            {/* Background Map Image - Real Dijon Map */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/dijon-map.png')] bg-contain bg-no-repeat bg-center filter invert grayscale contrast-125 brightness-75 opacity-50"></div>
                <div className="absolute inset-0 bg-ink/20 mix-blend-multiply"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 w-full h-full flex flex-col justify-center pointer-events-none">

                {/* Header Overlay */}
                <div className="absolute top-12 left-4 md:left-8 z-20 pointer-events-auto">
                    <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-none mb-2 drop-shadow-lg">
                        Maillage<br />Métropolitain
                    </h2>
                    <div className="w-24 h-1 bg-accent mb-4"></div>
                    <p className="font-body text-gray-200 max-w-md text-sm drop-shadow-md">
                        Opérations centralisées sur le Grand Dijon.
                    </p>
                </div>

                {/* Interactive Map Area */}
                <div className="relative w-full h-full max-w-4xl mx-auto pointer-events-auto">

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
                                strokeWidth="1"
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
                            <div className="w-4 h-4 bg-accent rounded-full z-20 shadow-[0_0_15px_rgba(230,0,0,1)] border-2 border-white"></div>
                            <div className="absolute w-12 h-12 bg-accent/30 rounded-full animate-pulse"></div>
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
                            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border border-white shadow-lg ${activeNode === i ? 'bg-white scale-150' : 'bg-accent'}`}></div>

                            {/* Label */}
                            <div className={`absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${activeNode === i ? 'opacity-100 z-50' : 'opacity-80'}`}>
                                <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-white bg-black/90 px-2 py-1 rounded border border-gray-700 shadow-xl">
                                    {dest.city}
                                </span>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default NetworkMap;
