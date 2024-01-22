/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-header-image-dark': "url('/src/assets/images/bg-mobile-dark.jpg')",
        'mobile-header-image-light': "url('/src/assets/images/bg-mobile-light.jpg')",
      },
      screens: {
        'sm': [
          {'min': '0px', 'max': '500px'}
        ],
        'lg': [
          {'min': '500px'}
        ]
      },
    },
  },
  plugins: [],
}

