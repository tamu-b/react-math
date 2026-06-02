import type { FC } from 'react'
import styles from './index.module.css'

type Props = {
  base: number
  exponent: number
}

export const Exponent: FC<Props> = ({ base, exponent }) => {
  return (
    <div className={styles.exponent}>
      <div>{base}</div>
      <div className={styles.sup}>{exponent}</div>
    </div>
  )
}
