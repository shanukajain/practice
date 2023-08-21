const express=require("express");
const cors=require("cors");
const multer=require("multer");
const app=express();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './images/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, file.fieldname + '-' + uniqueSuffix + '.png')
    }
  })
  
  const upload = multer({ storage: storage })
app.use(cors());

app.get("/",(req,res)=>{
    res.send("hello sir");
})


    app.post('/profile', upload.single('avatar'), function (req, res, next) {
        // req.file is the `avatar` file
        // req.body will hold the text fields, if there were any
        console.log("hey");
        res.send("done");
      })
      
 

app.listen(3000,()=>{
    console.log("3000")
})