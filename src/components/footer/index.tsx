import React, { useEffect, useState } from 'react'
import * as styles from './index.module.less'

export default () => {
    const [text, setText] = useState('京ICP备2022005360号-1')
    
    useEffect(() => {
        if (window.location.href.indexOf('yunshangsky') > -1) {
            setText('京ICP备2022005360号-2')
        }
    }, []);

    const onClick = () => {
        window.open('https://beian.miit.gov.cn/')
    }
    return <div className={styles.footer} onClick={onClick}>
        {text}
    </div>
}