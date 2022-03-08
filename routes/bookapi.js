const route=require("express").Router();
const model=require("../orm/model")

route.get("/books",function(request,response){
    model.books.findAll(
        {include:[model.author]}
      ).then(function(data){
          response.json(data)
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
    route.delete("/delete1",function(request,response){
        model.books.destroy(
            {where:[model.author]}
            ).then(function(data){
                response.json(data)
            }).catch(function(err){
                console.log(err)
                response.json([]);
            })}) 
    
    route.delete("/delete1/:book_id",function(request,response){
        model.books.destroy(
            {
                where: {
                    book_id: request.params.book_id
                        }
            }).then(function(data){
                        response.json(data)
                    }).catch(function(err){
                        console.log(err)
                        response.json([]);
                    })}) 
    
    route.put("/update1/:book_id/:name/:category/:price",function(request,response){
        
            model.books.update(
                {
                name: request.params.name,
                category: request.params.category,
                price: request.params.price}, {
                where: {
                    book_id: request.params.book_id
                }
            }).then(function(data){
            response.json(data)
            }).catch(function(err){
            console.log(err)
            response.json([]);
        })
    })

    module.exports = route;