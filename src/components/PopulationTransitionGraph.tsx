import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  Legend,
} from 'recharts';

import type { PopData } from '../interfaces/resas';
import { useResas } from '../contexts/Resas';

import styles from './PopulationTransitionGraph.module.scss';

type ChartParams = {
  xLabel: string;
  yLabel: string;
  data: PopData[];
};

const renderLineChart = ({ xLabel, yLabel, data }: ChartParams) => {
  return (
    <ResponsiveContainer>
      <LineChart margin={{ top: 40, right: 70, left: 25 }}>
        <XAxis
          dataKey="year"
          allowDuplicatedCategory={false}
          padding={{ right: 30 }}
        >
          <Label value={xLabel} offset={10} position="right" />
        </XAxis>
        <YAxis dataKey="value" padding={{ top: 20 }}>
          <Label value={yLabel} position="top" />
        </YAxis>
        <Tooltip />
        <Legend
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={{ top: '10%', right: 0 }}
        />
        {data.map((d) => (
          <Line
            dataKey="value"
            data={d.data}
            dot={false}
            name={d.prefName}
            key={d.prefName}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

const PopulationTransitionGraph = () => {
  const { population } = useResas();

  return (
    <div className={styles.root}>
      {renderLineChart({
        xLabel: '年度',
        yLabel: '人口数',
        data: population,
      })}
    </div>
  );
};

export default PopulationTransitionGraph;
