import { Component, OnInit } from '@angular/core';
import { chartData } from 'src/app/constants/chart';

@Component({
    selector: 'chart-real-estate',
    templateUrl: './chart-real-estate.component.html',
    styleUrls: ['./chart-real-estate.component.scss'],
})
export class ChartRealEstateComponent implements OnInit {
    chartData: any[];
    constructor() {}

    ngOnInit(): void {
        this.chartData = chartData;
    }
    sort() {
        let array = [];
        array = this.chartData.sort((a, b) => Number(b.date) - Number(a.date));
        return array;
    }
}
