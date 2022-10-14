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

const MG = new MonkeyGrid({
    container: document.getElementById('gridContainer'),
    order: true,
    headerOrder: true
})

const sheet = MG.addSheet({
    name: 'sheet1',
    rowCount: rowLen + 20,
    colCount: colLen + 10,
    // 设置冻结行列参数
    frozenRowCount: 1,
    frozenColCount: 2
})

sheet.addTable('table1', 0, 0, data)
