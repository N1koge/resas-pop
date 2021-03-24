import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => <div>{children}</div>;

export default MainLayout;
