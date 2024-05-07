const validate = (input) => {
	try {
		if (input === undefined || input === null) {
			// 手動拋出錯誤
			// throw new Error(錯誤訊息)
			throw new Error('沒有輸入內容')
		} else if (typeof input !== 'number') {
			throw new Error('只接受數字')
		} else if (input < 1) {
			throw new Error('數字太小')
		} else if (input > 9) {
			throw new Error('數字太大')
		}
		return true
	} catch (error) {
		// 錯誤的物件
		console.log(error)
		// 錯誤的名稱
		console.log(error.name)
		// 錯誤的訊息
		console.log(error.message)

		return false
	}
}

console.log(validate())
console.log(validate('abc'))
console.log(validate(123))
console.log(validate(3))
