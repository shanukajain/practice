const express =require("express");
const app=express();
var cron = require('node-cron');

cron.schedule('1-5 * * * *', () => {
  console.log('running a task every minute');
});
app.get("/",(req,res)=>{
    res.send("home page")
})

app.listen("3000",()=>{
    console.log("3000")
})