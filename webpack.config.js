const { resolve } = require("path");

module.exports = {
  context: resolve(__dirname, "client"),
  entry: ["./index.js"],
  output: {
    filename: "client.bundle.js",
    path: resolve(__dirname, "build"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
