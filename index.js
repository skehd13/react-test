const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');
const Vision = require('vision');
const HapiWebpackPlugin = require('hapi-webpack-plugin');
const Webpack = require('webpack');
const Pug = require('pug');
const HapiSequelize = require('hapi-sequelize');
const Sequelize = require('sequelize');
const UserDB = require('./src/DB/UserDB')

const compiler = new Webpack({
    entry:'./src/index.js',
    output: {
        path: __dirname + '/public/',
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

server.start(function (err) {
    console.log("server running" + server.info.uri)
})

const sequelize = new Sequelize('dongk_test1','root','dk1994',{
    host:'127.0.0.1',
    port:3306,
    dialect:'mysql'
})

server.register([
    {
    register: HapiSequelize,
    options: [
        {
        name:'dongk_test1',
        models:['./src/models/*.js'],
        sequelize:sequelize,
        sync:true,
        debug:true
        }
    ]
}]);

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

server.route({
    method:'post',
    path:'/user',
    handler: UserDB.insert
})

server.route({
    method:'get',
    path:'/users',
    handler:UserDB.selectAll
})

server.route({
    method:'delete',
    path:'/user',
    handler:UserDB.delete
})

server.route({
    method:'put',
    path:'/user',
    handler:UserDB.update
})

server.route({
    method:'get',
    path:'/user',
    handler:UserDB.selectOne
})
