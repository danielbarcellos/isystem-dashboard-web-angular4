import {NgModule} from '@angular/core';

import {SmartadminModule} from '../../shared/smartadmin.module'

import {AnalyticsRoutingModule} from './analytics-routing.module';
import {AnalyticsComponent} from './analytics.component';
import {SocialNetworkComponent} from "./live-feeds/social-network.component";
import {LiveFeedsComponent} from "./live-feeds/live-feeds.component";
import {LiveStatsComponent} from "./live-feeds/live-stats.component";
import {RevenueComponent} from "./live-feeds/revenue.component";
import {BirdEyeComponent} from './bird-eye/bird-eye.component';
import {CalendarModule} from "../../+calendar/calendar.module";
import { TodoWidgetComponent } from './todo-widget/todo-widget.component';
import { TodoListComponent } from './todo-widget/todo-list.component';
import {FlotChartModule} from "../../shared/graphs/flot-chart/flot-chart.module";
import {D3Module} from "../../shared/graphs/d3/d3.module";
import { IsystemMonitorComponent } from './isystem-monitor/isystem-monitor.component';
import { IsystemStatusComponent } from './isystem-monitor/isystem-status.component';
import { IsystemGroupComponent } from './isystem-monitor/isystem-group.component';
import { IsystemGroupContentComponent } from './isystem-monitor/isystem-group-content.component';

import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";


@NgModule({
  imports: [
    SmartadminModule,
    AnalyticsRoutingModule,
    CalendarModule,
    FlotChartModule,
    SmartadminDatatableModule,
    D3Module,
  ],
  declarations: [
    AnalyticsComponent,

    LiveFeedsComponent,
    LiveStatsComponent,
    RevenueComponent,
    SocialNetworkComponent,

    BirdEyeComponent,

    TodoWidgetComponent,

    TodoListComponent,

    IsystemMonitorComponent,
    IsystemStatusComponent,
    IsystemGroupComponent,
    IsystemGroupContentComponent
  ],
  providers: [],
})
export class AnalyticsModule {

}
