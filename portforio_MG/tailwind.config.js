/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                "slide-in-right":
                    "slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
            },
            keyframes: {
                "slide-in-right": {
                    "0%": {
                        transform: "translateX(100px)",
                        opacity: "0",
                    },
                    to: {
                        transform: "translateX(0)",
                        opacity: "1",
                    },
                },
            },
        },
        fontFamily: {
            NotoSans: ["Noto Sans JP", "sans-serif"],
        },
    },
    plugins: [],
};
