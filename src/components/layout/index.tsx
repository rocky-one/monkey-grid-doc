import React from 'react'
import * as styles from './index.module.less'

export default ({ children }: any) => (
  <div className={styles.layout}>
    <header className={styles.header}>
    </header>
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        {children}
      </div>
    </div>
  </div>
)