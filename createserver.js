var http= require('http')
http.createServer(function(req,res){
    res.write("hai respond")
    res.end()
}).listen(3000)