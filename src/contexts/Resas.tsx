import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

import type {
  PrefName,
  PrefCode,
  Selected,
  PopData,
} from '../interfaces/resas';

interface ResasContextInterface {
  prefectures: PrefMap;
  population: PopData[];
  handlePrefClick: (perfName: PrefName) => void;
}

type PrefMap = Map<PrefName, { prefCode: PrefCode; selected: Selected }>;

type Props = {
  children: ReactNode;
};

const ResasContext = createContext<ResasContextInterface>(null);

const ResasProvider = ({ children }: Props) => {
  const [prefectures, setPrefectures] = useState<PrefMap>(new Map());
  const [population, setPopulation] = useState<PopData[]>([]);

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
