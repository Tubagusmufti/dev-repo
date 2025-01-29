/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
            './src/**\*.{html,js}',
        ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '16px',
      },
      colors: {
        con: '#fff3b0',
        bb: '#dce0d9',
        l: '#212121',
        ll: '#2a322e',
      },
      letterSpacing: {
        ngangkang: '.53m',
      },
    },
  },
  plugins: [],
}

