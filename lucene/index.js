const express =require("express");
const app=express();
const lucene = require('lucene-node');

// Create an index
const index = new lucene.Index();

// Index documents
index.add({ field1: 'hello world', field2: 'example document' });

// Perform a search
app.get("/",(req,res)=>{
    const results = index.search(`${req.query.search}`);
    res.send(results);
})


app.listen("3000",()=>{
    console.log("3000")
})


