const Sequelize = require('sequelize');
var sequelize=require('./connection');

var author=sequelize.define('author',{
    author_id:{
      type: Sequelize.INTEGER,
      primaryKey:true
    },
    name:{
      type: Sequelize.TEXT,
      allowNull:true
    },
    country:{
      type: Sequelize.TEXT,
      allowNull: true
    }
  });

  var books=sequelize.define('book',{
    book_id:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    category:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull:false
    }
})


author.hasMany(books,{foreignKey: 'author_id'});
books.belongsTo(author,{foreignKey: 'author_id'});

author.sync({drop: false}).then(() => {
    
    console.log("Author table Synched!!!");
  });

books.sync({ drop: false}).then(() => {
    
    console.log("Book table Synched!!!");
  });


  module.exports={books:books,author:author};