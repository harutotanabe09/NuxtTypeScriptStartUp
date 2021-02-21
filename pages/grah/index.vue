<template>
  <div class="app">
    <div class="small">
      <doughnut-chart :chart-data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chartOptions: {
        maintainAspectRatio: false,
        animation: {
          duration: 2500,
          easing: 'easeInQuart',
        },
      },
    }
  },
  computed: {
    chartData() {
      return {
        labels: ['Java', 'PHP', 'Python', 'JavaScript'],
        datasets: [
          {
            data: [50, 30, 10, 10],
            backgroundColor: [
              'rgba(19, 52, 237, 1)',
              'rgba(237, 66, 87, 1)',
              'rgba(31, 237, 75, 1)',
              'rgba(237, 185, 19, 1)',
            ],
            borderWidth: 5,
            hoverBorderWidth: 0,
          },
        ],
      }
    },
  },
}
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
