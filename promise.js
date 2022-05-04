//callback

// function add(num1,num2,callback){
//     callback(num1+num2)
// }
// function multiply(num1,num2,callback){
//     callback(num1*num2)
// }
// function division(num1,num2,callback){
//     callback(num1/num2)
// }
// add(32,45,(sum)=>{
//     console.log(sum)
//     multiply(sum,15,(product)=>{
//         console.log(product)
//         division(product,sum,(result)=>{
//             console.log(result)
//         })        
//     })
// })


//promise

const promise = require('promise')

function add(num1,num2){
    return new promise((resolve,reject)=>{
        resolve(num1+num2)
    }
    )
}
function multiply(num1,num2){
    return new promise((resolve,reject)=>{
        resolve(num1*num2)
    }
    )
}

function division(num1,num2){
    return new promise((resolve,reject)=>{
        resolve(num1/num2)
    }
    )
}
add(32,45).then((sum)=>{
    console.log(sum)
    return multiply(sum,15)
}).then((product)=>{
    console.log(product)
    return division(product,15)
}).then((result)=>{
    console.log(result)
})