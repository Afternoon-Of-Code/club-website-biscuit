/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,njk,md,js}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)", // #8F0F22 Red
        secondary: "var(--color-secondary)", // #236139 Green
        accent: "var(--color-accent)", // #DF993A Yellow/Orange
        background: "var(--color-background)", // #3A210F (default) / #FEEFC6 (light theme)
        text: "var(--color-text)", // #FEEFC6 (default) / #3A210F (light theme)
        // Dark theme colors (kept for specific use cases)
        "dark-background": "#FEEFC6", // Light beige
        "dark-text": "#3A210F", // Dark brown
        // Legacy color aliases for backward compatibility
        "sass-pink": "#8F0F22", // Same as primary (red)
        "sass-red": "#8F0F22", // Same as primary (red)
        "sass-green": "#236139", // Same as secondary (green)
        "sass-yellow": "#DF993A", // Same as accent (yellow/orange)
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "sans-serif",
        ],
      },
      animation: {
        "slide-down": "slideDown 0.5s ease",
        "fade-in": "fadeIn 1s ease",
        "slide-in-right": "slideInRight 1s ease",
      },
      keyframes: {
        slideDown: {
          from: {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInRight: {
          from: {
            opacity: "0",
            transform: "translateX(50px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
