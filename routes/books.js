const route=require("express").Router();
const model=require("../orm/model")

route.get("/books",function(request,response){
    model.books.findAll(
        {include:[model.author]}
      ).then(function(data){
          response.render("book",{books:data})
      }).catch(function(err){
          console.log(err)
          response.json([]);
      })
})
route.post("/books",function(request,response){
    var books={book_id:request.body.book_id,
              name:request.body.name,
              category:request.body.category,
              price:request.body.price
              
            }
              console.log(books);
        model.books.create(books,{include: [model.author]}).then(
            ()=>response.send("successfully uploaded")
        ).catch(
            ()=>response.sendStatus(500)
        );
    })

    module.exports = route;