import type { Schema } from "../../../amplify/data/resource";



function chart1Options(ttTaskTimeBlocks: Array<Schema["TtTaskTimeBlock"]["type"]>, ttTasks: Array<Schema["TtTask"]["type"]>) {
    const distinctTaskIds = [...new Set(ttTaskTimeBlocks.map(ttTaskTimeBlock => ttTaskTimeBlock.TtTaskId))];
    const correspondingTaskNames = distinctTaskIds.map(taskId => {
        const task = ttTasks.find(ttTask => ttTask.id === taskId);
        return task?.TaskName ?? 'Unknown';
    }
    );
    const taskTimes = distinctTaskIds.map(taskId => {
        const taskTime = ttTaskTimeBlocks
            .filter(ttTaskTimeBlock => ttTaskTimeBlock.TtTaskId === taskId)
            .reduce((acc, ttTaskTimeBlock) => {
                const startTime = new Date(ttTaskTimeBlock.StartTime ?? new Date()).getTime();
                const endTime = ttTaskTimeBlock.EndTime ? new Date(ttTaskTimeBlock.EndTime).getTime() : new Date().getTime();
                return acc + (endTime - startTime);
            }, 0);
        const taskTimeConvertedToMinutes = taskTime / 1000 / 60;
        return taskTimeConvertedToMinutes;
    });

    
const chartOptions = {
    accessibility: {
        enabled: false
      },
  
  
  chart: {
      type: 'column'
  },
  title: {
      text: 'Time Spent on Tasks',
      align: 'left'
  },
  xAxis: {
      categories: correspondingTaskNames,
      crosshair: true,
      accessibility: {
          description: 'TaskIds'
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Time spent (Minutes)'
      }
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [
      {
          name: 'taskTime',
          data: taskTimes
      }
  ]
};

return chartOptions;
  }
export default chart1Options;  