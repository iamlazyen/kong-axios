const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  
  entry: {
    index: ['webpack-hot-middleware/client', path.join(__dirname, '../index.ts')]
  },
  
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader'
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      }
    ]
  },
  
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
