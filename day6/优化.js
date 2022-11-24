
const fs =request('fs')

// 1
// function p (url){
//     return new Promise((resolve, reject) => {
//         fs.readFile(url,(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// p('./requser/1.md').then((res)=>{
//     return res.toString()
// }).then((data)=>{
//     console.log(data);
//     p('./requser/2.md').then((res)=>{
//     return res.toString()

//     })
// })

// 2
// function p(url){
//     return new Promise((resolve, reject) => {
//         fs.readFile('url', (err, data) => {
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// p('./requser/1.md').then((res)=>{
//     return res.toString()
// }).then((data)=>{
//     console.log(data);
//     p('./requser/2.md').then((res)=>{
//         return res.toString()
//     })
// })


// 3
function p(url){
    return new Promise((resolve, reject) => {
      fs.readFile('url', (err, data) => {
        if(err) reject(err)
        resolve(data)
      })
    })
}
p('./requser/1.md').then((res)=>{
    console.log(res);
}).then((data)=>{
    console.log(data);
    p('./requser/2.md').then((res)=>{
        return res.toString()
    })
})