import type { GetStaticProps } from 'next';

import type { ResasPrefRes } from '../interfaces/resas';
import { ResasProvider } from '../contexts/Resas';
import MainLayout from '../components/layouts/MainLayout';

import PrefectureCheckboxes from '../components/PrefectureCheckboxes';
import PopulationTransitionGraph from '../components/PopulationTransitionGraph';

type Props = {
  data: ResasPrefRes;
};

const Home = ({ data }: Props) => (
  <ResasProvider prefRes={data}>
    <MainLayout>
      <PrefectureCheckboxes />
      <PopulationTransitionGraph />
    </MainLayout>
  </ResasProvider>
);

export const getStaticProps: GetStaticProps = async () => {
  const { RESAS_API_KEY, RESAS_API_HOST, RESAS_PREF_PATH } = process.env;
  const uri = `${RESAS_API_HOST}/${RESAS_PREF_PATH}`;
  const headers = {
    'X-API-KEY': RESAS_API_KEY,
  };

  const res = await fetch(uri, { headers });
  const data: ResasPrefRes = await res.json();

  return { props: { data } };
};

export default Home;
