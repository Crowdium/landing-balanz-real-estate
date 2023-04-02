import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'invest-in-real-estate',
    templateUrl: './invest-in-real-estate.component.html',
    styleUrls: ['./invest-in-real-estate.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class InvestInRealEstateComponent implements OnInit {
    @Input() signUp: string;
    @Input() signIn: string;
    constructor() {}

    ngOnInit(): void {}
}
