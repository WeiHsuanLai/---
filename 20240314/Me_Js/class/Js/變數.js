var a = 1
console.log(a) //1
// 需要改值時不需要重複宣告，用 = 修改
a = 2
console.log(a) //2
var a = 3
console.log(a) //3
// let為區域變數，區域內不能重複宣告 {}為一區
// Uncaught SyntaxError: Identifier 'a' has already been declared
// let a = 1
let b = 1
console.log(b)
b = 2
console.log(b)

// const 區域變數
// 區域內不能重複宣告 {}為一區
// 宣告後不能修改
const c = 1
console.log(c)
cons
