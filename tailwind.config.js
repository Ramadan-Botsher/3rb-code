/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using a class
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Path to your components and pages
  ],
  theme: {
    extend: {
      colors: {
        // Define your color palette
        primary: {
          DEFAULT: '#1D4ED8', // Example primary color
          dark: '#1E3A8A', // Darker variant for dark mode
        },
        background: {
          light: '#FFFFFF',
          dark: '#1F2937',
        },
        text: {
          light: '#000000',
          dark: '#FFFFFF',
        },
      },
      fontFamily: {
        // Add custom fonts
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      transitionProperty: {
        // Define custom transition properties
        'width': 'width',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        // Define custom transition durations
        '400': '400ms',
      },
      animation: {
        // Define custom animations
        fade: 'fadeIn 0.5s ease-in-out',
        slide: 'slideIn 0.3s ease-in-out',
      },
      keyframes: {
        // Define keyframes for custom animations
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Optional: for adding typography styles
  ],
};