// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],

//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', maxHeight: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', maxHeight: '500px', transform: 'translateY(0)' },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 5px #f97316, 0 0 10px #f97316, 0 0 20px #f97316',
          },
          '50%': {
            boxShadow: '0 0 10px #f97316, 0 0 20px #f97316, 0 0 30px #f97316',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        slideDown: 'slideDown 0.3s ease-out forwards',
        spinSlow: "spin 8s linear infinite",
        orbit: "orbit 5s linear infinite",
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
