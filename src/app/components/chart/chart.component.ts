import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

// The dataMin and dataMax are our internal properties and they are not
// avialable in the public types. To fix that we could just create our own
// type that will extend the Highcharts.Axis type.
interface ExtendedAxis extends Highcharts.Axis {
  dataMin: number;
  dataMax: number;
}

// Introducing a custom property.
interface ExtendedYAxis extends Highcharts.YAxisOptions {
  myCustomProperty: boolean;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})


export class ChartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    xAxis: {

      // Without ExtendedAxis type (Highcharts.Axis is the default one)
      // TS will throw the following error:
      // "Property 'dataMin' does not exist on type 'Axis'."

    },
    yAxis: {
      myCustomProperty: false
    } as ExtendedYAxis,
    series: [
      {
        type: 'line',
        data: [ 13, 20, 9, 4, 5 ]
      }
    ]
  };
}
