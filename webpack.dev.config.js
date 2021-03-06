const path = require('path')

module.exports = {
  entry: {
    'app': path.resolve(__dirname, 'src/entries/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: './dist/'
  },
  devServer: {
    port: 9000
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'],
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ico|jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100,
            fallback: 'file-loader'
            // --- name: 'img/[name].[hash].[ext]',
          }
        }
      }
    ]
  }
}
