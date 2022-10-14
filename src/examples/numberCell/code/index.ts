import MonkeyGrid from 'monkey-grid'
import 'monkey-grid/style.css'

let rowLen = 100
let colLen = 10
let data = []
for (let i = 0; i < rowLen; i++) {
	let row = []
	for (let j = 0; j < colLen; j++) {
		row.push({
			value: `${i},${j}`
		})
	}
	data.push(row)
}
// 第一种方式
// 数据中设置单元格格式
// 数值类型
data[1][0].value = 34.765
data[1][0].type = 'number'
data[1][0].format = '###.##'

data[1][1].value = 1234.52234
data[1][1].type = 'number'
data[1][1].format = '###.##'

const MG = new MonkeyGrid({
	container: document.getElementById('gridContainer'),
	order: true,
	headerOrder: true,

})
const sheet = MG.addSheet({
	name: 'sheet1',
	rowCount: rowLen + 20,
	colCount: colLen + 10
})

sheet.addTable('table1', 0, 0, data)

// 第二种方式
// 调用sheet实例上设置单元格类型方法 setCellType(row: number, col: number, type: string)
// 调用sheet实例上设置格式方法 setCellFormatter(row: number, col: number, format: string)
sheet.setCellValue(1, 3, 1432.1)
sheet.setCellType(1, 3, 'number')
sheet.setCellFormatter(1, 3, '###.##')
