class names{
    constructor(fname,sname){
        this.fname=fname
        this.sname=sname
        
    }
    displayname(){
        console.log(this.fname,this.sname)
    }
}

var id1 = new names("junaid","edappal")
id1.displayname()