import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { PerformanceService } from './api/performance.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    PerformanceService ]
})
export class PerformanceServiceModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: PerformanceServiceModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: PerformanceServiceModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('PerformanceServiceModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
