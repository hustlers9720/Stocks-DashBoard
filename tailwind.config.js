export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        6: "repeat(6, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
