const http = require('http');
//  console.log(http);

const server = http.createServer(function(req,res){
    res.write('welcome ashu')
    res.write('tosh pandey jii')
    res.end()
}).listen(3000,()=>console.log('server is running localhost:3000'))