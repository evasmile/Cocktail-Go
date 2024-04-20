import express from'express';
import bodyParser from "body-parser";
import axios from 'axios';



const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',async function  (req,res){
let result1 = null ;

 try{
    const response1 = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');

     result1 = response1.data
    


 }catch(error){
   console.log(error)
 }
  
    res.render('home.ejs',{data1:result1})
})

app.post('/', async function(req,res){
  let result1=null;
  try{
    console.log(req.body)
    const response1 = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${req.body.letter}`);

    result1 = response1.data;
   

  }catch(error){
    console.log(error)
  }
  res.render('home.ejs',{data1:result1})
})


app.listen('3000',function(){
    console.log("running");
})