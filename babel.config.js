/**
 * Presets are how bable knows how to take a piece of code and translate it
 * to javascript that is readable by a browser.
 */
const presets = [
  '@babel/preset-env', // understands ES6 syntax.
  '@babel/preset-react' // understands react native syntax.
];

/**
 * Plugins to extend babel functionality.
 */
const plugins = [
  '@babel/plugin-proposal-class-properties' // allows properties in classes.
];

module.exports = {
  presets, plugins
};