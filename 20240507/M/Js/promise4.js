const wait = (ms, ok) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (ok) {
				resolve('ok')
			} else {
				reject(new Error('no ok'))
			}
		}, ms)
	})
}

// Promise.all(Promise陣列)
// 同時開始執行 promise
// 陣列的所有東西都 resolve 才會 .then()
// 只要有一個 reject 就會 catch
// Promise.all([wait(1000, true), wait(2000, false), wait(3000, false)])
// 	.then((result) => {
// 		console.log(result)
// 	})
// 	.catch((error) => {
// 		console.log(error)
// 	})

// Promise.allSettled(Promise陣列)
// 同時開始執行 promise
// 陣列的所有東西處理完後直接 .then
// .then 的 status 代表結果
// fulfulled(成功) rejected (失敗)
// value 成功的結果
// reason 失敗的原因

// Promise.allSettled([wait(1000, true), wait(2000, false), wait(3000, false)]).then((result) => {
// 	console.log(result)
// })

// Promise.race(Promise陣列)
// 取陣列中第一個有結果的東西

// Promise.race([wait(1000, true), wait(2000, false), wait(3000, false)])
// 	.then((result) => {
// 		console.log(result)
// 	})
// 	.catch((error) => {
// 		console.log(error)
// 	})

// Promise.any(Promise陣列)
// 取陣列內第一個 resolve 的東西
// 全部 reject 會進到 catch，錯誤是 all promise were rejected

Promise.any([wait(1000, false), wait(2000, false), wait(3000, false)])
	.then((result) => {
		console.log(result)
	})
	.catch((error) => {
		console.log(error)
	})
console.log(wait(2000, true))
