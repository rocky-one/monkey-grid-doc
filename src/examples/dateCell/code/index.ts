import MonkeyGrid from 'monkeyGrid'
import 'monkeyGrid/style.css'

let rowLen = 100
let colLen = 10
let data = []
for(let i = 0;i<rowLen;i++){
	let row = []
	for(let j = 0; j<colLen;j++){
		row.push({
			value: `${i},${j}`
		})
	}
	data.push(row)
}
// 第一种方式
// 日期格式
data[1][4].value = '2021/10/30'
data[1][4].type = 'date'
data[1][4].format = 'YYYY-MM-DD'

const MG = new MonkeyGrid({
    container: document.getElementById('gridContainer'),
    width: 700,
    height: 490,
    order: true,
    headerOrder: true,
    
})
const sheet = MG.addSheet({
    name: 'sheet11',
    rowCount:rowLen+20,
    colCount: colLen+10
})

// 第二种方式
// 调用sheet实例上设置单元格类型方法 setCellType(row: number, col: number, type: string)
// 调用sheet实例上设置格式方法 setCellFormatter(row: number, col: number, format: string)
sheet.setCellType(1, 4, 'date')
sheet.setCellFormatter(1, 4, 'YYYY-MM-DD')

sheet.addTable('table1', 0, 0, data)
sheet.paint()