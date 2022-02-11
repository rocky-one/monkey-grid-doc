import MonkeyGrid from "monkey-grid";
import "monkey-grid/style.css";

// 创建数据，MonkeyGrid接受一个二维数组的数据源
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

// 创建实例
const MG = new MonkeyGrid({
    container: document.getElementById("gridContainer"),
    order: true,
    headerOrder: true,
});

// 添加一个sheet
const sheet = MG.addSheet({
    name: "sheet1",
    rowCount: 200,
    colCount: 20
});

// 往sheet中添加一个表格
sheet.addTable("table1", 0, 0, data);

// 绘制
sheet.paint();
