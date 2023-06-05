import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularLogoComponent } from './angular-logo/angular-logo.component';
import { DynamicNameComponent } from './dynamic-name/dynamic-name.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularLogoComponent,
    DynamicNameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
