import React, { useEffect } from "react"
import { Link, graphql } from 'gatsby'
import { Button } from 'antd'
import SEO from '../components/seo'
import Footer from "../components/footer"
import 'monkey-grid/style.css';
const MonkeyGrid = typeof window !== `undefined` ? require("monkey-grid") : null

export default () => {
	useEffect(() => {
		let rowLen = 100;
		let colLen = 10;
		let data: any = [];
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

		const MG = new MonkeyGrid({
			container: document.getElementById("gridContainerHome"),
			width: 1000,
			height: 500,
		})

		const sheet = MG.addSheet({
			name: "sheet1",
			rowCount: 200,
			colCount: 20,
			frozenRowCount: 1,
    		frozenColCount: 1
		})

		sheet.addTable("table1", 0, 0, data)

		setTimeout(() => {
			if (window.location.href.indexOf('yunshangsky') > -1) {
				document.title = '云上星空AI相关技术分享'
			}
		}, 0)

	}, [])
	return (
		<div style={{
			width: '100%',
			height: '100%',
			textAlign: 'center'
		}}>
			<SEO />
			<h2 style={{marginTop: '10px'}}>
				Monkey Grid
			</h2>
			<div style={{width: '1000px', margin: '0 auto', textAlign: 'left', padding: '10px 60px'}}>
				<h2>功能特性</h2>
				<p>1. 多维表头展示，支持多维度的行列表头。</p>
				<p>2. 基于canvas绘制保证高性能渲染。</p>
				<p>3. 交互丰富，单选、多选区域、冻结行列头、自定义单元格样式和格式等。</p>
			</div>
			
			<div id="gridContainerHome"
				style={{
					width: '1000px',
					height: '500px',
					border: '1px splid #ccc',
					margin: '30px auto',
					display: 'flex',
					justifyContent: 'center'
				}}
			></div>
			<div style={{marginTop: '40px'}}>
				<Link
					to='/examples/base'
				>
					<Button type="primary" style={{width: '160px', height: '40px', fontSize: '16px'}}>
						查看demo
					</Button>
				</Link>
			</div>
			<div style={{marginTop: '60px'}}>
				<Footer></Footer>
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