function hello(data){
    console.log("data : "+data)
}

function hey(callback){
    callback("juanidkm.tech")
}

hey(hello)