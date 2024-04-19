import express from'express';
import bodyParser from "body-parser";
import axios from 'axios';



const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',async function  (req,res){
let result1 = null ;
let result2 = null;
 try{
    const response1 = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const response2 = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
     result1 = response1.data
     result2 = response2.data
    console.log(result1)

 }catch(error){
   console.log(error)
 }

    res.render('home.ejs',{data1:result1,data2:result2})
})



app.listen('3000',function(){
    console.log("running");
})