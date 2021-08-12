count express = require("express");
conts bodyparser = require ("body-parser");
const mongoose = require ("mongoose");
const app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyparser.urlencoded((extended: true)));
mongoose.connect("mongodb://localhost:27017/test1",
{useNewUrlParser:true,useUnifieldTopology: true});

const messageSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
});

const messageModel = mongoose.model("inbox",messageSchema);

app post("/submit",(req,res) =>{
    var message = new messageModel();
    message.name = req.body.name;
    message.password = req.body.password;
    message.email = req.body.email;
    message.save(function(err,doc){
        if(!err){
            console.log("data saved into database")
            res.redirect("/");
        } else {
            console.log(err)
        }
    })
})

app.get("/",(req,res) =>{
    res.render("index");
});

app.get("/contact",(req,res) =>{
    res.render("contact");
});

app.listen(3000, () => {
    console.log("server listening on 3000")
})

