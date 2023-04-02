import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'card-head',
    templateUrl: './card-head.component.html',
    styleUrls: ['./card-head.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CardHeadComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
