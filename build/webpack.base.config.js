const path = require('path');

const config = {
  entry: {
    app: path.resolve(__dirname, '../src/client-entry.js')
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    // output file generated on /dist/assets/app.js
    filename: 'assets/js/[name].js'
  }
};

module.exports = config;
