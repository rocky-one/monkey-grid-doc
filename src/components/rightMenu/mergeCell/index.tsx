import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import * as styles from './index.module.less'

interface MergeCell {
}

export default (props: MergeCell) => {
    
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
        <p>
            选择一个区域进行合并单元格和取消单元格
        </p>
        <div className={styles.btns}>
            <Button onClick={onMerge}>合并单元格</Button>
            <Button style={{marginLeft:'20px'}} onClick={onUnMerge}>取消合并</Button>
        </div>
    </div>
}