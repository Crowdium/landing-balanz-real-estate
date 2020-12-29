import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';
import { NavbarRightComponent } from './navbar-right/navbar-right.component';
import { NavbarCenterComponent } from './navbar-center/navbar-center.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NavbarLeftComponent,
    NavbarRightComponent,
    NavbarCenterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    NavbarLeftComponent,
    NavbarRightComponent,
    NavbarCenterComponent
  ]
})
export class NavbarModule { }
