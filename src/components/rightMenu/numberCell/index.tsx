import React from 'react'
import { Form, Button, Input } from 'antd'

export default () => {

    const onFinish = (values: any) => {
        const sheet = window.__MonkeyGrid__Instance.getSheet()
        const selectedRange = sheet.selectedRange
        if (selectedRange.length) {
            for (let i = selectedRange[0]; i <= selectedRange[2]; i++) {
                for (let j = selectedRange[1]; j <= selectedRange[3]; j++) {
                    sheet.setCellType(i, j, 'number')
                    sheet.setCellFormatter(i, j, values.format || '')
                    sheet.setCellValue(i, j, values.value, { paint: true })
                }
            }
        }
    }

    return <div>
        <h3>
            设置单元格数值
        </h3>
        <p style={{ margin: '10px', paddingLeft: '10px', color: '#999' }}>*请先选中一个单元格</p>
        <p style={{ margin: '10px', paddingLeft: '10px', color: '#999' }}>*使用##.##格式化的方式</p>
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
                    label="value"
                    name="value"
                >
                    <Input placeholder="35.6721"/>
                </Form.Item>
                <Form.Item
                    label="format"
                    name="format"
                >
                    <Input placeholder="##.##"/>
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