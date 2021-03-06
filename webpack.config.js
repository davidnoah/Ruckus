var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/ruckus.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  scripts: {
    start: "npm install",
    postinstall: "webpack --progress --color --config  public/webpack.config.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  }
};
