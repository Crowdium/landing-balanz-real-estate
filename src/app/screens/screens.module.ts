import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { ContainersModule } from '../containers/containers.module';
import { ComponentsModule } from '../components/components.module';
import { InvestmentsScreensComponent } from './investments/investments.component';
import { HubProjectComponent } from './hub-project/hub-project.component';
import { InvestInRealEstateComponent } from '../containers/invest-in-real-estate/invest-in-real-estate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AssetsModule } from '../assets/assets.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../directives/directives.module';
import { HubCabildoIiScreen } from './hub-cabildo-ii/hub-cabildo-ii.screen';
import { VistaBelgranoScreen } from './vista-belgrano/vista-belgrano.screen';
import { VistaBelgranoMock } from './mock-screen/vista-belgrano/vista-belgrano.mock';

@NgModule({
  declarations: [
    HomeComponent, 
    RealEstateComponent, 
    InvestmentsScreensComponent, 
    HubProjectComponent,
    NotFoundComponent,
    HubCabildoIiScreen,
    VistaBelgranoScreen,
    VistaBelgranoMock
  ],
  imports: [
    CommonModule,
    ContainersModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AssetsModule,
    RouterModule,
    DirectivesModule
  ],
  exports: [
    HomeComponent, 
    RealEstateComponent,
    InvestInRealEstateComponent,
    HubProjectComponent,
    NotFoundComponent,
    HubCabildoIiScreen,
    VistaBelgranoScreen,
    VistaBelgranoMock
  ]
})
export class ScreensModule { }
