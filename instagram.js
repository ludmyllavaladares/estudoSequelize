const { Usuario, Post, Comentario, sequelize } = require('./models');

// Usuario.findAll()
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()));    
// });

// Post.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

Comentario.findAll()
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
});