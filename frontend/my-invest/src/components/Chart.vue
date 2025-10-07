<template>
  <LineChart :chartData="testData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: "Home",
  components: { LineChart },
  setup() {
    const testData = {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
      datasets: [
        {
          label: "Series 1",
          data: [30, 40, 60, 70, 50, 80, 75],
          backgroundColor: function (context: any) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) {
              // This case happens on initial chart load
              return;
            }
            return createGradient(
              ctx,
              chartArea,
              "rgba(119, 206, 255, 0.8)",
              "rgba(119, 206, 255, 0.2)"
            );
          },
          borderColor: "#77CEFF",
          fill: true,
          tension: 0.4,
        },
        {
          label: "Series 2",
          data: [20, 35, 45, 30, 40, 50, 40], // Exemplo de dados para a segunda serie
          backgroundColor: function (context: any) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) {
              return;
            }
            return createGradient(
              ctx,
              chartArea,
              "rgba(32, 163, 151, 0.8)",
              "rgba(32, 163, 151, 0.2)"
            );
          },
          borderColor: "#20A397",
          fill: true,
          tension: 0.4,
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      scales: {
        x: {},
        y: {
          beginAtZero: true,
        },
      },
    };
    const createGradient = (
      ctx: CanvasRenderingContext2D,
      chartArea: any,
      colorStart: string,
      colorEnd: string
    ) => {
      const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
      gradient.addColorStop(0, colorEnd); // Cor de baixo (mais transparente)
      gradient.addColorStop(1, colorStart); // Cor de cima (mais opaca)
      return gradient;
    };

    return { testData, chartOptions };
  },
});
</script>
