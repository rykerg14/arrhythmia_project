import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Brush, Line, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid } from 'recharts';


// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', -0.065),
  createData('00:011', -0.065),
  createData('00:019', -0.08),
  createData('00:028', -0.085),
  createData('00:033', -0.075),
  createData('00:039', -0.07),
  createData('00:05', -0.05),
  createData('00:056', -0.04),
  createData('00:061', -0.075),
  createData('00:075', -0.08),
  createData('00:086', -0.095),
  createData('00:97', -0.135),
  createData('00:103', -0.095),
  createData('00:114', -0.125),
  createData('00:13', -0.14),
  createData('00:14', -0.145),
  createData('00:15', -0.13),
  createData('00:16', -0.16),
  createData('00:17', -0.205),
  createData('00:18', -0.29),
  createData('00:19', -0.035),
  createData('00:20', -0.31),
  createData('00:21', -0.58),
  createData('00:22', -0.23),
  createData('00:23', -0.185),
  createData('00:24', -0.15),
  createData('00:25', -0.165),
  createData('00:26', -0.185),
  createData('00:27', -0.16),
  createData('00:28', -0.185),
  createData('00:29', -0.175),
  createData('00:30', -0.165),
  createData('00:31', -0.19),
  createData('00:32', -0.17),
  createData('00:33', -0.195),
  createData('00:34', -0.17),
  createData('00:35', -0.2),
  createData('00:36', -0.205),
  createData('00:37', -0.185),
];

export default function Chart2() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis type="number" stroke={theme.palette.text.secondary} domain={[-0.75, 0.25]}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              milliVolt (mV)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
          <Brush dataKey='time' height={15} stroke="#8884d8" endIndex={15}/>
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}