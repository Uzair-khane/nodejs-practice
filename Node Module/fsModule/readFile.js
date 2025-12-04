const fs =require("fs")
// Async 
// fs.readFile("read.txt","utf8",(err,data)=>{
//   if(err){
//     console.log("error occuer",err)
//   }
//   else{
//     console.log("your data is  ",data)
//   }
// })


// sync 

 let data = fs.readFileSync("read.txt","utf8")
console.log(data)