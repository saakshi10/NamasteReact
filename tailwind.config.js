/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // we mention what files will be using the tailwind classes
        // "./src/**/*.{html,js,ts,jsx,tsx}"
        // below means all html and js files which are under src folder should be picked for tailwind
        "./src/**/*.{html,js}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
