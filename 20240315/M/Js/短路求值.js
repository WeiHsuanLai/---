const x = null || 0 || undefined || 123 || 'abc' || 'dfgd' || false
console.log(x)

// const name = prompt('請輸入名字') || '路人'
// console.log('name')

// let name1 = prompt('請輸入名字')
// if (name1 === '' || name === null) {
//     name = '路人'
// }

//&&會取締一個Boolean判斷為false的值
const y = 'abc' && 123 && 456 && 789 && false && 'def' && undefined
console.log(y)
//??會取第一個不是null也不是undefined的值
const z = undefined ?? null ?? false ?? 'abc' ?? 123 ?? 456 ?? false ?? 'def'
console.log(z)
