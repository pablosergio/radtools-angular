import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPanelRoutingModule } from './main-panel-routing.module';
import { PanelMenuModule, MenubarModule, PanelModule, DropdownModule, ButtonModule, InputTextModule } from 'primeng/primeng';
import { MainPanelComponent } from './main-panel.component';


@NgModule({
  imports: [
    CommonModule,
    MainPanelRoutingModule,
    PanelMenuModule,
    PanelModule,
    MenubarModule,
    DropdownModule,
    ButtonModule,
    InputTextModule
  ],
  declarations: [MainPanelComponent]
})
export class MainPanelModule { }
