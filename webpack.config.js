const path = require('path');

/**
 * Path to js file that will server as the entry point for the application.
 */
const entry = path.resolve(__dirname, 'src', 'index.js');

/**
 * Output configuration for generated bundle file.
 */
const output = {
  path: path.resolve(__dirname, 'public'), // path where generated file will be saved.
  filename: 'bundle.js' // name of generated file.
};

/**
 * Loader for js files.
 */
const jsLoader = {
  test: /\.js$/, // defines that we want only js files.
  exclude: /node_modules/, // ignores third-party libraries.
  use: { loader: 'babel-loader' } // use babel to translate files.
};

/**
 * Dev server configuration for hot reload.
 */
const devServer = {
  contentBase: path.resolve(__dirname, 'public'), // path to where compiled files are.
};

module.exports = {
  entry,
  output,
  devServer,
  module: { rules: [ jsLoader ] }
};