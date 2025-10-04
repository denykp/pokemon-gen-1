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
    // colors: [
    //   "#6366f1", // indigo-500
    //   "#facc15", // yellow-400
    //   "#f97316", // orange-500
    //   "#10b981", // emerald-500
    //   "#ec4899", // pink-500
    // ],
    legend: {
      position: "bottom",
      labels: {
        colors: "#fff",
      },
    },
    theme: {
      mode: "light", // change based on DaisyUI theme if needed
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
