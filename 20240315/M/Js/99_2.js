document.write('<table border="1">')
//給迴圈命名，可自訂名稱，將外層回全命名為loop1
// 內層迴圈為loop2
loop1: for (let i = 1; i <= 5; i++) {
	document.write(`<tr>`)
	loop2: for (j = 1; j <= 5; j++) {
		// document.write('aaa')
		// 多層迴圈是對寫的那層有效，無法指定是哪一層
		if (i === 2) continue loop1
		// 指定對loop迴圈continue
		// 直接跳到 i++ 後進入下一次 i迴圈
		document.write(`<td>${i}x${j}=${i * j}</td>`)
	}
	document.write(`</tr>`)
}
document.write('</table>')
