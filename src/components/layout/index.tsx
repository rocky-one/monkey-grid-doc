import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd'
import Menu from '../menu'
const { TabPane } = Tabs
import * as styles from './index.module.less'

const treeData = [
	{
		title: '基础使用',
		path: `/examples/base`,
		slug: 'base'
	},
	{
		title: '单元格配置',
		path: `/examples/cell`,
		slug: 'cell'
	}
]

const tabsData = [
	{
		title: 'API文档',
		path: '/docs',
		id: 1
	},
	{
		title: '表格示例',
		path: '/examples',
		id: 2
	}
]
export default ({ children }: any) => {
	const [activeKey, setActiveKey] = useState<string>('')

	useEffect(() => {
		let pathname = window.location.pathname
        const selectedItem = tabsData.find(item => pathname.indexOf(item.path) > -1)
        if (selectedItem) {
            setActiveKey(selectedItem.id.toString())
        }
	}, []);

	const onTabClick = (key: string) => {
		setActiveKey(key)
	}

	return <div className={styles.layout}>
		<header className={styles.header}>
			<div className={styles.logo}>
				Monkey Grid
			</div>
			<div className={styles.search}></div>
			<div className={styles.tabs}>
				<Tabs
					tabPosition="bottom"
					activeKey={activeKey}
					onTabClick={onTabClick}
				>
					{
						tabsData.map(item => <TabPane tab={item.title} key={item.id}></TabPane>)
					}
				</Tabs>
			</div>
		</header>
		<div className={styles.container}>
			<div className={styles.left}>
				<Menu treeData={treeData} />
			</div>
			<div className={styles.right}>
				{children}
			</div>
		</div>
	</div>
}