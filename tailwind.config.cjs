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
        game: "radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))"
      },
      backgroundSize: {
        'mycenter': '50%'
      },
      keyframes: {
        result: {
          "0%": {opacity: 0},
          "90%": {opacity: 0},
          "100%": {opacity: 1}
        },
        result4: {
          "0%": {opacity: 0},
          "90%": {opacity: 0},
          "100%": {opacity: 0.1}
        },
        moveFromRight: {
          "0%": {transform: "translateX(60%)"},
          "90%": {transform: "translateX(60%)"},
          "100%": {transform: "translateX(0%)"}
        },
        moveFromLeft: {
          "0%": {transform: "translateX(-60%)"},
          "90%": {transform: "translateX(-60%)"},
          "100%": {transform: "translateX(0%)"}
        }
      },
      animation: {
        result1: "result 1s linear forwards",
        result2: "result 2s linear forwards",
        result3: "result 3s linear forwards",
        result4: "result4 3s linear forwards",
        moveFromRight: "moveFromRight 3s ease-out forwards",
        moveFromLeft: "moveFromLeft 3s ease-out forwards"
      },
      screens:{
        hd: '1800px'
      }
    },
  },
  plugins: [],
}
