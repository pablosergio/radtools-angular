import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsApplicationRoutingModule } from './settings-application-routing.module';
import { SettingsApplicationComponent } from './settings-application.component';
import { SettingsApplicationService } from './settings-application.service';
import { GridApplicationComponent } from './grid-application/grid-application.component';
import { PanelModule, DataTableModule, DropdownModule, SplitButtonModule } from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    SettingsApplicationRoutingModule,
    PanelModule,
    DataTableModule,
    DropdownModule,
    SplitButtonModule
  ],
  declarations: [
    SettingsApplicationComponent,
    GridApplicationComponent
  ],
  providers: [
    SettingsApplicationService
  ]
})
export class SettingsApplicationModule { }
