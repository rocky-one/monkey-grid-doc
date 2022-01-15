import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import * as styles from './index.module.less'


export default () => {
    
    const onMerge = () => {
        const sheet = window.__MonkeyGrid__Instance.getSheet()
        const selectedRange = sheet.selectedRange
        if (selectedRange.length) {
            sheet.setMergeCellsByRange()
        }
    }

    const onUnMerge = () => {
        const sheet = window.__MonkeyGrid__Instance.getSheet()
        const selectedRange = sheet.selectedRange
        if (selectedRange.length) {
            sheet.removeMergeCellsByRange()
        }
    }

    return <div>
        <h3>
            选择一个区域进行合并单元格和取消单元格
        </h3>
        <div className={styles.btns}>
            <Button type='primary' onClick={onMerge}>合并单元格</Button>
            <Button type='primary' style={{marginLeft:'20px'}} onClick={onUnMerge}>取消合并</Button>
        </div>
    </div>
}