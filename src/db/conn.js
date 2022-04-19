const mongoose = require("mongoose");

// creating a database
mongoose.connect("mongodb://localhost:27017/karanDynamic")
.then(()=>{
    console.log("connection is successful")
}).catch((err)=>{
    console.log(err);
})