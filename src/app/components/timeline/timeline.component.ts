import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

export interface ITimeline {
    step: string | InnerHTML;
    title: string;
    subtitle?: string;
    content: string;
}

@Component({
    selector: 'timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class TimelineComponent implements OnInit {
    @Input() data: ITimeline[];
    @Input() fullWidth: boolean = false;

    constructor() {}

    ngOnInit(): void {}
}
