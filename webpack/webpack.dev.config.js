// Requirements
var webpack = require('webpack');
var path = require('path');

// Define parent directory
var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(parentDir, 'index.js')
    ],
    module: {
        // Loaders and compiler rules
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          include: path.appSrc,
          loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      ]
  },
    // Output of the bundle.js
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    // Configuration of the development server
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}