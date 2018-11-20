import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { BackendctrlService } from './api/backendctrl.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    BackendctrlService ]
})
export class BackendControllerServiceModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: BackendControllerServiceModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: BackendControllerServiceModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('BackendControllerServiceModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
