const array = [1, 2, 3, 4]
let [one, two, ...apple] = array
//  const one = array[0] = 1
//  const two = array[1] = 2
// ...代表剩下的分配給others，一定要放最後，可以不放
// 陣列解構時的 one two other 可以自己命名
console.log(one)//1
console.log(two)//2
console.log(apple)//[3,4]
// 解構是看資料型態，陣列物件是reference，其他是value
one = 100
console.log('one', one); //100
console.log('array', array); //[1,2,3,4]

const obj = { a: 1, b: 2, c: 3, d: 4 }
// const a =obj.a
// const bbb = obj.
// 物件解構必須跟key相同名字，或是用:重新命名
// ...可以自己命名
const b = 23156498
let { a, b: bbb, ...banana } = obj
console.log(a)//1
console.log(bbb) //2
console.log(banana)//c: 3, d: 4

a = 100
console.log(a);//100
console.log(obj);//{a: 1, b: 2, c: 3, d: 4}
