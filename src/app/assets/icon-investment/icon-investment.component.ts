import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'icon-investment',
    templateUrl: './icon-investment.component.html',
    styleUrls: ['./icon-investment.component.scss'],
})
export class IconInvestmentComponent implements OnInit {
    @Input() className: string;

    constructor() {}

    ngOnInit(): void {}
}
