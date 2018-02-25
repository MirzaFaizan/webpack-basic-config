const path = require('path');
module.exports={
    mode:'development',
    entry: './src/file-one.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015']
            }
          },
          {
              test: /\.scss/,
              loader:'style-loader!css-loader!sass-loader'
          }
        ]
      }
};