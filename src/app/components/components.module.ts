import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CollapseMenuComponent } from './collapse-menu/collapse-menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PorcentageBarComponent } from './porcentage-bar/porcentage-bar.component';
import { TimelineComponent } from './timeline/timeline.component';



@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    CollapseMenuComponent,
    NavbarComponent,
    PorcentageBarComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    CardComponent,
    CollapseMenuComponent
  ]
})
export class ComponentsModule { }
