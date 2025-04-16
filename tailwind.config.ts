import typography from '@tailwindcss/typography'

module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
      {
        pattern: /hljs-.*/, // <-- ensure hljs-* classes are kept!
      },
    ],
    theme: {
      extend: {},
    },
    plugins: [typography],
  };
  