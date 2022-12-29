interface Person{
    name:string,
    age:number,
    sex:number,
    isjob:boolean,
    hobby:string[],
    former:number,
    formerName:[string,string,string]
}
interface person{
    idCat:string
}

let person1:Person={
    name:'小红',
    age:21,
    sex:0,
    isjob:false,
    hobby:['乒乓球','打游戏'],
    former:6969,
    formerName:['hx','chb','69']
}



function ajaxGet(methds,url){
    let ajax=new XMLHttpRequest()
    ajax.open(methds,url)
}
interface Parmane{
    url:string,
    methds:string
}
enum CODS{
    SUCCESS=200,
    ERROR=4
}



class Paople{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    sport():string{
        return `${this.name}会运动`
    }
}
let p =new Paople('小红',12)
console.log(p.sport());
