import MainLayout from '../components/layouts/MainLayout';

import PrefectureCheckboxes from '../components/PrefectureCheckboxes';
import PopulationTransitionGraph from '../components/PopulationTransitionGraph';

const Home = () => (
  <MainLayout>
    <PrefectureCheckboxes />
    <PopulationTransitionGraph />
  </MainLayout>
);

export default Home;
