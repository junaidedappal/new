var person={}
person.name="junaid"
person.age=24
person.place="edappal"
person.job="developer"

for(z in person){
    console.log(person[z])
}
person.displayage= function(){
    console.log(this.age)
}
console.log(person.displayage())
//console.log(person.job)