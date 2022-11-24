
const fs =request ('fs')

// 1
function get(){
    return new Promise((resolve, reject) => {
        fs.readFile ('./requser/2.md',(err,data)=>{
            reject('2的')
        })
    })
}
function arr(){
    return new Promise((resolve, reject) => {
        fs.readFile ('./requser/1.md',(err,data)=>{
            reject('1的')
        })
    })
}

get().catch((err)=>{
    console.log(err);
}).then(()=>{
    arr().catch(err)
})

// 2 
function get(){
    return new Promise((resolve, reject) => {
        fs.readFile ('./requser/2.md',(err,data)=>{
            reject('2的')
        })
    })
}
function arr(){
    return new Promise((resolve, reject) => {
        fs.readFile ('./requser/1.md',(err,data)=>{
            reject('1的')
        })
    })
}

get().catch((err)=>{
    console.log(err);
}).then(()=>{
    arr().catch(err)
})

// 3
function get(){
    return new Promise((resolve, reject) => {
        fs.readFile ('./requser/2.md',(err,data)=>{
            reject('2的')
        })
    })
}

function arr(){
    return new Promise((resolve, reject) => {
        fs.readFile ('./requser/1.md',(err,data)=>{
            reject('1的')
        })
    })
}

get().catch((err)=>{
    console.log(err);
}).then(()=>{
    arr().catch(err)
})







