const fs = require('fs');
// console.log(fs);

//asynchronous method
fs.readFile(__dirname+"/Teacher.txt",'utf8',(error,data)=>{
    console.log(data)
})
console.log("ashutosh pandey "
)