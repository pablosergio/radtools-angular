import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppConfig } from './config/app.config';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthService, AuthGuardService, LoggerService, LoaderService,
   ModalCommunicationService, CommunicationService, DataService } from './common/api';
import {SplitButtonModule} from 'primeng/primeng';
import { SharedModule } from './common/shared';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    SplitButtonModule,
    SharedModule,
    LoginModule,
  ],
 providers: [
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: loadConfig, deps: [AppConfig], multi: true },
    AuthService,
    AuthGuardService,
    LoggerService,
    LoaderService,
    ModalCommunicationService,
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
