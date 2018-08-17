import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ConfigurationsService } from './api/configurations.service';
import { SettingsService } from './api/settings.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    ConfigurationsService,
    SettingsService ]
})
export class ConfigurationServiceModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ConfigurationServiceModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ConfigurationServiceModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ConfigurationServiceModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
