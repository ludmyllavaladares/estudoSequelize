const { Usuario, Post, Comentario, sequelize, Sequelize } = require('./models');
const { Op } = require('sequelize');


// Usuario.findAll()
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()));    
// });

// Post.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Comentario.findAll()
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()));
// });

// Post.findAll({
//     where: {
//     texto: {[Op.like]: '%oi%'}
//     }
// }).then((resultado) => {
// console.table(resultado.map(user => user.toJSON()));
//     });


// Usuario.findAll({
//     order: [
//             ['id', 'ASC']
//     ],
//     limit: 2,
//     offset: 2
// })
// .then((resultado) => {
//     console.log(resultado.map(usuario => usuario.toJSON()));
// })


// Usuario.findAll({
//     where: {
//         nome: {[Op.like]: '%a%'}
//     }
// }) .then((resultado) => {
// console.table(resultado.map(user => user.toJSON()));
//     });

// Usuario.findAll({
//     where: {
//         nome: {[Op.notLike]: '%a%'}
//     }
// }) .then((resultado) => {
// console.table(resultado.map(user => user.toJSON()));
//     });


// for (let i = 0; i < 6; i += 2) {
//     Comentario.findAll({
//     order: [['id', 'DESC']],
//     offset: i,
//     limit: 2,
//     }).then((resultado) => {
//     console.table(resultado.map(comment => comment.toJSON()));
//     });
// }

// Usuario.create({
//         nome: 'Natalia',
//         email: 'nat@digitalhouse.com',
//         senha: 'maravilhosaaaa123'
//     }).then((resultado) => {
//         console.log(resultado.toJSON());
//     });
    // Usuario.update({
    //     senha: 'novasenha123'
    // }, {
    //     where: {
    //         id: 3
    //     }
    // }).then((resultado) => {
    //     console.log(resultado);
    // })
    // Usuario.destroy({
    //     where: {
    //         id: 5
    //     }
    // }).then((resultado) => {
    //     console.log(resultado);
    // })
    // Usuario.bulkCreate([{
    //     nome: 'Moara',
    //     email: 'moara@digitalhouse.com',
    //     senha: 'maravilhosa1234'
    //     },
    //     {nome: 'Geisiane',
    //     email: 'geisi@digitalhouse.com',
    //     senha: 'maravilhosa12345'
    //     },
    //     {nome: 'Renata',
    //     email: 'renata@digitalhouse.com',
    //     senha: 'maravilhosa12345'
    //     },
    //     {nome: 'Lud',
    //     email: 'lud@digitalhouse.com',
    //     senha: 'maravilhosa12346'
    //     },
    //     {nome: 'Luiz',
    //     email: 'luiz@digitalhouse.com',
    //     senha: 'dev1234'
    //     },
    //     {nome: 'Miguel',
    //     email: 'miguel@digitalhouse.com',
    //     senha: 'dev12345'
    //     },
    //     {nome: 'Lenildo',
    //     email: 'lenildo@digitalhouse.com',
    //     senha: 'dev123456'
    //     }]);


    // Usuario.findAll().then((usuarios) => {
    //     console.log(usuarios.map((usuario) => usuario.toJSON()));
    // });

    // Post.create({
    //     texto: 'Meu primero post',
    //     img: 'imagem.jpg',
    //     usuarios_id: 10,
    //     n_likes: 15
    // }).then((resultado) => {
    //     console.log(resultado.toJSON());
    // });

    // Usuario.update({
    //     email:  'sergio@digitalhouse.com'
    // }, {
    //     where: {
    //         id: 2
    //     }  
    //         }).then((resultado) => {
    //     console.log(resultado);
    // })

    // Usuario.destroy({
    //     where: {
    //         id: 3
    //     }
    // }).then((resultado) => {
    //     console.log(resultado);
    // })

    // Usuario.findAll().then((resultado) => {
    // console.table(resultado.map(user => user.toJSON()));
    // });
    
// Usuario.findByPk(1, { 
//     include: [
//         {association: "posts"}
//     ]
// })
// .then((usuario) => {
//     console.table(usuario.posts.map((post) => post.toJSON()))
// })

//outro jeito

// Usuario.findByPk(1,{include:['posts']}).then(
//     usuario => {
//         console.log(usuario.toJSON());
//         Sequelize.close();
//     }
// )


// Post.findByPk(1, {
//     include: [ {association: 'comentarios'} ]
//     }).then((post) => {
//     console.table(post.comentarios.map((comentario) => comentario.toJSON()));
//     });

// Post.findByPk(1, {include:['comentarios']}).then(
//         post => {
//             console.log(post.toJSON());
//             sequelize.close();
//         }
//     )
    
    Post.findByPk(1, {include:["curtiu"]}).then(
        post => {
            console.log(post.toJSON());
            sequelize.close();
        }
    )
