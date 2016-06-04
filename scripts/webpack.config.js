const webpack = require('webpack');
const path = require('path');

var config = {
  cache: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSNON.stringify(process.env.NODE_ENV),

    }),

  ],
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.resolve('client'),
        loader: 'babel'
      }
    ]
  }
};

module.exports = Object.assign(config, {
  entry: [
    './client/Component'
  ],
  output: {
    path: path.resolve('./lib/'),
    publicPath: '/',
    chunkFilename: '[name].js',
    filename: '[name].js',
    sourceMapFilename: '[file].map'
  }
});
