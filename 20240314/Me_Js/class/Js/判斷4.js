const lang = prompt('語言', 'zh-tw')

if (lang === 'zh-tw') {
	document.write('台灣中文')
} else if (lang === 'ja-jp') {
	document.write('日本日文')
} else if (lang === 'en-us' || lang === 'en') {
	document.write('英文')
} else {
	document.write('窩不知道')
}

document.write('<hr>')

const message = lang === 'zh-tw' ? '台灣中文' : lang === 'ja-jp' ? '日本日文' : lang === 'en-us' || lang === 'en' ? '英文' : '窩不知道'
document.write(message)

document.write('<hr>')

// 從符合的 case 開始往下執行，直到遇到 break
// default 代表以上皆非，不一定要有
switch (lang) {
	case 'zh-tw':
		document.write('台灣中文')
		break
	case 'jp':
		document.write('日本')
	case 'ja-jp':
		document.write('日文')
		break
	case 'en-us':
	case 'en':
		document.write('英文')
		break
	default:
		document.write('窩不知道')
		break
}
