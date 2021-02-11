import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './screens/app-routing.module';
import { AppComponent } from './app.component';
import { ScreensModule } from './screens/screens.module';
import { ComponentsModule } from './components/components.module';
import { ContainersModule } from './containers/containers.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScreensModule,
    ComponentsModule,
    ContainersModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
