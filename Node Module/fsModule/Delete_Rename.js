const fs = require("fs");
// rename file 
fs.rename("deletefile.txt","new.txt",(err)=>{
  if(err){
    console.log(err)
  }
  console.log("file rename succesfully")
})

// delete file 
fs.unlink("new.txt",(err)=>{
  if(err){
    console.log(err)
  }
  console.log("file delete succesfully")
})