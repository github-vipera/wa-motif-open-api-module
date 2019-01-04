import { TestBed, async, inject } from '@angular/core/testing';
import { GroupsService } from './groups.service';
import { RolesService } from './roles.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig } from 'web-console-core'
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../../../../test.variables'
import { failTestWithError, failLogin } from '../../../../test-helper';
import * as _ from 'lodash';
import { Permission, RoleCreate } from '../model/models';
import { UsersService } from './users.service';
import { RoleAssign } from '../model/roleAssign';
import { Action } from '../model/action';
import { Group } from '../model/group';
import { GroupCreate } from '../model/groupCreate';
import { GroupAssign } from '../model/groupAssign';
import { Role } from '../model/role';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service'
import { OAuthRequest } from '../../../../oauth2-service/src/lib/model/oAuthRequest';

const TEST_ROLE = "testrole";
const TEST_GROUP = "testgroup";

describe('UsersService', () => {
    let authService: AuthService;
    let oauth2Service: Oauth2Service;
    let service: UsersService;
    let groupsService: GroupsService;
    let rolesService: RolesService;

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                GroupsService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule]
        });

        const httpClient = TestBed.get(HttpClient);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null);
        oauth2Service = new Oauth2Service(httpClient, TEST_BASE_PATH, null);
        service = new UsersService(httpClient, TEST_BASE_PATH, new Configuration());
        groupsService = new GroupsService(httpClient, TEST_BASE_PATH, new Configuration());
        rolesService = new RolesService(httpClient, TEST_BASE_PATH, new Configuration());

        let p: Promise<any> = authService.login({ userName: TEST_USERNAME, password: TEST_PASSWORD }).toPromise();
        p.catch((error) => {
            failLogin(error);
        });
        return p;
    });

    beforeEach(() => {
    });

    afterEach(() => {
    });

    it(`should prepare stuff`,
        async(
            () => {
                const createRole = () => {
                    const rc: RoleCreate = {
                        name: TEST_ROLE,
                        description: TEST_ROLE
                    }
                    rolesService.createRole(rc).subscribe(value => {
                    }, error => {
                        failTestWithError("should prepare stuff", error);
                    });
                }
                rolesService.deleteRole(TEST_ROLE).subscribe(createRole, createRole);

                const createGroup = () => {
                    const gc: GroupCreate = {
                        name: TEST_GROUP,
                        description: TEST_GROUP
                    }
                    groupsService.createGroup("Default", gc).subscribe(value => {
                    }, error => {
                        failTestWithError("should prepare stuff", error);
                    });
                }
                groupsService.deleteGroup("Default", TEST_GROUP).subscribe(createGroup, createGroup);
            })
    );

    it(`should assign role to user`,
        async(
            () => {
                let ra: RoleAssign = {
                    name: TEST_ROLE
                }
                service.assignRoleToUser("Default", TEST_USERNAME, ra).subscribe(value => {
                }, error => {
                    failTestWithError("should assign role to user", error);
                })
            }
        )
    );

    it(`should remove role from user`,
        async(
            () => {
                service.removeRoleFromUser("Default", TEST_USERNAME, TEST_ROLE).subscribe(value => {
                }, error => {
                    failTestWithError("should remove role from user", error);
                })
            }
        )
    );

    it(`should retrieve user actions`,
        async(
            () => {
                service.getUserActions("Default", TEST_USERNAME).subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    let a: Action = _.find(value, function (o: Action) {
                        return (o.name === "SU_ACTIONS");
                    });
                    expect(a).toBeDefined();
                }, error => {
                    failTestWithError("should retrieve user actions", error);
                })
            }
        )
    );

    it(`should assign group to user`,
        async(
            () => {
                let ga: GroupAssign = {
                    name: TEST_GROUP
                }
                service.assignGroupToUser("Default", TEST_USERNAME, ga).subscribe(value => {
                }, error => {
                    failTestWithError("should assign group to user", error);
                })
            }
        )
    );

    it(`should retrieve user groups`,
        async(
            () => {
                service.getUserGroups("Default", TEST_USERNAME).subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    let g: Group = _.find(value, function (o: Group) {
                        return (o.name === TEST_GROUP);
                    });
                    expect(g).toBeDefined();
                }, error => {
                    failTestWithError("should retrieve user groups", error);
                })
            }
        )
    );

    it(`should remove group from user`,
        async(
            () => {
                service.removeGroupFromUser("Default", TEST_USERNAME, TEST_GROUP).subscribe(value => {
                }, error => {
                    failTestWithError("should remove group from user", error);
                })
            }
        )
    );

    it(`should retrieve user permissions`,
        async(
            () => {
                service.getUserPermissions("Default", TEST_USERNAME).subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    let p: Permission = _.find(value, function (o: Permission) {
                        return o.component === "com.vipera.osgi.core.platform" &&
                            o.action === "*" && o.target === "*";
                    });
                    expect(p).toBeDefined();
                }, error => {
                    failTestWithError("should retrieve user actions", error);
                })
            }
        )
    );

    it(`should retrieve user roles`,
        async(
            () => {
                service.getUserRoles("Default", TEST_USERNAME).subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    let r: Role = _.find(value, function (o: Role) {
                        return o.name === "SU";
                    });
                    expect(r).toBeDefined();
                }, error => {
                    failTestWithError("should retrieve user roles", error);
                })
            }
        )
    );

    it(`should check if user is entitled to an action`,
        async(
            () => {
                service.isUserActionEntitled("Default", TEST_USERNAME, "SU_ACTIONS").subscribe(value => {
                    expect(value.entitled);
                }, error => {
                    failTestWithError("should check if user is entitled to an action", error);
                })
            }
        )
    );

    it(`should check if user is entitled to a permission`,
        async(
            () => {
                service.isUserPermissionEntitled("Default", TEST_USERNAME, "com.vipera.osgi.core.platform", "*", "*").subscribe(value => {
                    expect(value.entitled);
                }, error => {
                    failTestWithError("should check if user is entitled to a permission", error);
                })
            }
        )
    );

    it(`should clean stuff`,
        async(
            () => {
                rolesService.deleteRole(TEST_ROLE).subscribe(value => {}, error => {});
                groupsService.deleteGroup("Default", TEST_GROUP).subscribe(value => {}, error => {});

                let oauthReq: OAuthRequest = {
                    clientId: '123456789',
                    token: authService.getRefreshToken(),
                    tokenType: 'REFRESH_TOKEN'
                }
                oauth2Service.revoke(oauthReq).subscribe(value => {
                }, error => {
                    failTestWithError("should clean stuff", error);
                })
            }
        )
    );

});
