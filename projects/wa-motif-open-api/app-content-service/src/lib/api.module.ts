import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AssetsService } from './api/assets.service';
import { EnginesService } from './api/engines.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AssetsService,
    EnginesService ]
})
export class AppContentServiceModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: AppContentServiceModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: AppContentServiceModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('AppContentServiceModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
