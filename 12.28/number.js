/**
 * 两个数相加
 */
/**number */
var num1 = 1;
var num2 = 2;
// num1='哈哈'不能将类型“string”分配给类型“number”
var sum = num1 + num2;
/**string */
var str1 = 'happy';
var str2 = 'new year';
var str = str1 + str2;
var a = null;
var b = undefined;
/**bool */
var bool = true;
/**array */
var array = [1, 3, 6, 9];
var array1 = ['c', 'h', 'b'];
var array3 = [true, false];
var array4 = [1, 2, 3, 4, 5];
var array5 = ['666'];
create({ prop: 0 });
create(null);
// number,string,undefined都报错
var obj;
obj = { name: '小白', age: 18 };
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 0] = "SUCCESS";
    CODE[CODE["ERROR"] = 1] = "ERROR";
    CODE[CODE["WARING"] = 2] = "WARING";
})(CODE || (CODE = {}));
console.log(CODE['SUCCESS']);
console.log(CODE.ERROR);
/**void */
function getName(name1, age1) {
    console.log();
}
function getName1(name2, age2) {
    return name2 + age2;
}
var person = { name: '李白', age: 21, sex: 69 };
var person1 = {
    name: '小红',
    age: 21,
    sex: 0,
    isjob: false,
    hobby: ['乒乓球', '打游戏'],
    former: 6969,
    formerName: ['hx', 'chb', '69']
};
