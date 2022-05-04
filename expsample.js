const exp = require('constants')
const express = require('express')
const app=express()
const path=require('path')

app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,"sampleform.html"))
})

app.get('/about',(req,res)=>{res.send('about')})

app.listen(3000,()=> console.log("server started"))