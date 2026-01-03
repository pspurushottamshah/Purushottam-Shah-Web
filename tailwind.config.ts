import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                charcoal: {
                    DEFAULT: '#121212',
                    50: '#f5f5f5',
                    100: '#e0e0e0',
                    200: '#c2c2c2',
                    300: '#a3a3a3',
                    400: '#858585',
                    500: '#666666',
                    600: '#4d4d4d',
                    700: '#333333',
                    800: '#1a1a1a',
                    900: '#121212',
                },
                electric: {
                    DEFAULT: '#007BFF',
                    50: '#e6f2ff',
                    100: '#b3d9ff',
                    200: '#80c0ff',
                    300: '#4da6ff',
                    400: '#1a8dff',
                    500: '#007BFF',
                    600: '#0062cc',
                    700: '#004a99',
                    800: '#003166',
                    900: '#001933',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'count-up': 'countUp 2s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                countUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
} satisfies Config;
