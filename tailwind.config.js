module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        md: "0 0 .2rem .2rem #EEE",
        lg: "0 0 .4rem .4rem #BBB",
      },
      scale: {
        101: "1.01",
      },
      height: {
        "8vh": "80vh",
      },
    },
  },
  plugins: [],
};
