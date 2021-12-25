import MonkeyGrid from 'monkeyGrid'
import 'monkeyGrid/style.css'

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
    width: 700,
    height: 490,
    order: true,
    headerOrder: true
})

const sheet = MG.addSheet({
    name: 'sheet11',
    rowCount: rowLen + 20,
    colCount: colLen + 10,
    // 设置冻结行列参数
    frozenRowCount: 1,
    frozenColCount: 2
})

sheet.addTable('table1', 0, 0, data)

sheet.point()