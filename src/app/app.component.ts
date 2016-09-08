import { Component, OnInit } from '@angular/core';

import { Chart3DComponent } from './3d-chart';

declare var Plotly;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [Chart3DComponent]
})
export class AppComponent implements OnInit {

  data = [];
  interval;

  private layout = {
    bargap: 0,
    autosize: true,
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    margin: { l: 0, r: 0, b: 0, t: 0 },
    xaxis: {
      autorange: true,
      showgrid: false,
      zeroline: false,
      showline: false,
      autotick: true,
      ticks: '',
      showticklabels: false
    },
    yaxis: {
      autorange: true,
      showgrid: false,
      zeroline: false,
      showline: false,
      autotick: true,
      ticks: '',
      showticklabels: false
    }
  };

  ngOnInit() {
    Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/3d-scatter.csv', (err, rows) => {

      var trace1 = {
        x: this.unpack(rows, 'x1'), y: this.unpack(rows, 'y1'), z: this.unpack(rows, 'z1'),
        mode: 'markers',
        marker: {
          size: 12,
          line: {
          color: 'rgba(217, 217, 217, 0.14)',
          width: 0.5
        },
          opacity: 0.8
        },
        type: 'scatter3d'
      };

      var trace2 = {
        x: this.unpack(rows, 'x2'), y: this.unpack(rows, 'y2'), z: this.unpack(rows, 'z2'),
        mode: 'markers',
        marker: {
          color: 'rgb(127, 127, 127)',
          size: 12,
          symbol: 'circle',
          line: {
          color: 'rgb(204, 204, 204)',
          width: 1
        },
          opacity: 0.8
        },
        type: 'scatter3d'
      };

      this.data = [trace1, trace2];
      //this.updateData(200);
    });
  }

  unpack(rows, key) {
    return rows.map(row => row[key]);
  }

  updateData (delay = 500) {
    const update = () => {
      this.data.map((trace) => {
        trace.x.sort(() => .5 - Math.random());
        trace.y.sort(() => .5 - Math.random());
        trace.z.sort(() => .5 - Math.random());
        return trace;
      });
      this.data = [...this.data];
    };

    this.interval = setInterval(update, delay);
  }

}
