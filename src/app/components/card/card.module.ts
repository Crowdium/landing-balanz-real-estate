import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHeadComponent } from './card-head/card-head.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardComponent } from './card.component';



@NgModule({
  declarations: [
    CardHeadComponent, 
    CardBodyComponent, 
    CardFooterComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardHeadComponent, 
    CardBodyComponent, 
    CardFooterComponent,
    CardComponent
  ]
})
export class CardModule { }
