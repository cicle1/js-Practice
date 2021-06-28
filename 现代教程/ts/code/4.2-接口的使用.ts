// let p1: {
//     name: string
//     age: number
//     sayHi: () => void
// } = {
//     name: 'jack',
//     age: 18,
//     sayHi: function () {
//         console.log('再见杰克')
//     }
// }

// let p2 = {
//     name: 'rose',
//     age: 17,
//     sayHi: function () {
//         console.log('京酱肉丝');

//     }
// }

//创建一个接口
interface IUser {
    name: string
    age: number
    sayHi: () => void
}

//使用接口
let p1: IUser = {
    name: 'jack',
    age: 18,
    sayHi: function () {
        console.log('再见杰克');

    }
}
let p2 = {
    name: 'rose',
    age: 17,
    sayHi: function () {
        console.log('京酱肉丝');

    }
}