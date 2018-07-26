import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebConsoleCoreModule } from 'web-console-core'
import { WebConsoleUIKitCoreModule, WebConsoleUIKitDataModule, WebConsoleUIKitModuleKendoProvider } from 'web-console-ui-kit'
import { GridsterModule } from 'web-console-ui-kit';
import { WebConsoleUIKitChartsModule } from 'web-console-ui-kit';
import { DashboardTestComponent } from '../components/dashboard/dashboard-test.component'
import { UsersListComponent } from '../components/users-list/users-list.component'
import { WABasicModule } from 'wa-motif-open-api-module'

@NgModule({
  imports: [
    WebConsoleCoreModule, 
    WebConsoleUIKitCoreModule, 
    WebConsoleUIKitDataModule, 
    WebConsoleUIKitModuleKendoProvider, 
    GridsterModule, 
    CommonModule, 
    WebConsoleUIKitChartsModule, 
    WABasicModule,
    FormsModule
  ],
  entryComponents:[DashboardTestComponent, UsersListComponent],
  declarations: [DashboardTestComponent, UsersListComponent],
  exports: [DashboardTestComponent, UsersListComponent, FormsModule]
})
export class UIKITKitchenSinkModule { }
