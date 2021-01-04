import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CollapseMenuComponent } from './collapse-menu/collapse-menu.component';
import { PorcentageBarComponent } from './porcentage-bar/porcentage-bar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NavbarModule } from './navbar/navbar.module';
import { CardModule } from './card/card.module';
import { PipesModule } from '../pipes/pipes.module';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [
    ButtonComponent,
    CollapseMenuComponent,
    PorcentageBarComponent,
    TimelineComponent,
    ChartComponent,
  ],
  imports: [
    CommonModule,
    NavbarModule,
    CardModule,
    PipesModule
  ],
  exports:[
    ButtonComponent,
    CollapseMenuComponent,
    PorcentageBarComponent,
    TimelineComponent,
    NavbarModule,
    CardModule,
    ChartComponent
  ]
})
export class ComponentsModule { }
