import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CollapseMenuComponent } from './collapse-menu/collapse-menu.component';
import { PorcentageBarComponent } from './porcentage-bar/porcentage-bar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { GridModule } from './grid/grid.module';
import { NavbarModule } from './navbar/navbar.module';
import { CardModule } from './card/card.module';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    ButtonComponent,
    CollapseMenuComponent,
    PorcentageBarComponent,
    TimelineComponent,
  ],
  imports: [
    CommonModule,
    GridModule,
    NavbarModule,
    CardModule,
    PipesModule
  ],
  exports:[
    ButtonComponent,
    CollapseMenuComponent,
    PorcentageBarComponent,
    TimelineComponent,
    GridModule,
    NavbarModule,
    CardModule
  ]
})
export class ComponentsModule { }
