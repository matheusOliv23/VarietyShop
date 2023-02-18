/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "gray-50": "#fafafa",
                "gray-100": "#f1f1f1",
                "dark-50:": "#101010",
                "orange-50": '#fbaf85',
                "orange-100": "#D87D4A"
            }

        },
        fontFamily: {
            manrope: ['Manrope', 'sans-serif']
        }
    },
    plugins: [],
}