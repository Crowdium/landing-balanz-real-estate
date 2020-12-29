import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './screens/app-routing.module';
import { AppComponent } from './app.component';
import { ScreensModule } from './screens/screens.module';
import { ComponentsModule } from './components/components.module';
import { ContainersModule } from './containers/containers.module';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
