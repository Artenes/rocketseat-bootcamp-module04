const path = require('path');

/**
 * Path to js file that will server as the entry point for the application.
 */
const entry = path.resolve(__dirname, 'src', 'index.js');

/**
 * Output configuration for generated bundle file.
 */
const output = {
  path: path.resolve(__dirname, 'docs'), // path where generated file will be saved.
  filename: 'bundle.js' // name of generated file.
};

/**
 * Loader for js files.
 */
const jsLoader = {
  test: /\.js$/, // gets only .js files.
  exclude: /node_modules/, // ignores third-party libraries.
  use: { loader: 'babel-loader' } // use babel to translate files.
};

/**
 * Loader for css files.
 */
const cssLoader = {
  test: /\.css$/, // gets only .css files
  use: [ 
    {loader: 'style-loader'}, // puts css files in index.html.
    {loader: 'css-loader'} // allows imports inside css files and resolve references to urls.
   ]
};

/**
 * Loader for images.
 */
const imagesLoader = {
  test: /.*\.(gif|png|jpe?g)$/i, // gets only .gif,.png,.jpg,.jpeg files (case insensitive) .
  use: {loader: 'file-loader'}
}; 

/**
 * Dev server configuration for hot reload.
 */
const devServer = {
  contentBase: path.resolve(__dirname, 'docs'), // path to where compiled files are.
};

module.exports = {
  entry,
  output,
  devServer,
  module: { rules: [ jsLoader, cssLoader, imagesLoader ] }
};