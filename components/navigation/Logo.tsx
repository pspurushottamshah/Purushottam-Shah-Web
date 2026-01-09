'use client';

import { motion } from 'framer-motion';

export default function Logo() {
    return (
        <a href="#" className="relative group block">
            <div className="flex items-center gap-3">
                {/* Profile Image with Ring - Always visible */}
                <motion.div
                    className="relative w-10 h-10 md:w-12 md:h-12"
                    whileHover={{ scale: 1.1 }}
                >
                    <div className="absolute inset-0 rounded-full border-2 border-electric animate-pulse-slow"></div>
                    <img
                        src="/profile-ps.png"
                        alt="PS"
                        className="w-full h-full rounded-full object-cover border-2 border-charcoal-900"
                    />
                </motion.div>

                {/* Text Logo - High Contrast */}
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white tracking-tight leading-none group-hover:text-electric transition-colors">
                        PS
                    </span>
                </div>
            </div>
        </a>
    );
}
