import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'responsible-project',
    templateUrl: './responsible-project.component.html',
    styleUrls: ['./responsible-project.component.scss'],
})
export class ResponsibleProjectComponent implements OnInit {
    @Input() data: any[];

    constructor() {}

    ngOnInit(): void {}
}
