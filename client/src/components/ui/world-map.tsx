import React, { useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
    { markerOffset: -12, name: "Seattle, Washington", coordinates: [-122.3321, 47.6062] },
    { markerOffset: -12, name: "Ocala, Florida", coordinates: [-82.1401, 29.1872] },
    { markerOffset: -12, name: "Dover, Delaware", coordinates: [-75.5244, 39.1582] },
    { markerOffset: -12, name: "Dubai, UAE", coordinates: [55.2708, 25.2048] },
    { markerOffset: -12, name: "Nashik, India", coordinates: [73.7898, 19.9975] },
    { markerOffset: -12, name: "Ahmedabad, India", coordinates: [72.5714, 23.0225] },
];

export function WorldMap() {
    const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

    return (
        <div className="w-full bg-slate-50 py-12 md:py-16 px-6 md:px-12 rounded-3xl overflow-hidden relative border border-slate-200 shadow-xl mt-12">
            {/* Decorative background grid */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#3FB9CB 0.5px, transparent 0.5px)',
                    backgroundSize: '30px 30px'
                }}>
            </div>

            <div className="relative z-10 grid md:grid-cols-12 gap-10 items-center">
                {/* Left Side: Info (Col 5) */}
                <div className="md:col-span-5 text-left">
                    <p className="text-[#3FB9CB] text-xs font-bold uppercase tracking-[0.2em] mb-4">Global Network</p>
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                        Operating Across <br className="hidden md:block" /><span className="text-[#3FB9CB]">Borders.</span>
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-8">
                        Our global footprint ensures we provide seamless tax, compliance, and advisory services regardless of your location. We serve clients from key financial hubs with dedicated professional teams.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        {markers.map((loc) => (
                            <div
                                key={loc.name}
                                className={`flex items-center gap-2.5 p-3 bg-white rounded-xl shadow-sm border transition-all duration-300 ${hoveredMarker === loc.name ? 'border-[#3FB9CB] scale-105 shadow-md' : 'border-slate-100'}`}
                                onMouseEnter={() => setHoveredMarker(loc.name)}
                                onMouseLeave={() => setHoveredMarker(null)}
                            >
                                <div className="w-2 h-2 rounded-full bg-[#3FB9CB] shadow-[0_0_8px_rgba(63,185,203,0.3)]"></div>
                                <p className="text-slate-900 font-bold text-[10px] md:text-xs uppercase tracking-widest whitespace-nowrap">{loc.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Small Map (Col 7) */}
                <div className="md:col-span-7 relative h-[300px] md:h-[450px] w-full flex items-center justify-center">
                    <div className="w-full h-full transform scale-105 md:scale-125">
                        <ComposableMap
                            projectionConfig={{
                                scale: 170,
                                center: [0, 20]
                            }}
                            className="w-full h-full"
                        >

                            <Geographies geography={geoUrl}>
                                {({ geographies }: { geographies: any[] }) =>
                                    geographies.map((geo: any) => (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill="#E2E8F0"
                                            stroke="#CBD5E1"
                                            strokeWidth={0.5}
                                            style={{
                                                default: { outline: "none" },
                                                hover: { fill: "#CBD5E1", outline: "none" },
                                                pressed: { outline: "none" },
                                            }}
                                        />
                                    ))
                                }
                            </Geographies>

                            {markers.map(({ name, coordinates, markerOffset }) => (
                                <Marker
                                    key={name}
                                    coordinates={coordinates as [number, number]}
                                    onMouseEnter={() => setHoveredMarker(name)}
                                    onMouseLeave={() => setHoveredMarker(null)}
                                >
                                    {/* Pulsing ring */}
                                    <circle r={10} fill="#3FB9CB" opacity={0.3}>
                                        <animate
                                            attributeName="r"
                                            from="5"
                                            to="15"
                                            dur="2s"
                                            begin="0s"
                                            repeatCount="indefinite"
                                        />
                                        <animate
                                            attributeName="opacity"
                                            from="0.5"
                                            to="0"
                                            dur="2s"
                                            begin="0s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>

                                    {/* Inner solid dot */}
                                    <circle
                                        r={hoveredMarker === name ? 6 : 4}
                                        fill="#3FB9CB"
                                        stroke="#ffffff"
                                        strokeWidth={1.5}
                                        className="transition-all duration-300"
                                    />

                                    {/* Interactive Label */}
                                    <AnimatePresence>
                                        {hoveredMarker === name && (
                                            <motion.g
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 5 }}
                                            >
                                                <rect
                                                    x="-40"
                                                    y={markerOffset - 15}
                                                    width="80"
                                                    height="18"
                                                    rx="4"
                                                    fill="#0f172a"
                                                    opacity="0.9"
                                                />
                                                <text
                                                    textAnchor="middle"
                                                    y={markerOffset - 3}
                                                    style={{
                                                        fontFamily: "Outfit, sans-serif",
                                                        fill: "#fff",
                                                        fontSize: "9px",
                                                        fontWeight: "700",
                                                        pointerEvents: "none",
                                                    }}
                                                >
                                                    {name}
                                                </text>
                                            </motion.g>
                                        )}
                                    </AnimatePresence>
                                </Marker>
                            ))}

                        </ComposableMap>
                    </div>
                </div>
            </div>
        </div>
    );
}
