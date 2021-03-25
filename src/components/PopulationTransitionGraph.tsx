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

type ChartParams = {
  xLabel: string;
  yLabel: string;
  data: PopData[];
};

const renderLineChart = ({ xLabel, yLabel, data }: ChartParams) => (
  <ResponsiveContainer>
    <LineChart margin={{ top: 40, right: 70 }}>
      <XAxis
        dataKey="year"
        allowDuplicatedCategory={false}
        padding={{ right: 20 }}
      >
        <Label value={xLabel} position="right" />
      </XAxis>
      <YAxis dataKey="value" padding={{ top: 20 }}>
        <Label value={yLabel} position="top" />
      </YAxis>
      <Tooltip />
      <Legend />
      {data.map((d) => (
        <Line
          dataKey="value"
          data={d.data}
          name={d.prefName}
          key={d.prefName}
        />
      ))}
    </LineChart>
  </ResponsiveContainer>
);

const PopulationTransitionGraph = () => {
  const { population } = useResas();

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <p>Population Transition Graph</p>
      {renderLineChart({
        xLabel: '年度',
        yLabel: '人口数',
        data: population,
      })}
    </div>
  );
};

export default PopulationTransitionGraph;
