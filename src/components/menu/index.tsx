import React, { useEffect, useState } from 'react'
import { Menu } from 'antd'
import { map } from 'lodash-es'
import { Link } from 'gatsby'
const SubMenu = Menu.SubMenu
// import * as styles from './index.module.less'

interface TreeItem {
    children?: TreeItem[];
    title?: string;
    value?: string;
    key?: string;
    icon?: string;
    path: string;
    slug: string;
}

interface MenuProps {
    treeData: TreeItem[]
}

export default (props: MenuProps) => {

    const [selectedKeys, setSelectedKeys] = useState<any>([])

    useEffect(() => {
        let href = window.location.href
        const selectedItem = props.treeData.find(item => href.indexOf(item.path) > -1)
        if (selectedItem) {
            setSelectedKeys([selectedItem.path])
        }
    }, [])
    
    const onMenuClick = ({key}) => {
        const item: any = props.treeData.find(item => item.path === key)
        setSelectedKeys([key])
        // window.history.replaceState({}, '', item.path)
    }

    const getMenuSub = (data: TreeItem[]) =>
        map(data, (item: TreeItem) =>
            item.children ? (
                <SubMenu
                    key={item.path}
                    title={
                        <div>
                            {item.icon && (
                                <span>
                                    {item.title}
                                </span>
                            )}
                            <span>
                                {item.title}
                            </span>
                        </div>
                    }
                >
                    {getMenuSub(item.children)}
                </SubMenu>
            ) : (
                <Menu.Item
                    key={item.path}
                    style={{
                        height: 40,
                        padding: 0,
                        cursor: 'pointer',
                        paddingLeft: '14px'
                    }}
                >
                    <Link to={item.path}>
                        {item.title}
                    </Link>
                </Menu.Item>
            ),
        );
    return <Menu
            selectedKeys={selectedKeys}
            onClick={onMenuClick}
        >
        {getMenuSub(props.treeData)}
    </Menu>
}