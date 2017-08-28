import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsApplicationComponent } from './settings-application.component';
import { GridApplicationComponent } from './grid-application/grid-application.component';
import { PanelModule, DataTableModule, DropdownModule, SplitButtonModule } from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    DataTableModule,
    DropdownModule,
    SplitButtonModule
  ],
  declarations: [
    SettingsApplicationComponent,
    GridApplicationComponent
  ]
})
export class SettingsApplicationModule { }
