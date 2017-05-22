import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';


export const routes: Routes = [
  {
    path: '', redirectTo: 'monitor', pathMatch: 'full'
  },
  {
    path: 'monitor',
    loadChildren:'./monitor/monitor.module#MonitorModule',

  }
];

export const routing = RouterModule.forChild(routes);
