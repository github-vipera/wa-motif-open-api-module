import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { BundlesService } from './api/bundles.service';
import { ContextsService } from './api/contexts.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    BundlesService,
    ContextsService ]
})
export class WebContentServiceModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: WebContentServiceModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: WebContentServiceModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('WebContentServiceModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
