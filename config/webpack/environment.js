const { environment } = require('@rails/webpacker')

const lessLoader = {
  test: /\.less$/,
  use: [
    {
      loader: "style-loader"
    }, {
        loader: "css-loader"
    }, {
        loader: "less-loader",
        options: {
            javascriptEnabled: true
        }
    }
  ]
}

// Insert json loader at the end of list
environment.loaders.append('less', lessLoader)

module.exports = environment
