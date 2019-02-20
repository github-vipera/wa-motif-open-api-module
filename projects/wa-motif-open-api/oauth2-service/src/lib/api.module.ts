import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { Oauth2Service } from './api/oauth2.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    Oauth2Service ]
})
export class OAuth2ServiceModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: OAuth2ServiceModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: OAuth2ServiceModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('OAuth2ServiceModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
