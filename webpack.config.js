var webpack = require("webpack"),
  path = require("path");

module.exports = {
  entry: {
    "angular-ts.browser": "./src/module.ts"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: '[name].js',
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      test: /\.ts$/i
    })
  ]
}