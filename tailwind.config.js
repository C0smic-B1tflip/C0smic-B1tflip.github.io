module.exports = {
  darkMode: 'class', // This enables dark mode based on the "class" strategy
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554"
        }
      },
      fontFamily: {
        'body': [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ],
        'sans': [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ]
      },
      screens: {
        'xs': '475px', // Adding a custom breakpoint for extra small screens
        'sm': '640px', // Small screens (default)
        'md': '768px', // Medium screens (default)
        'lg': '1024px', // Large screens (default)
        'xl': '1280px', // Extra large screens (default)
        '2xl': '1536px', // Double extra large screens (default)
      },
      spacing: {
        '128': '32rem', // Adding extra large spacing for padding/margins
        '144': '36rem',
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)', // Custom shadow effect
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite', // Slow spin animation for certain elements
      },
    },
  },
  content: [
    "./index.html", // Path to the root HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Look at all JSX, TSX, and JS files in the src folder
    "./public/**/*.{html,js}", // Optionally include public directory files if needed
  ],
  plugins: [],
}
