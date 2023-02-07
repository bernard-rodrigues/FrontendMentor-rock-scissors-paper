/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        scissorsGradientFrom: "hsl(39, 89%, 49%)",
        scissorsGradientTo: "hsl(40, 84%, 53%)",
        paperGradientFrom: "hsl(230, 89%, 62%)",
        paperGradientTo: "hsl(230, 89%, 65%)",
        rockGradientFrom: "hsl(349, 71%, 52%)",
        rockGradientTo: "hsl(349, 70%, 56%)",
        lizardGradientFrom: "hsl(261, 73%, 60%)", 
        lizardGradientTo: "hsl(261, 72%, 63%)",
        cyanFrom: "hsl(189, 59%, 53%)", 
        cyanTo: "hsl(189, 58%, 57%)",
        
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
        
        backgroundGradientFrom: "hsl(214, 47%, 23%)",
        backgroundGradientTo: "hsl(237, 49%, 15%)"
      },
      fontFamily: {
        barlow: "'Barlow Semi Condensed', sans-serif"
      },
      backgroundImage: {
        game: "radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))"
      },
      backgroundSize: {
        'mycenter': '60%'
      }
    },
  },
  plugins: [],
}
