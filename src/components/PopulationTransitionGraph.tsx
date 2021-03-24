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

const sampleGraphData: PopData[] = [
  {
    prefName: 'foo',
    data: [
      { year: 1900, value: 10 },
      { year: 1920, value: 20 },
      { year: 1940, value: 30 },
      { year: 1960, value: 40 },
      { year: 1980, value: 50 },
      { year: 2000, value: 60 },
    ],
  },
  {
    prefName: 'bar',
    data: [
      { year: 1900, value: 60 },
      { year: 1920, value: 50 },
      { year: 1940, value: 40 },
      { year: 1960, value: 30 },
      { year: 1980, value: 20 },
      { year: 2000, value: 10 },
    ],
  },
];

const PopulationTransitionGraph = () => (
  <div style={{ width: '100%', height: '500px' }}>
    <p>Population Transition Graph</p>
    {renderLineChart({
      xLabel: '年度',
      yLabel: '人口数',
      data: sampleGraphData,
    })}
  </div>
);

export default PopulationTransitionGraph;
