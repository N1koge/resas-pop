import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

import type {
  PrefName,
  PrefCode,
  Selected,
  PopData,
  ResasPrefRes,
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

  const handlePrefClick = (prefName: PrefName) => {};

  return (
    <ResasContext.Provider
      value={{
        prefectures,
        population,
        handlePrefClick,
      }}
    >
      {children}
    </ResasContext.Provider>
  );
};

const useResas = () => useContext(ResasContext);

export { ResasProvider, useResas };
