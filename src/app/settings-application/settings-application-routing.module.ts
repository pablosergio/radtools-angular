import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsApplicationComponent } from './settings-application.component';
import { GridApplicationComponent } from './grid-application/grid-application.component';


const settingsApplicationRoutes: Routes = [
   {
    path: '',
    component: SettingsApplicationComponent,
    /*children: [
      {
        path: '',
        component: GridApplicationComponent
      }
    ]*/
  }
];

@NgModule({
  imports: [
     RouterModule.forChild(settingsApplicationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SettingsApplicationRoutingModule { }
