import type { Schema } from "../../amplify/data/resource";
import type * as Highcharts from "highcharts";

function formatTooltipLabel(xValue: number, yValue: number) {
  const hours = Math.floor(yValue / 3600);
  const mins = Math.floor((yValue % 3600) / 60);
  const secs = yValue % 60;
  const date = new Date(xValue);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;
  return `${formattedDate}: ${hours > 0 ? hours + ':' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function formatYAxisLabel(value: number) {
  const mins = Math.floor(value / 60);
  const secs = value % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function chart1Options(raceTimes: Array<Schema["RaceTime"]["type"]>) {
  
  const chartData = raceTimes.map(raceTime => {
    const raceDate = raceTime.RaceDate ? new Date(raceTime.RaceDate.toString()).getTime() : null;
    const yAxisValues = raceTime.RaceMins ? raceTime.RaceMins * 60 + (raceTime.RaceSecs || 0) : 0;
    return [raceDate, yAxisValues];
  }).filter((data): data is [number, number] => data[0] !== null).sort((a, b) => a[0] - b[0]);

  const chartOptions = {
    accessibility: {
      enabled: false
    },

    title: {
      text: 'Race Times'
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Race Date'
      }
    },
    yAxis: {
      title: {
        text: 'Race Time'
      },
      labels: {
        formatter: function (this: Highcharts.AxisLabelsFormatterContextObject) {
          return formatYAxisLabel(this.value as number);
        }
      }       
    },
    series: [{
      name: 'Race Time',
      data: chartData,
      regression: true,
      regressionSettings: {
        type: 'linear',
        color: 'rgba(223, 83, 83, .9)',
        name: 'Trend Line'
      },
    }]
  };
  return chartOptions;
}

export default chart1Options;