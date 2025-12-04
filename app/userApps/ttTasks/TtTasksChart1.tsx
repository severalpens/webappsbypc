import { useRef } from "react";
import type { Schema } from "../../../amplify/data/resource";
import '@aws-amplify/ui-react/styles.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import chart1Options from "./chart1Options";


function TtTasksChart1({ ttTaskTimeBlocks, ttTasks }: { ttTaskTimeBlocks: Array<Schema["TtTaskTimeBlock"]["type"]>, ttTasks: Array<Schema["TtTask"]["type"]> }) {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
    const chartOptions = chart1Options(ttTaskTimeBlocks, ttTasks);

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
            ref={chartComponentRef}
        />
    )
}

export default TtTasksChart1;

