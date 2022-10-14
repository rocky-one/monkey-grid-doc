import MonkeyGrid from 'monkey-grid'
import 'monkey-grid/style.css'

let rowLen = 17
let colLen = 10
let data = []
for (let i = 0; i < rowLen; i++) {
    let row = []
    for (let j = 0; j < colLen; j++) {
        let cell = {
            value: `${i},${j}`
        }
        row.push(cell)
    }
    data.push(row)
}

data[0][0].value = ''
data[0][1].value = ''
data[1][0].value = ''
data[1][1].value = ''

data[2][0].rowspan = 3;
data[2][0].value = '北京市'
data[2][1].value = '朝阳区'
data[3][1].value = '海淀区'
data[4][1].value = '西城区'

data[5][0].rowspan = 2;
data[5][0].value = '山东省'
data[5][1].value = '济南市'
data[6][1].value = '青岛市'

data[7][0].rowspan = 4;
data[7][0].value = '河北省'
data[7][1].value = '石家庄市'
data[8][1].value = '唐山市'
data[9][1].value = '衡水市'
data[10][1].value = '保定市'

data[11][0].rowspan = 5;
data[11][0].value = '河南省'
data[11][1].value = '郑州市'
data[12][1].value = '开封市'
data[13][1].value = '洛阳市'
data[14][1].value = '许昌市'
data[15][1].value = '安阳市'

data[16][0].rowspan = 1;
data[16][0].value = '四川省'
data[16][1].value = '成都市'



data[0][2].colspan = 2;
data[0][2].value = 'A1'
data[1][2].value = 'A1-1'
data[1][3].value = 'A1-2'

data[0][4].colspan = 2;
data[0][4].value = 'B1'
data[1][4].value = 'B1-1'
data[1][5].value = 'B1-2'

data[0][6].colspan = 3;
data[0][6].value = 'C1'
data[1][6].value = 'C1-1'
data[1][7].value = 'C1-2'
data[1][8].value = 'C1-3'

data[0][9].colspan = 1;
data[0][9].value = 'D1'
data[1][9].value = 'D1-1'

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
    frozenRowCount: 2,
    frozenColCount: 2
})

sheet.addTable('table1', 0, 0, data)
