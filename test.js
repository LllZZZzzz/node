// const p = new Promise((resolve, reject) => {
//     resolve(123)
// });
// const a = p.then((res) => {
//     console.log(res)
// });
// var p = Promise.resolve(123);
// console.log(p)
// p.then((res) => {
//     console.log(res);
// })
async function test() {
    return new Promise((resolve) => {
        resolve(123)
    })
}
async function main() {
    console.log(await test())
}
main()