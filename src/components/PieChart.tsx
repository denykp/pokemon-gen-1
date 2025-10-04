import React from "react";
import Chart from "react-apexcharts";

interface PieChartProps {
  labels: string[];
  series: number[];
  type: "pie" | "donut";
}

const PieChart: React.FC<PieChartProps> = ({ labels, series, type }) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: type,
      background: "transparent",
    },
    labels,
    legend: {
      position: "bottom",
      labels: {
        colors: "#fff",
      },
    },
    theme: {
      mode: "light",
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type={type}
      width="100%"
      className="glass rounded-2xl text-white py-4"
    />
  );
};

export default PieChart;
