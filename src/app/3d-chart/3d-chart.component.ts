import { Component, Input, ElementRef } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';

declare var Plotly;

@Component({
  selector: 'chart-3d',
  templateUrl: '3d-chart.component.html'
})
export class Chart3DComponent implements OnInit {

  plotElement;

  constructor(private view: ElementRef) { }

  @Input() data;
  @Input() layout;

  ngOnInit() {
    this.plotElement = this.view.nativeElement.querySelector('#plot');
  }

  ngOnChanges() {
    if (this.data.length) {
      Plotly.newPlot(this.plotElement.id, this.data, this.layout);
    }
  }

}