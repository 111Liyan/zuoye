/**
 * 两个数相加
 */

/**number */
let num1:number=1
let num2:number=2
// num1='哈哈'不能将类型“string”分配给类型“number”
let sum:number=num1+num2

/**string */

let str1:string='happy'
let str2:string='new year'
let str:string=str1+str2


let a:null=null
let b:undefined=undefined

/**bool */
let bool:boolean=true
/**array */
let array:number[]=[1,3,6,9]
let array1:string[]=['c','h','b']
let array3:boolean[]=[true,false]

let array4:Array<number>=[1,2,3,4,5]
let array5:Array<string>=['666']
/**object的对象 */
declare function create(o:object | null):void
create({prop:0})
create(null)
// number,string,undefined都报错
let obj:{name:string,age:number}
obj={name:'小白',age:18}


enum CODE{
    SUCCESS,
    ERROR,
    WARING
}
console.log(CODE['SUCCESS']);
console.log(CODE.ERROR);

/**void */
function getName(name1:string,age1:number):void{
    console.log();
    
}

function getName1(name2:string,age2:number):string{
    return name2+age2
}

/**交叉类型 */

interface use{
    name:string,
    age:number
}
interface per{
    sex:number
}
type allInfo=use&per
let person:use&per={name:'李白',age:21,sex:69}
// let person:allInfo={name:'李白',age:21,sex:69} 也可以这样写


/**interface */

interface Person{
    name:string,
    age:number,
    sex:number,
    isjob:boolean,
    hobby:string[],
    former:number,
    formerName:[string,string,string]
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