import type { ReactNode } from 'react';

import styles from './MainLayout.module.scss';

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => (
  <div className={styles.root}>{children}</div>
);

export default MainLayout;
