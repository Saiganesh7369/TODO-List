const express=require('express');
const Bodyparser = require("body-parser");
const bodyParser = require('body-parser');

const app=express();

const items=[];
const workItems=[];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

app.get("/",function(req,res){

const today = new Date();

const options = {
    weekday :"long",
    day :"numeric",
    month:"long"
};

const day = today.toLocaleDateString("en-us",options);


// switch (currentDay) {
//     case 0:
//         day="Sunday";  
//         break;
//     case 1:
//         day="Monday";  
//         break;

//         case 2:
//         day="Tuesday";  
//         break;

//         case 3:
//         day="Wednesday";  
//         break;

//         case 4:
//         day="Thrusday";  
//         break;

//         case 5:
//         day="Friday";  
//         break;
//         case 6:
//             day="Saturday";  
//             break;


//     default:
//         console.log("ERROR"); 
//         break;
// }

res.render("list",{listTitle:day,newListItems:items});

});

app.post("/",function(req,res){
   
    const item = req.body.newItem;
    if(item != ""){
    if(req.body.list === "WorkList")
    {
        workItems.push(item);
        res.redirect("/work");
    } 
    else
    {
        items.push(item);
    }
}
})

app.get("/work",function(req,res){
    res.render("list",{listTitle :"WorkList",newListItems:workItems});
})

app.get("/about",function(req,res){
    res.render("about");
});

app.listen(3000,function(req,res){
    console.log("PORT STARTED");
})