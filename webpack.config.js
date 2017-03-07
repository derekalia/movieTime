const path = require('path')
module.exports = {
  // this is where the project is from
  context: __dirname,
  entry: './js/ClientApp.js',
  devtool: 'eval',
  // this is where we want the bundle js to go
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  devServer: {
    //this is setting up the static dir
    publicPath: '/public/'
  },

  // everytime is looks for a file it will look for the js file fitrst and then the json file with the same name
  resolve: {
    extensions: ['.js', '.json']
  },

  stats: {
    color: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        // exclude: /node_modules/, instead of doing it like this you should build it so that it is just set to a file
        include: path.resolve(__dirname, 'js'),

        // if it ends in js check it then send it to a loader
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        // if it passes the test do this array
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            // this is load the styles into the bundle.js file
            options: {
              // dont inline my images
              url: false
            }
          }
        ]
      }
    ]
  }
}
