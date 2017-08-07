//입력(insert)
exports.insert = function (request, reply) {
    const user = request.getDb('dongk_test1').getModel('Users')
    console.log(request.payload)
    user.findAll({
        where:{
            id:request.payload.id
        }
    }).then(function (result) {
        if (result.length > 0){
            // reply('exists id')
        }else {
            user.create({
                id:request.payload.id,
                password:request.payload.password,
                phone:request.payload.phone,
                userName:request.payload.userName
            }).then(function (result) {
                if (result.dataValues.id.length > 0){
                    reply('user insert OK')
                }else {
                    reply('user insert fail')
                }
            }).catch(function (err) {
                reply(err)
            })
        }
    }).catch(function (err) {
        reply(err)
    })
}
/* 검색(select)
 * selectAll 전체검색
 * selectOne id를 검색
 */
exports.selectAll = function (request, reply) {
    const user = request.getDb('dongk_test1').getModel('Users')
    user.findAll().then(function (result) {
        reply(result)
    }).catch(function (err) {
        reply(err)
    })
}

exports.selectOne = function (request, reply) {
    const user = request.getDb('dongk_test1').getModel('Users')
    user.find({
        where:{
            id:request.query.id,
            password:request.query.password
        }
    }).then(function (result) {
        reply(result)
    }).catch(function (err) {
        reply(err)
    })

}
//삭제(delete)
exports.delete = function (request, reply) {
    const user = request.getDb('dongk_test1').getModel('Users')
    user.findAll({
        where:{
            id:request.payload.id
        }
    }).then(function (result) {
        if(result.length > 0){
            user.destroy({
                where:{
                    id:request.payload.id
                }
            }).then(function (result) {
                if (result > 0){
                    reply('delete OK')
                }else {
                    reply('delete fail')
                }
            }).catch(function (err) {
                reply(err)
            })
        }else {
            reply('no search id')
        }
    }).catch(function (err) {
        reply(err)
    })
}
//갱신(update)
exports.update = function (request, reply) {
    const user = request.getDb('dongk_test1').getModel('Users')
    user.update({
        phone:request.payload.phone,
        password:request.payload.password,
        userName:request.payload.userName
    }, {
        where:{ id: request.payload.id}
    }).then(function (result) {
        reply("update ", result.dataValues)
    }).catch(function (err) {
        reply(err)
    })
}
