module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define(
        "Post", {
        texto: DataTypes.STRING,
        img: DataTypes.STRING,
        usuarios_id: DataTypes.INTEGER,
        n_likes: DataTypes.INTEGER
        }, {
            tableName: "posts",
            timestamps: false
        } 
    );

    // Post.associate = (models) => {
    //     // relação N:1 (vários posts de 1 usuario)
    //     Post.belongsTo(models.Usuario, { as: "usuario", foreignKey: "usuarios_id" });
    // }

    // return Post;

    Post.associate = (models) => {
        // relação 1:N (vários posts de 1 usuario)
        Post.hasMany(models.Comentario, { as: "comentarios", foreignKey: "posts_id" });
    }

    return Post;

}