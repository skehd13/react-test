const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');
const Vision = require('vision');
const HapiWebpackPlugin = require('hapi-webpack-plugin');
const Webpack = require('webpack');
const Pug = require('pug');

const compiler = new Webpack({
    entry:'./src/index.js',
    output: {
        path: __dirname + '//public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
});

const server = new Hapi.Server({
    connections:{
        routes:{
            files: {
                relativeTo:Path.join(__dirname,'public')
            }
        }
    }
});

server.connection({
    host:'localhost',
    port:1337
})

server.register(Inert, () => {});
server.register(Vision, ()=>{});
server.register({
    register:HapiWebpackPlugin,
    options:{
        compiler:compiler
    }
});

server.views({
    engines:{
        pug:Pug
    },
    path:__dirname+'/src',
    compileOptions:{
        pretty:true
    }
})

server.route({
    method:'get',
    path:'/',
    handler:function (request, reply) {
        reply.view('pug/index.pug');
    }
})
server.route({
    method:'get',
    path:'/{param*}',
    handler:{
        directory:{
            path:'./'
        }
    }
})

server.start(function (err) {
    console.log("server running" + server.info.uri)
})

