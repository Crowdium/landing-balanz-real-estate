import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'icon-doughnut',
    templateUrl: './icon-doughnut.component.html',
    styleUrls: ['./icon-doughnut.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class IconDoughnutComponent implements OnInit {
    @Input() className: string;

    constructor() {}

    ngOnInit(): void {}
}
