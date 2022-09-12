import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivasNgSwitchComponent } from './diretivas-ng-switch/diretivas-ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgIfComponent,
    DiretivasNgSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
