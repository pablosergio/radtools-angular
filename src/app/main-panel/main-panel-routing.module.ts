import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPanelComponent } from './main-panel.component';


const mainPanelRoutes: Routes = [
   {
    path: '',
    component: MainPanelComponent,
    children: [
      {
        path: 'settings-application',
        loadChildren: 'app/settings-application/settings-application.module#SettingsApplicationModule'
      }
    ]
  }
];

@NgModule({
  imports: [
     RouterModule.forChild(mainPanelRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainPanelRoutingModule { }
