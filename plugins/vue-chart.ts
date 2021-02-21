//https://github.com/tokyo-metropolitan-gov/covid19/blob/cad0e5138051724909897ececab98ae3ef475738/plugins/vue-chart.ts
import { Plugin } from '@nuxt/types'
import { ChartData, ChartOptions } from 'chart.js'
import Vue, { PropType } from 'vue'
import { Bar, Doughnut, Line, mixins } from 'vue-chartjs'

type ChartVCData = { chartData: ChartData }
type ChartVCMethod = {
  renderChart(chartData: ChartData, options: ChartOptions): void
}
type ChartVCComputed = unknown
type ChartVCProps = { options: Object; displayLegends: boolean[] | null }

const VueChartPlugin: Plugin = ({ app }) => {
  createCustomChart()
}

const rgba0 = 'rgba(255,255,255,0)'
const rgba1 = 'rgba(255,255,255,1)'

const createCustomChart = () => {
  const { reactiveProp } = mixins

  const watchDisplayLegends = function (this: Vue, v?: boolean[] | null) {
    if (v == null) {
      return
    }
    if (v.length === 0) {
      return
    }
    const chart: Chart = this.$data._chart
    v.forEach((display, i) => {
      chart.getDatasetMeta(i).hidden = !display
    })
    chart.update()
  }

  const generalChart = Vue.component<
    ChartVCData,
    ChartVCMethod,
    ChartVCComputed,
    ChartVCProps
  >('general-chart', {
    mixins: [reactiveProp],
    props: {
      displayLegends: {
        type: Array,
        default: () => null,
      },
      options: {
        type: Object as PropType<ChartOptions>,
        default: () => {},
      },
    },
    watch: {
      displayLegends: watchDisplayLegends,
      width() {
        setTimeout(() => this.$data._chart.resize())
        this.$parent.$emit('update-width')
      },
    },
    mounted() {
      setTimeout(() => this.renderChart(this.chartData, this.options))
    },
  })
  Vue.component<ChartVCData, ChartVCMethod, ChartVCComputed, ChartVCProps>(
    'line-chart',
    {
      mixins: [reactiveProp, Line, generalChart],
    }
  )
  /*
  Vue.component<ChartVCData, ChartVCMethod, ChartVCComputed, ChartVCProps>(
    'bar',
    {
      mixins: [reactiveProp, Bar, generalChart],
    }
  )
  */
  Vue.component<ChartVCData, ChartVCMethod, ChartVCComputed, ChartVCProps>(
    'doughnut-chart',
    {
      mixins: [reactiveProp, Doughnut, generalChart],
    }
  )
}
export default VueChartPlugin

