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
data[1][1].rowspan = 12
data[5][3].rowspan = 1
data[5][3].colspan = 4
data[7][3].rowspan = 3
data[7][3].colspan = 3
data[1][1].style = {
	fontSize: '16px',
	fontWeight: 600,
	color: 'red',
	backgroundColor: 'green'
}
data[1][3].value = 1234.52234
data[1][3].type = 'number'
data[1][3].format = '###.##'

data[1][4].value = '2021/10/30'
data[1][4].type = 'date'
data[1][4].format = 'YYYY-MM-DD'

const mG = new MonkeyGrid({
    container: document.getElementById('gridContainer'),
    width: 700,
    height: 490,
    order: true,
    headerOrder: true,
    
})
const sheet = mG.addSheet({
    name: 'sheet11',
    rowCount:rowLen+20,
    colCount: colLen+10,
    frozenRowCount: 1,
    frozenColCount: 2
})
sheet.addTable('table1', 0, 0, data)
sheet.point()