import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import * as styles from './index.module.less'

interface MergeCell {
}

export default (props: MergeCell) => {
   
    return <div>
        <p>
            选择一个区域进行合并单元格和取消单元格
        </p>
        <Button>合并单元格</Button>
        <Button>取消合并</Button>
    </div>
}