import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';
import { WC_API_BASE_PATH } from 'web-console-core'

import { InfoService } from './api/info.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    InfoService ]
})
export class InfoServiceModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: InfoServiceModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: InfoServiceModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('InfoServiceModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
