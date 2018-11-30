import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { BundlesService } from './api/bundles.service';
import { DirectoriesService } from './api/directories.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    BundlesService,
    DirectoriesService ]
})
export class FileInstallServiceModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: FileInstallServiceModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: FileInstallServiceModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('FileInstallServiceModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
