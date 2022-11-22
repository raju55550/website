import React from 'react';
import { Chart } from "react-google-charts";

function BarChart({ chartData }) {
  return <Chart data={chartData} />;
}

export default BarChart;
