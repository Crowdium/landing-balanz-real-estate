import { viewClassName } from '@angular/compiler';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'icon-value',
    templateUrl: './icon-value.component.html',
    styleUrls: ['./icon-value.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class IconValueComponent implements OnInit {
    @Input() className?: string;

    constructor() {}

    ngOnInit(): void {}
}
