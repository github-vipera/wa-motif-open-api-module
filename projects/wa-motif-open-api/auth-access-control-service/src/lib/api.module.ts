import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ActionsService } from './api/actions.service';
import { GroupsService } from './api/groups.service';
import { MyselfService } from './api/myself.service';
import { PermissionsService } from './api/permissions.service';
import { RolesService } from './api/roles.service';
import { UsersService } from './api/users.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    ActionsService,
    GroupsService,
    MyselfService,
    PermissionsService,
    RolesService,
    UsersService ]
})
export class AuthAccessControlServiceModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: AuthAccessControlServiceModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: AuthAccessControlServiceModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('AuthAccessControlServiceModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
