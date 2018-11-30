import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebConsoleCoreModule } from 'web-console-core'
import { WebConsoleUIKitCoreModule, WebConsoleUIKitDataModule } from 'web-console-ui-kit'
import { WebConsoleUIKitGridsterProviderModule, WebConsoleUIKitNgxChartsProviderModule, WebConsoleUIKitKendoProviderModule } from 'web-console-ui-kit';
import { DashboardTestComponent } from '../components/dashboard/dashboard-test.component'
import { UsersListComponent } from '../components/users-list/users-list.component'

@NgModule({
  imports: [
    WebConsoleCoreModule, 
    WebConsoleUIKitCoreModule, 
    WebConsoleUIKitDataModule, 
    WebConsoleUIKitGridsterProviderModule, 
    WebConsoleUIKitNgxChartsProviderModule, 
    WebConsoleUIKitKendoProviderModule, 
    CommonModule, 
    FormsModule
  ],
  entryComponents:[DashboardTestComponent, UsersListComponent],
  declarations: [DashboardTestComponent, UsersListComponent],
  exports: [DashboardTestComponent, UsersListComponent, FormsModule]
})
export class UIKITKitchenSinkModule { }
