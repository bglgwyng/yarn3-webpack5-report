const { ProvidePlugin } = require('webpack');

module.exports = {
  plugins: [
    // NOTE: if you remove this, then build will succeed, but process won't be resolved properly.
    new ProvidePlugin({ process: 'process/browser' }),
  ],
};