module.exports = {
    entry: ['./app/main.js'],
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.js$/, loader: 'jsx-loader' },
            { test: /\.jsx$/, loader: 'jsx-loader' }
        ]
    }
};