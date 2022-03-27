import React, { useEffect } from "react"
import { Link, graphql } from 'gatsby'
import MonkeyGrid from 'monkey-grid';
import { Button } from 'antd'
import SEO from '../components/seo'
import 'monkey-grid/style.css';


export default ({ data }) => {
	useEffect(() => {
		let rowLen = 100;
		let colLen = 10;
		let data = [];
		for (let i = 0; i < rowLen; i++) {
			let row = [];
			for (let j = 0; j < colLen; j++) {
				if (i === 0 ) {
					row.push({
						value: `第${j + 1}列`,
					});
				} else if (j === 0 && i > 0) {
					row.push({
						value: `第${j + 1}行`,
					});
				} else {
					row.push({
						value: `${i},${j}`,
					});
				}
				
			}
			data.push(row);
		}

		// 数值类型
		data[2][2].style = {
			backgroundColor: '#40E0D0',
			color: '#fff'
		}
		data[2][2].value = 1234.52234
		data[2][2].type = 'number'
		data[2][2].format = '###.##'

		// 日期类型
		data[2][3].style = {
			backgroundColor: '#3CB371',
			color: '#fff'
		}
		data[2][3].value = '2021/10/30'
		data[2][3].type = 'date'
		data[2][3].format = 'YYYY-MM-DD'

		// 第一种方式
		// 在数据中直接设置合并单元格属性 rowsapn和colspan
		data[4][2].rowspan = 2
		data[4][2].colspan = 3
		data[4][2].value = '合并单元格'
		data[4][2].style = {
			backgroundColor: '#20B2AA',
			color: '#fff'
		}
		// data[7][2].rowspan = 3
		// data[7][2].colspan = 3

		const MG = new MonkeyGrid({
			container: document.getElementById("gridContainerHome"),
			width: 800,
			height: 500,
		});

		const sheet = MG.addSheet({
			name: "sheet1",
			rowCount: 200,
			colCount: 20,
			frozenRowCount: 1,
    		frozenColCount: 1
		});

		// 第二种方式
		// 调用sheet实例方法, setMergeCells(row: number, col: number, rowCount: number, colCount: number)
		// sheet.setMergeCells(12, 3, 2, 2);

		sheet.addTable("table1", 0, 0, data);
	}, [])
	return (
		<div style={{
			width: '100%',
			height: '100%',
			textAlign: 'center'
		}}>
			<SEO />
			<h1 style={{marginTop: '100px'}}>
				Monkey Grid
			</h1>

			<div style={{marginTop: '30px'}}>
				<Link
					to='/examples/base'
				>
					<Button type="primary">
						开始使用
					</Button>
				</Link>
			</div>
			<div id="gridContainerHome"
				style={{
					width: '70%',
					height: '60%',
					border: '1px splid #ccc',
					margin: '40px auto',
					display: 'flex',
					justifyContent: 'center'
				}}
			>

			</div>
		</div>
	)
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`