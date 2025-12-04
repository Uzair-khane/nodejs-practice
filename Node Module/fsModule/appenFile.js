const fs = require("fs");
fs.appendFile("write.txt","\n welcome ",(err)=>{
  if(err){
    console.log(err)
  }
  console.log("data append succesfully")
})