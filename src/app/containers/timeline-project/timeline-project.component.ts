import { Component, Input, OnInit } from '@angular/core';
import { ITimeline } from 'src/app/components/timeline/timeline.component';

@Component({
    selector: 'timeline-project',
    templateUrl: './timeline-project.component.html',
    styleUrls: ['./timeline-project.component.scss'],
})
export class TimelineProjectComponent implements OnInit {
    @Input() data: ITimeline[];

    constructor() {}

    ngOnInit(): void {}
}
