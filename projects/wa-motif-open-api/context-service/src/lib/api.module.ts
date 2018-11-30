import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AttributesService } from './api/attributes.service';
import { ContextsService } from './api/contexts.service';
import { ValuesService } from './api/values.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AttributesService,
    ContextsService,
    ValuesService ]
})
export class ContextServiceModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ContextServiceModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ContextServiceModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ContextServiceModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
