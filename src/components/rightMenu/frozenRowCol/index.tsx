import React from 'react'
import { Form, Button, InputNumber } from 'antd'

export default () => {

    const onFinish = (values: any) => {
        const sheet = window.__MonkeyGrid__Instance.getSheet()
        values.row >= 0 && sheet.setFrozenRowCount(values.row)
        values.col >= 0 && sheet.setFrozenColCount(values.col)
    }

    return <div>
        <h3>
            设置冻结行列
        </h3>
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
                    label="冻结行数"
                    name="row"
                >
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item
                    label="冻结列数"
                    name="col"
                >
                    <InputNumber min={0} />
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