import type { ReactNode } from 'react';
import AppBar from '../AppBar';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div>
    <AppBar />
    {children}
  </div>
);

export default Layout;
