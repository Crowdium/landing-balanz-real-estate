import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ITimeline } from 'src/app/components/timeline/timeline.component';
import { timelineData } from '../../constants/timeline';

@Component({
  selector: 'as-investment',
  templateUrl: './as-investment.component.html',
  styleUrls: ['./as-investment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AsInvestmentComponent implements OnInit {

  timelineData: ITimeline[];
  constructor() { }

  ngOnInit(): void {
    this.timelineData = timelineData;
  }

}
