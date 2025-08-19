/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: "#646cff",
            },
            boxShadow: {
                lift: "0 10px 20px rgba(0,0,0,0.25)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
