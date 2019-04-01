import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ContextsService } from './api/contexts.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    ContextsService ]
})
export class RestContentServiceModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: RestContentServiceModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: RestContentServiceModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('RestContentServiceModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
