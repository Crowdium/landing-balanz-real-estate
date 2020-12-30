import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { ContainersModule } from '../containers/containers.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeComponent, 
    RealEstateComponent
  ],
  imports: [
    CommonModule,
    ContainersModule,
    ComponentsModule,
  ],
  exports: [
    HomeComponent, 
    RealEstateComponent
  ]
})
export class ScreensModule { }
