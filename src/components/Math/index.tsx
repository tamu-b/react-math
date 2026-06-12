import type { FC, PropsWithChildren } from 'react';

import styles from './index.module.css';

export const Math: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.math}>{children}</div>;
};
