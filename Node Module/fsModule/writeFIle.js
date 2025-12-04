const fs = require("fs")
  fs.writeFile("write.txt","heloo from node js",(err,)=>{
  if(err){
    console.log(err)
  }
  console.log("data write succesfully")
  })
