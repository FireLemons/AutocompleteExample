const path = require("path");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "index.jsx")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  optimization: {
    minimize: false
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js',
  }
};
