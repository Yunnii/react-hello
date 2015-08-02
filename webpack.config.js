var ExtractTextPlugin = require('extract-text-webpack-plugin');
var I18nPlugin = require("i18n-webpack-plugin");

var config =  {
    name: 'ru',
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
    entry: ['./views/index/main.jsx'],
    resolve: {
        modulesDirectories: [
            '',
            'blocks',
            'node_modules'
        ],
        extensions: ['', '.js', '.jsx'],
        alias: {
        }
    },
    output: {
        filename: 'bundle.ru.js'
    },
    module: {
        preLoaders: [
            {
                test: /\/blocks\/.+index\.jsx$/,
                loader: 'baggage?index.css&script.js'
            }
        ],
        noParse: [],
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader')},
            {test: /\.js$/, loader: 'jsx-loader?harmony'},
            {test: /\.jpg$/, loader: "file-loader?name=[path][name].[ext]"},
            {test: /\.png$/, loader: "file-loader?name=[path][name].[ext]"},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot-loader', 'babel-loader'] }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new I18nPlugin(require("./i18n/ru.json"))
    ]
}

module.exports = config;