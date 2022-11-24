
    const fs =request('fs')
    function get (){
        return new Promise((resolve, reject) => {
            fs.readFile('./requser/1.md', (err, data) => {
                if(err) reject(err)
                resolve(data)
            })
        })
    }
    function arr (){
        return new Promise((resolve, reject) => {
            fs.readFile ('./requser/2.md',(err,data)=>{
                if(err) reject(err) 
                resolve(data)
            })
        })
    }
    get().then(res=>{
        return res.toString()
    }).then((data)=>{
        let result =arr().then(res=>res.toString())
        return result+data
    }).then((data1)=>{
        console.log(data1);
        get().then(res=>{
            console.log(res.toString());
        })
    }) 

function get(){
    return new Promise((resolve, reject) => {
        fs.readFile('./requser/1.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
function arr(){
    return new Promise((resolve, reject) => {
        fs.readFile('./requser/2.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
get(),then((res)=>{
    return res.toString()
}).then((data)=>{
    let result =arr().then((res)=>res.toString())
    return result+data
}).then((data1)=>{
    console.log(data1);
    get().then((res)=>{
        console.log(res.toString());
    })
})


function get(){
    return new Promise((resolve, reject) => {
        fs.readFile('./requser/1.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
function arr(){
    return new Promise((resolve, reject) => {
        fs.readFile('./requser/2.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
get().then((res)=>{
    return res.toString()
}).then((data)=>{
    let result=arr().then((res)=>res.toString())
    return result+data
}).then((data1)=>{
    console.log(data1);
    get().then((res)=>{
        console.log(res.toString());
    })
})

