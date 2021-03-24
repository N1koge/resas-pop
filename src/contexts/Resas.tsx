import { createContext, useCallback, useContext, useState } from 'react';
import type { ReactNode } from 'react';

import type {
  PrefName,
  PrefCode,
  Selected,
  PopData,
  ResasPrefRes,
  ResasPopRes,
} from '../interfaces/resas';

type PrefMap = Map<PrefName, { prefCode: PrefCode; selected: Selected }>;
type FetchMap = Map<PrefCode, boolean>;

interface ResasContextInterface {
  prefectures: PrefMap;
  population: PopData[];
  handlePrefClick: (perfName: PrefName) => void;
}

type Props = {
  children: ReactNode;
  prefRes: ResasPrefRes;
};

const ResasContext = createContext<ResasContextInterface>(null);

const initialPrefs = (prefRes: ResasPrefRes): PrefMap =>
  new Map(
    prefRes.result.map((pref) => [
      pref.prefName,
      {
        prefCode: pref.prefCode,
        selected: false,
      },
    ])
  );

const initialFetch = (prefRes: ResasPrefRes): FetchMap =>
  new Map(prefRes.result.map((pref) => [pref.prefCode, false]));

const ResasProvider = ({ children, prefRes }: Props) => {
  const [prefectures, setPrefectures] = useState<PrefMap>(
    initialPrefs(prefRes)
  );
  const [population, setPopulation] = useState<PopData[]>([]);
  const [fetched, setFetched] = useState<FetchMap>(initialFetch(prefRes));

  const toggleSelect = (prefName: PrefName): void => {
    const pref = prefectures.get(prefName);
    pref.selected = !pref.selected;
    setPrefectures(new Map(prefectures.set(prefName, pref)));
  };

  const handleFetchPop = async (prefName: PrefName): Promise<void> => {
    const { prefCode } = prefectures.get(prefName);
    if (!fetched.get(prefCode)) {
      const res = await fetch(`/api/resas/population/${prefCode}`);
      const data: ResasPopRes = await res.json();
      const popResData = data.result.data.find((pop) => pop.label == '総人口');

      population.push({ prefName, data: popResData.data });

      setPopulation(Array.from(population));
      setFetched(fetched.set(prefCode, true));
    }
  };

  const handlePrefClick = useCallback(async (prefName: PrefName) => {
    toggleSelect(prefName);
    await handleFetchPop(prefName);
  }, []);

  const isSelected = (prefName: PrefName): Selected =>
    prefectures.get(prefName).selected;

  const filterPop = (): PopData[] =>
    population.filter((pop) => isSelected(pop.prefName));

  return (
    <ResasContext.Provider
      value={{
        prefectures,
        population: filterPop(),
        handlePrefClick,
      }}
    >
      {children}
    </ResasContext.Provider>
  );
};

const useResas = () => useContext(ResasContext);

export { ResasProvider, useResas };
