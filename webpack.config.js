const path = require('path');
module.exports = {
    //this is where the project is from 
    context: __dirname,
    entry: './js/ClientApp.js',
    devtool: 'eval',
    //this is where we want the bundle js to go
    output:{
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },

    //everytime is looks for a file it will look for the js file fitrst and then the json file with the same name
    resolve: {
        extensions: ['.js', '.json']
    },

    stats: {
        color:true,
        reasons:true,
        chunks:true
    },
    module:{
        rules:[
            {
                //if it ends in js check it then send it to a loader
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
}

