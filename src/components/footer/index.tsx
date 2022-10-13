import React, { useEffect, useState } from 'react'
import * as styles from './index.module.less'

export default () => {

    const onClick = () => {
        window.open('https://beian.miit.gov.cn/')
    }
    return <div className={styles.footer} onClick={onClick}>
        京ICP备2022005360号-1
    </div>
}