import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { RegistryService } from './api/registry.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    RegistryService ]
})
export class PluginRegistryServiceModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: PluginRegistryServiceModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: PluginRegistryServiceModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('PluginRegistryServiceModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
