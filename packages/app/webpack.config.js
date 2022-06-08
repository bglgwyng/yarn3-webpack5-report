const { ProvidePlugin } = require('webpack');

module.exports = {
  plugins: [
    new ProvidePlugin({ process: 'process/browser' }),
  ],
};