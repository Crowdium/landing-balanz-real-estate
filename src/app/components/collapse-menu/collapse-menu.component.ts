import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

export interface ICollapseMenuData {
    title: string;
    content: string;
}

@Component({
    selector: 'collapse-menu',
    templateUrl: './collapse-menu.component.html',
    styleUrls: ['./collapse-menu.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CollapseMenuComponent implements OnInit {
    @Input() data: ICollapseMenuData;

    index: number = 0;
    arrowIcon = 'assets/arrow.png';
    constructor() {}

    ngOnInit(): void {}
    handleClick(index: number) {
        this.index = index;
    }
}
