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
// 数据中设置单元格样式
data[1][1].style = {
    fontSize: '16px',
    fontWeight: 600,
    color: 'red',
    backgroundColor: 'green'
}

const MG = new MonkeyGrid({
    container: document.getElementById('gridContainer'),
    width: 700,
    height: 390,
    order: true,
    headerOrder: true
})

const sheet = MG.addSheet({
    name: 'sheet1',
    rowCount: rowLen + 20,
    colCount: colLen + 10
})
// 第二种方式
// 调用sheet实例方法 setCellStyle = (row: number, col: number, style: any)
sheet.setCellStyle(2, 2, {
    fontSize: '14px',
    fontWeight: 600,
    color: 'green',
    backgroundColor: 'red'
})

sheet.addTable('table1', 0, 0, data)

sheet.paint()