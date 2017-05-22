import {NgModule} from '@angular/core';

import {SmartadminModule} from '../shared/smartadmin.module'
import {SmartadminDatatableModule} from "../shared/ui/datatable/smartadmin-datatable.module";

import {routing} from './dashboard.routing';


@NgModule({
  imports: [
    SmartadminModule,
    SmartadminDatatableModule,
    routing,
  ],
  declarations: [],
  providers: [],
})
export class DashboardModule { }
