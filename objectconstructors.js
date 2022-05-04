function person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log(this.name,this.age,this.place )
    }

}

var junaid=new person("junaid","24","edappal")

console.log(junaid)
junaid.display()
