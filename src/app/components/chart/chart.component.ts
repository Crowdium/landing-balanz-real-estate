import { Component, OnInit, NgZone, PLATFORM_ID, Inject, Input, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
    selector: 'cp-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    @Input() data:any[];

    private chart: am4charts.XYChart

    private dateAxis: am4charts.DateAxis;
    private valueAxis: am4charts.ValueAxis;
    private series: am4charts.LineSeries;

    @HostListener('window:resize', ['$event'])
    onResize(){
        
    }

    constructor( @Inject(PLATFORM_ID) private platformId, private zone:NgZone ) { }

    browserOnly(f: () => void) {
        if (isPlatformBrowser(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                f();
            });
        }
    }

    ngOnInit(): void {

        this.browserOnly(() => {
            am4core.useTheme(am4themes_animated);

            this.chart = am4core.create("chart", am4charts.XYChart);

            this.chart.data = this.data;

            this.chart.dateFormatter.inputDateFormat = "yyyy";
            this.chart.responsive.enabled = true;

            this.dateAxis = this.chart.xAxes.push(new am4charts.DateAxis());
            this.valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());

            this.valueAxis.numberFormatter = new am4core.NumberFormatter();
            this.valueAxis.numberFormatter.numberFormat = "#"; 

            this.series = this.chart.series.push(new am4charts.LineSeries());
            this.series.dataFields.valueY = "value";
            this.series.dataFields.dateX = "date";
            this.series.tooltipText = "Valor m2: [bold]{value.formatNumber('#')}[/]"
            this.series.strokeWidth = 3;
            this.series.minBulletDistance = 15;
            this.series.stroke = am4core.color("#002162");

            this.series.tooltip.background.cornerRadius = 0;
            this.series.tooltip.background.strokeOpacity = 1;
            this.series.tooltip.getFillFromObject = false;
            this.series.tooltip.getStrokeFromObject = false;
            this.series.tooltip.pointerOrientation = "horizontal";
            this.series.tooltip.background.fill = am4core.color("#ffffff");
            this.series.tooltip.background.stroke = am4core.color("#002162");
            this.series.tooltip.background.strokeWidth = 2;
            this.series.tooltip.label.fill = am4core.color("#002162");
            this.series.tooltip.label.minWidth = 20;
            this.series.tooltip.label.fontSize = 14;
            this.series.tooltip.label.minHeight = 20;
            this.series.tooltip.label.textAlign = "middle";
            this.series.tooltip.label.textValign = "middle";

            this.chart.cursor = new am4charts.XYCursor();
            this.chart.cursor.behavior = "zoomX";
            this.chart.cursor.xAxis = this.dateAxis;
            this.chart.cursor.fullWidthLineX = false;
            this.chart.cursor.lineX.stroke = am4core.color("#CC0000");
            this.chart.cursor.lineX.strokeWidth = 1;
            this.chart.cursor.lineX.strokeOpacity = 1;
            this.chart.cursor.lineX.strokeDasharray = "";
            this.chart.cursor.lineY.disabled = true;

            this.valueAxis.cursorTooltipEnabled = false;

            this.dateAxis.start = 0;
            this.dateAxis.keepSelection = true;
            this.dateAxis.tooltip.background.fill = am4core.color("#CC0000");
            this.dateAxis.tooltip.background.stroke = am4core.color("#CC0000");
            this.dateAxis.tooltip.background.pointerLength = 0;
            if(this.dateAxis.pixelWidth <= 642 && this.dateAxis.pixelWidth > 435){
                this.dateAxis.gridIntervals.setAll([{ timeUnit: "year", count: 1 },{ timeUnit: "year", count: 5 }]);
            }else if(this.dateAxis.pixelWidth <= 435){
                this.dateAxis.gridIntervals.setAll([{ timeUnit: "year", count: 1 },{ timeUnit: "year", count: 10 }]);
            }else if(this.dateAxis.pixelWidth > 642){
                this.dateAxis.gridIntervals.setAll([{ timeUnit: "year", count: 1 },{ timeUnit: "year", count: 3 }]);
            }
            

            this.chart.responsive.rules.push({
                relevant: function(target){
                    return true;
                },
                state: function(target, stateId){
                    if(target.pixelWidth <= 642 && target.pixelWidth > 435){
                        if(target instanceof am4charts.DateAxis){
                            let state = target.states.create(stateId);
                            target.gridIntervals.setAll([{ timeUnit: "year", count: 1 },{ timeUnit: "year", count: 5 }]);
                            return state;
                        }
                        if (target instanceof am4charts.AxisRendererY) {
                            var state = target.states.create(stateId);
                            state.properties.inside = true;
                            return state;
                        }
                    }else if(target.pixelWidth <= 435){
                        if(target instanceof am4charts.DateAxis){
                            let state = target.states.create(stateId);
                            target.gridIntervals.setAll([{ timeUnit: "year", count: 1 },{ timeUnit: "year", count: 10 }]);
                            return state;
                        }
                    }else if(target.pixelWidth > 642){
                        if(target instanceof am4charts.DateAxis){
                            let state = target.states.create(stateId);
                            target.gridIntervals.setAll([{ timeUnit: "year", count: 1 },{ timeUnit: "year", count: 3 }]);
                            return state;
                        }
                        if (target instanceof am4charts.AxisRendererY) {
                            var state = target.states.create(stateId);
                            state.properties.inside = false;
                            return state;
                        }
                    }

                }
            })

        });
    }

    ngOnDestroy() {
        // Clean up chart when the component is removed
        this.browserOnly(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
    }
}
