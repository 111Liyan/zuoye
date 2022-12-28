// function getter(person:string){
//     return 'hello'+person
// }
// let user ='jane'
// document.body.innerHTML=getter(user)




// let num1:number=1
// let num2:number=2
// let num:number=num1+num2



// let str1:string='123'
// let str2:string='3535'
// let str:string=str1+str2



// declare function create (o:object|null):void
// create({props:0})
// create(null)
// let obj :{name:string,age:number}
// obj={name:"小红",age:12}




// interface user{
//     name:string,
//     age:number
// }
// interface per{
//     sex:number
// }
// type allInfo=user&per 
// let person:user&per={name:'小李',age:1,sex:1}
// console.log(parson);



interface person{
    name:string,
    age:number,
    sex:number,
    isJob:boolean,
    hobby:string[]
    former:number,
    formerName:[string,string,string]
}