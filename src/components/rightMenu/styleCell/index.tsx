import React from 'react'
import { Form, Button, Input } from 'antd'

export default () => {

    const onFinish = (values: any) => {
        const sheet = window.__MonkeyGrid__Instance.getSheet()
        const selectedRange = sheet.selectedRange
        if (selectedRange.length) {
            const style: any = {}
            Object.keys(values).forEach(key => {
                if (values[key]) {
                    if (key === 'fontSize') {
                        style[key] = values[key] + 'px'
                    } else if (key === 'fontWeight') {
                        style[key] = Number(values[key])
                    } else {
                        style[key] = values[key]
                    }
                }
            })
            for (let i = selectedRange[0]; i <= selectedRange[2]; i++) {
                for (let j = selectedRange[1]; j <= selectedRange[3]; j++) {
                    sheet.setCellStyle(i, j, {
                        ...style
                    })
                }
            }
        }
    }

    return <div>
        <h3>
            设置单元格样式
        </h3>
        <p style={{margin: '10px',paddingLeft:'10px', color:'#999'}}>*请先选中一个单元格</p>
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="字体颜色"
                    name="color"
                >
                    <Input placeholder="#000000"/>
                </Form.Item>
                <Form.Item
                    label="字体大小"
                    name="fontSize"
                >
                    <Input placeholder="14px"/>
                </Form.Item>
                <Form.Item
                    label="字体粗细"
                    name="fontWeight"
                >
                    <Input placeholder="600"/>
                </Form.Item>
                <Form.Item
                    label="背景颜色"
                    name="backgroundColor"
                >
                    <Input placeholder="#CCCCCC"/>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        确定
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
}