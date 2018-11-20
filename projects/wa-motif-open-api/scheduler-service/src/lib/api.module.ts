import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { SchedulerService } from './api/scheduler.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    SchedulerService ]
})
export class SchedulerServiceModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: SchedulerServiceModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: SchedulerServiceModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('SchedulerServiceModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
