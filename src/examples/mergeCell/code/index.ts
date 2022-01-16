import MonkeyGrid from "monkeyGrid";
import "monkeyGrid/style.css";

let rowLen = 100;
let colLen = 10;
let data = [];
for (let i = 0; i < rowLen; i++) {
    let row = [];
    for (let j = 0; j < colLen; j++) {
        row.push({
            value: `${i},${j}`,
        });
    }
    data.push(row);
}
// 第一种方式
// 在数据中直接设置合并单元格属性 rowsapn和colspan
data[5][2].rowspan = 1
data[5][2].colspan = 4

data[7][2].rowspan = 3
data[7][2].colspan = 3

const MG = new MonkeyGrid({
    container: document.getElementById("gridContainer"),
    width: 700,
    height: 390,
    order: true,
    headerOrder: true,
});

const sheet = MG.addSheet({
    name: "sheet1",
    rowCount: 200,
    colCount: 20
});

// 第二种方式
// 调用sheet实例方法, setMergeCells(row: number, col: number, rowCount: number, colCount: number)
sheet.setMergeCells(12, 3, 2, 2);

sheet.addTable("table1", 0, 0, data);

sheet.paint();
