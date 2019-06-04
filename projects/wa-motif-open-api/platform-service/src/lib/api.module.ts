import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AppinstancesService } from './api/appinstances.service';
import { ApplicationsService } from './api/applications.service';
import { ChannelsService } from './api/channels.service';
import { ClientsService } from './api/clients.service';
import { DomainsService } from './api/domains.service';
import { LocalesService } from './api/locales.service';
import { SystemService } from './api/system.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AppinstancesService,
    ApplicationsService,
    ChannelsService,
    ClientsService,
    DomainsService,
    LocalesService,
    SystemService ]
})
export class PlatformServiceModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: PlatformServiceModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: PlatformServiceModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('PlatformServiceModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
