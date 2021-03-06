import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WebAdminModulesProvider } from './web-admin-modules-provider.module';
import { KendoUIModulesProvider } from './kendo-ui-modules-provider.module';
import { RouterModule, Routes } from '@angular/router'
import { WebConsoleComponent, AuthGuard, WebConsoleCoreModule } from 'web-console-core'
import { WebConsoleLoginComponent } from 'web-console-login'
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { LoggerModule, NGXLogger, NgxLoggerLevel } from 'web-console-core'
import { PlatformServiceModule } from '@wa-motif-open-api/platform-service'
import { SecurityServiceModule } from '@wa-motif-open-api/security-service'
import { ConfigurationServiceModule } from '@wa-motif-open-api/configuration-service'
import { environment } from '../environments/environment';
import { WC_API_BASE_PATH, WC_OAUTH_BASE_PATH } from 'web-console-core'
import { OAuth2ServiceModule } from '@wa-motif-open-api/oauth2-service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: WebConsoleLoginComponent },
  { path: 'dashboard', component: WebConsoleComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,  
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.OFF}),
    WebAdminModulesProvider, 
    KendoUIModulesProvider, 
    ToolBarModule, 
    BrowserAnimationsModule, 
    GridModule,
    PlatformServiceModule,
    OAuth2ServiceModule,
    SecurityServiceModule,
    ConfigurationServiceModule
  ],
  providers: [ 
    { provide: WC_API_BASE_PATH, useValue: environment.API_BASE_PATH }, 
    { provide: WC_OAUTH_BASE_PATH, useValue: environment.OAUTH_BAS_PATH },
    WebAdminModulesProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private logger: NGXLogger){
    this.logger.info("AppModule" ,"Starting application");
  }

}
