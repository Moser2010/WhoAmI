const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
    filename: "css/[name].css",
    disable: process.env.NODE_ENV === "development"
})

module.exports = (env) => {
    const isDevBuild = !(env && env.prod)
    const bundleOutputDir = isDevBuild ? './wwwroot' : './wwwroot/dist'

    return [{
        stats: { modules: false },
        entry: { 'main': './Client' },
        resolve: { extensions: ['.js'] },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: 'js/[name].js',
            publicPath: '/'
        },
        module: {
            rules: [
                { test: /\.scss$/, use: isDevBuild ? [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }] : extractSass.extract({ use: [{ loader: "css-loader" }, { loader: "sass-loader" }], fallback: "style-loader" }) },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: { loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'images/' } } },
                { test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, loader: 'url-loader', options: { limit: 10000, name: 'fonts/[name].[ext]' } }
            ]
        },
        plugins: [extractSass]
    }]
}