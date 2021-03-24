import type { AppProps } from 'next/app';
import Layout from '../components/layouts/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
