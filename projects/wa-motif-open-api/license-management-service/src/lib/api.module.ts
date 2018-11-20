import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { LicenseService } from './api/license.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    LicenseService ]
})
export class LicenseManagementServiceModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: LicenseManagementServiceModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: LicenseManagementServiceModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('LicenseManagementServiceModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
