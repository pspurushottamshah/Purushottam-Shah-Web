'use client';

import { motion } from 'framer-motion';

export default function Logo() {
    return (
        <a href="#" className="relative group block">
            <div className="flex items-center gap-3">
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
