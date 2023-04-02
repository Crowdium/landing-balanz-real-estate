import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'porcentage-bar',
    templateUrl: './porcentage-bar.component.html',
    styleUrls: ['./porcentage-bar.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PorcentageBarComponent implements OnInit {
    @Input() min: number;
    @Input() max: number;
    @Input() progress: number;

    constructor() {}

    ngOnInit(): void {}
}
