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
export class BackendControllerModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: BackendControllerModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: BackendControllerModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('BackendControllerModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
