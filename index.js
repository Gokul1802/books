const express=require("express")
const app  = express()
const path =require("path")
const author=require("./routes/route")
const books=require("./routes/books")
const routeapi = require("./routes/routeapi")
const bookapi = require("./routes/bookapi")
const cors=require("cors")

app.use(cors())

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static(path.join(__dirname,"public/styles")))
app.use(express.static(path.join(__dirname,"public/scripts")))
app.use(express.static(path.join(__dirname,"public/pages")))

app.set('views', path.join(__dirname, 'public/views'));//setting the path of template files
app.set('view engine', 'pug'); //configuring view Engine

app.use("/book",author)
app.use("/data",books)
app.use("/bookapi",bookapi)
app.use("/routeapi",routeapi)

app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,"public/home.html"))
})


app.listen(8000,function(){
    console.log("server started on port number 8000")
})