import type { AppProps } from 'next/app';
import Layout from '../components/layouts/Layout';

import '../../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
