import type { FC, ReactNode } from 'react'
import styles from './index.module.css'

type Props = {
  numerator: ReactNode
  denominator: ReactNode
}

export const Fraction: FC<Props> = ({ numerator, denominator }) => {
  return (
    <div className={styles.fraction}>
      <div className={styles.numerator}>{numerator}</div>
      <div className={styles.bar} />
      <div className={styles.denominator}>{denominator}</div>
    </div>
  )
}
