import MonkeyGrid from 'monkey-grid'
import 'monkey-grid/style.css'

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
data[1][0].value = '2021/09/10'
data[1][0].type = 'date'
data[1][0].format = 'YYYY/MM/DD'

data[1][1].value = '2021/09/12'
data[1][1].type = 'date'
data[1][1].format = 'YYYY/MM/DD'

data[1][2].value = '2021/10/30'
data[1][2].type = 'date'
data[1][2].format = 'YYYY-MM-DD'

data[1][3].value = '2021/11/02'
data[1][3].type = 'date'
data[1][3].format = 'YYYY-MM-DD'

const MG = new MonkeyGrid({
    container: document.getElementById('gridContainer'),
    order: true,
    headerOrder: true,
    
})
const sheet = MG.addSheet({
    name: 'sheet1',
    rowCount:rowLen+20,
    colCount: colLen+10
})



sheet.addTable('table1', 0, 0, data)

// 第二种方式
// 调用sheet实例上设置单元格类型方法 setCellType(row: number, col: number, type: string)
// 调用sheet实例上设置格式方法 setCellFormatter(row: number, col: number, format: string)
sheet.setCellValue(3, 1, '2022/01/01')
sheet.setCellType(3, 1, 'date')
sheet.setCellFormatter(3, 1, 'YYYY-MM-DD')