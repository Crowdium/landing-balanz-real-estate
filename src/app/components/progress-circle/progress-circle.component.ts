import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'progress-circle',
    templateUrl: './progress-circle.component.html',
    styleUrls: ['./progress-circle.component.scss'],
})
export class ProgressCircleComponent implements OnInit {
    @Input() size: number = 84;
    @Input() progress: number;

    pct: number = 0;
    c: number = 0;
    r: number = 50;

    toRadians: number = Math.PI / 180;
    description: any;
    translate: string = `translate(${this.r}, ${this.r})`;

    constructor() {}

    ngOnInit(): void {
        this.draw();
    }

    draw() {
        /*
    console.log((this.r * 360) / 100)
    let degrees = this.progress  //* 3.5999;
    let rad = degrees * this.toRadians;
    let x = (Math.sin(rad) * this.r).toFixed(2);
    let y = (Math.cos(rad) * this.r).toFixed(2);
    let lenghty = Number(degrees > 180);
    this.description = ['M', 0, 0, 'v', -this.r, 'A', this.r, this.r, 1, lenghty, 1, x, y, 'z'];
    */
        this.c = Math.PI * (this.r * 2);

        this.pct = ((100 - this.progress) / 100) * this.c;
    }
}
