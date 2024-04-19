import express from'express'
import bodyParser from "body-parser";



const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',function(req,res){
    res.render('home.ejs')
})



app.listen('3000',function(){
    console.log("running");
})