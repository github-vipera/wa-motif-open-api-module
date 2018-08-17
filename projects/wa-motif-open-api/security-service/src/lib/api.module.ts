import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { SecurityService } from './api/security.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    SecurityService ]
})
export class SecurityServiceModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: SecurityServiceModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: SecurityServiceModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('SecurityServiceModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
