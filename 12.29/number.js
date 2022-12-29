var person1 = {
    name: '小红',
    age: 21,
    sex: 0,
    isjob: false,
    hobby: ['乒乓球', '打游戏'],
    former: 6969,
    formerName: ['hx', 'chb', '69']
};
function ajaxGet(methds, url) {
    var ajax = new XMLHttpRequest();
    ajax.open(methds, url);
}
var CODS;
(function (CODS) {
    CODS[CODS["SUCCESS"] = 200] = "SUCCESS";
    CODS[CODS["ERROR"] = 4] = "ERROR";
})(CODS || (CODS = {}));
// var People = /** @class */ (function () {
//     function People() {
//     }
//     People.prototype.consttructor = function (nome, age) {
//         this.nome = nome,
//             this.age = age;
//     };
//     People.prototype.sport = function () {
//         return this.mome + '会运动';
//     };
//     return People;
// }());




class People{
    consttructor(nome,age){
        this.nome=nome,
        this.age=age
    }
    sport(){
        return this.mome+'会运动'
    }

    
}
let p = new People('小红,12')
console.log(p.sport());
console.log(p.age);