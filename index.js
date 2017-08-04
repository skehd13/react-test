const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');
const Vision = require('vision');
const HapiWebpackPlugin = require('hapi-webpack-plugin');
const Webpack = require('webpack');
const Pug = require('pug');
const HapiSequelize = require('hapi-sequelize');
const Sequelize = require('sequelize');

function DB(sequelize, models) {
    this.sequelize = sequelize;
    this.models = models
}

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
    method:'get',
    path:'/insert',
    handler:function (request, reply) {
        const db1 = request.getDb('dongk_test1')
        // console.log(db1.sequelize)
        console.log(db1.models)
        const user = db1.getModel('Users')
        user.create({
            id:request.query.id,
            password:request.query.password,
            phone:request.query.phone,
            userName:request.query.userName
        }).then(function (result) {
            console.log('insert OK -' + result)
            user.findAll({
                where:{
                    id:request.query.id
                }
            }).then(function (results) {
                console.log(results)
                reply(results)
            }).catch(function (err) {
                console.log(err)
            })
        }).catch(function (err) {
            console.log(err)
        })
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
server.plugins['hapi-sequelize'] = new DB(sequelize, 'models/*.js');
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

