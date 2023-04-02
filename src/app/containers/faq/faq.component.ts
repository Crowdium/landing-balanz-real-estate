import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ICollapseMenuData } from 'src/app/components/collapse-menu/collapse-menu.component';

@Component({
    selector: 'faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class FaqComponent implements OnInit {
    @Input() faq: ICollapseMenuData[];
    constructor() {}

    ngOnInit(): void {}
}
