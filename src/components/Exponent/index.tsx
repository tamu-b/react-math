import { useLayoutEffect, useRef, type FC, type ReactNode } from 'react'
import styles from './index.module.css'

type Props = {
  base: ReactNode
  exponent: ReactNode
}

export const Exponent: FC<Props> = ({ base, exponent }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const exponentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = exponentRef.current
    const container = containerRef.current
    const shift = el.getBoundingClientRect().height * 0.4
    container.style.paddingTop = `${shift}px`
    el.style.transform = `translateY(${-shift}px)`
  }, [])

  return (
    <div ref={containerRef} className={styles.exponent}>
      <div>{base}</div>
      <div ref={exponentRef} className={styles.sup}>
        {exponent}
      </div>
    </div>
  )
}
