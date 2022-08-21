const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /src\/main\/resources\/META-INF\/resources\/lib\/.*\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /src\/main\/resources\/META-INF\/resources\/css\/.*\.(scss|sass)/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'window.com.whatever': {
        API_URL: JSON.stringify(
          process.env.API_URL || 'https://google.com'
        ),
      },
    }),
  ],
};
