const path = require("path");
const isDev = process.env.NODE_ENV === "development";
const outputPath = isDev? path.resolve(__dirname, "./dist"):path.resolve(__dirname, "../dist");
module.exports = {
  mode: isDev ? "development" : "production",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  devtool: isDev ? "source-map" : "none",
  entry: "./src/index.js",
  stats:"none",
  target: "node",
  output: {
    filename: "index.js",
    path: outputPath,
    publicPath: "/",
  },
};
