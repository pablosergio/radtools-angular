import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppConfig } from './config/app.config';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { LoggerService, LoaderService, CommunicationService, DataService } from './common/api';
import {SplitButtonModule} from 'primeng/primeng';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SplitButtonModule
  ],
 providers: [
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: loadConfig, deps: [AppConfig], multi: true },
    LoggerService,
    LoaderService,
    CommunicationService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function loadConfig(config: AppConfig) {
  return function load() {
    config.load();
  };
}
