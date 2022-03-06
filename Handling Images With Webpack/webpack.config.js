const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath : 'auto'             // v5 onwards default auto
        /* publicPath : 'dist/' */      // v4 would need to specify the path     
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf)$/,
                type: 'asset/resource'
            }
        ]
    }
}