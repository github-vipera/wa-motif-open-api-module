import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { E2eService } from './api/e2e.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    E2eService ]
})
export class End2EndEncryptionServiceModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: End2EndEncryptionServiceModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: End2EndEncryptionServiceModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('End2EndEncryptionServiceModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
