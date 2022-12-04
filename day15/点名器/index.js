var List = [
    {
        "id": 1,
        "name": "王伟宸",
        "sex": 0,
        "checked": false
    },
    {
        "id": 2,
        "name": "杨志豪",
        "sex": 0,
        "checked": false
    },
    {
        "id": 3,
        "name": "巴钦",
        "sex": 0,
        "checked": false
    },
    {
        "id": 4,
        "name": "李宏恩",
        "sex": 1,
        "checked": false
    },
    {
        "id": 5,
        "name": "孙旭瑶",
        "sex": 0,
        "checked": false
    },
    {
        "id": 6,
        "name": "高鹏亚",
        "sex": 1,
        "checked": false
    },
    {
        "id": 7,
        "name": "章涵语",
        "sex": 0,
        "checked": false
    },
    {
        "id": 8,
        "name": "江萌洋",
        "sex": 0,
        "checked": false
    },
    {
        "id": 9,
        "name": "张宗耀",
        "sex": 0,
        "checked": false
    },
    {
        "id": 10,
        "name": "周璇",
        "sex": 0,
        "checked": false
    },
    {
        "id": 11,
        "name": "韩雨泽",
        "sex": 0,
        "checked": false
    },
    {
        "id": 12,
        "name": "郑峰",
        "sex": 0,
        "checked": false
    },
    {
        "id": 13,
        "name": "吴倩",
        "sex": 1,
        "checked": false
    },
    {
        "id": 14,
        "name": "宋增杰",
        "sex": 0,
        "checked": false
    },
    {
        "id": 15,
        "name": "张立",
        "sex": 0,
        "checked": false
    },
    {
        "id": 16,
        "name": "邓林柯",
        "sex": 0,
        "checked": false
    },
    {
        "id": 17,
        "name": "代伊涵",
        "sex": 0,
        "checked": false
    }, {
        "id": 18,
        "name": "李妍",
        "sex": 1,
        "checked": false
    }, {
        "id": 19,
        "name": "张世权",
        "sex": 0,
        "checked": false
    }, {
        "id": 20,
        "name": "付高聪",
        "sex": 1,
        "checked": false
    }
];
var allStudentList = List;
var paddingStudents = [];
var ul = document.getElementsByTagName('ul')[0];
var saveSpan = document.getElementById('name');
// saveSpan.style.backgroundImage = randomColor();
renderStudent();
function renderStudent() {
    ul.innerHTML = "";
    allStudentList.forEach((function (item) {
        // 创建li标签
        var li = document.createElement('li');
        li.className = "liColor";
        // li.style.backgroundImage = randomColor();
        // 添加li标签展示的内容
        li.innerHTML = "<span>".concat(item.name, "</span>");
        // 将li标签动态添加到ul中
        ul.appendChild(li);
    }));
}
