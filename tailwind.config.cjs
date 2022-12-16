/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'cbf-bg-dark': 'linear-gradient(to bottom, transparent 0%, rgb(15 23 42) 80%), url(https://conteudo.imguol.com.br/c/esporte/bf/2022/03/24/vini-jr-e-neymar-comemoram-gol-marcado-pela-selecao-brasileira-contra-o-chile-1648169574338_v2_4x3.jpg)',
        'blur-gradient': 'linear-gradient( -45deg, #bd34fe 50%, #47caff 50% )',
        'background-gradient': 'linear-gradient(67.4deg, #EADAA2 0%, #0F172A 99.61%);',
        'background-button': 'linear-gradient(-10deg,#c0884c 10%,#edbb5c);',
        'background-cards': 'linear-gradient(0deg,#c6b7a0,#cfc6bf 100%);'
      },
      backgroundColor: {
        'background-after': 'linear-gradient(transparent 10%,transparent 30%,#e4e0da,#e4e0da);'
      }
    },
  },
  plugins: [],
}