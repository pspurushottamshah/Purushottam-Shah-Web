'use client';

import { motion } from 'framer-motion';

export default function Logo() {
    return (
        <a href="#" className="relative group block">
            {/* Hover Reveal Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ opacity: 1, scale: 1.5, x: 20, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-4 -left-4 w-24 h-24 rounded-full overflow-hidden border-2 border-electric shadow-lg z-20 pointer-events-none opacity-0 group-hover:opacity-100 hidden md:block"
            >
                <img
                    src="/profile-ps.png"
                    alt="Purushottam Shah"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Masked Text Effect */}
            <div className="text-2xl font-bold relative z-10">
                <span className="bg-clip-text text-transparent bg-[url('/profile-ps.png')] bg-cover bg-center group-hover:bg-none group-hover:text-electric transition-all duration-300">
                    PS
                </span>
                {/* Fallback for when background clip isn't supported or image not loaded properly */}
                <span className="absolute inset-0 text-electric opacity-0 -z-10 select-none">PS</span>
            </div>

            {/* Clean fallback if the image mask is too subtle: just use gradient text but distinct */}
            <style jsx>{`
                span {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
                }
            `}</style>
        </a>
    );
}
