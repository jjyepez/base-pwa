const path               = require('path')
const ExtractTextPlugin  = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = (env) => {
  const plugins = [
    new ExtractTextPlugin("css/[name].css")
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname})
    )
  }

  return {
    entry: {
      'app': path.resolve(__dirname, 'src/entries/app.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: path.relative(__dirname, 'dist')+"/",
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    devServer: {
      port: 9000,
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
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                }
              }
            ]
          })
        },
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            use: ["css-loader","less-loader"]
          })
        },
        {
          test: /\.(ico|jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100,
              fallback: 'file-loader',
              name: 'images/[name].[ext]',
            }
          }
        },
      ]
    },
    plugins
  }
}
