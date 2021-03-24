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

type ChartData = { label: string; values: { name: string; value: number }[] };

type ChartParam = {
  xLabel: string;
  yLabel: string;
  data: ChartData[];
};

const renderLineChart = ({ xLabel, yLabel, data }: ChartParam) => (
  <ResponsiveContainer>
    <LineChart margin={{ top: 40, right: 70 }}>
      <XAxis
        dataKey="name"
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
        <Line dataKey="value" data={d.values} name={d.label} key={d.label} />
      ))}
    </LineChart>
  </ResponsiveContainer>
);

const sampleGraphData: ChartData[] = [
  {
    label: 'foo',
    values: [
      { name: 'a', value: 10 },
      { name: 'b', value: 20 },
      { name: 'c', value: 30 },
      { name: 'd', value: 40 },
      { name: 'e', value: 50 },
      { name: 'f', value: 60 },
    ],
  },
  {
    label: 'bar',
    values: [
      { name: 'a', value: 60 },
      { name: 'b', value: 50 },
      { name: 'c', value: 40 },
      { name: 'd', value: 30 },
      { name: 'e', value: 20 },
      { name: 'f', value: 10 },
    ],
  },
];

const PopulationTransitionGraph = () => (
  <div>
    <p>Population Transition Graph</p>
    {renderLineChart({
      xLabel: 'xLabel',
      yLabel: 'yLabel',
      data: sampleGraphData,
    })}
  </div>
);

export default PopulationTransitionGraph;
