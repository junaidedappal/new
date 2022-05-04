const Promise =require('promise')

function getname(){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
           resolve("juanid")
       },3000);
    })
}

function getmobile(){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
           resolve('7034911822')        
       },2000);
    })
}

// "PROMISE ALL a non Waiting function"

Promise.all([getname(),getmobile()]).then((result)=>{
    console.log(result)
})

//"waiting function"

// async function getuser(){
//     let name= await getname()
//     console.log(name)
//     let mobile=await getmobile()
//     console.log(mobile)
// }
// getuser()
