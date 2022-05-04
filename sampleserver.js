
var http = require('http')
var fs =require('fs')
var url=require('url')


http.createServer(function(req,res){
    var path=url.parse(req.url, true)
    if(path.pathname==='/'){        
        fs.readFile('samplehtml.html', function(err,data){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)
        res.end()
        })
    }else if(path.pathname==='/login'){
        fs.readFile('sampleform.html',(err,data)=> {
            res.writeHead('200',{'Content-Type':'text/html'})
            res.write(data)
            res.end()

        })
        

    }else if(path.pathname==='/signupaction.html'){
            var p=path.query 
            res.writeHead('200',{'Content-Type':'text/html'})
            res.write('<h1>'+p.mail+"</h1>")
            res.end()
        

    }else {  
           
        res.write( " url is not found")
        res.end()
       
    }
    
}).listen(2000,()=> console.log("server connected"))
