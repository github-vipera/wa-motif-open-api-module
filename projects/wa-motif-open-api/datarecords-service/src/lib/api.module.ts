import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { DatarecordsService } from './api/datarecords.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    DatarecordsService ]
})
export class DatarecordsServiceModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: DatarecordsServiceModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: DatarecordsServiceModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('DatarecordsServiceModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
