export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        "> 1%",
        "last 2 versions",
        "not dead",
        "iOS >= 10",
        "Safari >= 10",
        "Chrome >= 60",
        "Firefox >= 60",
        "Edge >= 79",
      ],
    },
  },
};
