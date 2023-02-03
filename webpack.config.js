// in your webpack config
const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  optimization: {
    minimize: process.env.NODE_ENV === "production",
    splitChunks: {
      chunks: "all",
    },
  },
};
