import { TestBed, async, inject } from '@angular/core/testing';
import { GroupsService } from './groups.service';
import { Group } from '../model/group';
import { GroupCreate } from '../model/groupCreate';
import { GroupUpdate } from '../model/groupUpdate';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig } from 'web-console-core'
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../test.variables'
import * as _ from 'lodash';
import { Role } from '../model/role';
import { RoleAssign } from '../model/roleAssign';
import { failLogin, failTestWithError } from './test-helper';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service'
import { OAuthRequest } from '../../../../oauth2-service/src/lib/model/oAuthRequest';

describe('GroupsService', () => {
    let authService: AuthService;
    let service: GroupsService;
    let oauth2Service: Oauth2Service;

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
        service = new GroupsService(httpClient, TEST_BASE_PATH, new Configuration());

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
                service.deleteGroup('Default', 'testgroup').subscribe(value => {
                }, error => {
                })

            }

        )
    );

    it(`should create a new group`,
        async(
            () => {
                let gc: GroupCreate = {
                    name: 'testgroup',
                    description: 'testdescription'
                }
                service.createGroup('Default', gc).subscribe(value => {
                    expect(value.name).toBe('testgroup');
                    expect(value.description).toBe('testdescription');
                }, error => {
                    failTestWithError("should create a new group", error);
                })
            }
        )
    );

    it(`should retrieve test group`,
        async(
            () => {
                service.getGroup('Default', 'testgroup').subscribe(value => {
                    expect(value.name).toBe('testgroup');
                    expect(value.description).toBe('testdescription');
                }, error => {
                    failTestWithError("should retrieve test group", error);
                })
            }
        )
    );

    it(`should assign roles to the test group`,
        async(
            () => {
                let r: RoleAssign = {
                    name: 'SU'
                }

                service.assignRoleToGroup('Default', 'testgroup', r).subscribe(value => {
                }, error => {
                    failTestWithError("should assign roles to the test group", error);
                })
            }
        )
    );

    it(`should retrieve group roles`,
        async(
            () => {
                service.getGroupRoles('Default', 'testgroup').subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    let r: Role = _.find(value, function (o: Role) {
                        return (o.name === 'SU');
                    });
                    expect(r).toBeDefined();
                }, error => {
                    failTestWithError("should retrieve group roles", error);
                })
            }
        )
    );

    it(`should remove roles from the test group`,
        async(
            () => {
                service.removeRoleFromGroup('Default', 'testgroup', 'SU').subscribe(value => {
                }, error => {
                    failTestWithError("should remove roles from the test group", error);
                })
            }
        )
    );

    it(`should check roles removed from group`,
        async(
            () => {
                service.getGroupRoles('Default', 'testgroup').subscribe(value => {
                    let r: Role = _.find(value, function (o: Role) {
                        return (o.name === 'SU');
                    });
                    expect(r).toBeUndefined;
                }, error => {
                    failTestWithError("should check roles removed from group", error);
                })
            }
        )
    );

    it(`should retrieve domain groups`,
        async(
            () => {
                service.getDomainGroups('Default').subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    let g: Group = _.find(value, function (o: Group) {
                        return (o.name === 'testgroup' &&
                            o.description === 'testdescription');
                    });
                    expect(g).toBeDefined();
                }, error => {
                    failTestWithError("should retrieve domain groups", error);
                })
            }
        )
    );

    it(`should retrieve all groups`,
        async(
            () => {
                service.getGroups().subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    let g: Group = _.find(value, function (o: Group) {
                        return (o.name === 'testgroup' &&
                            o.description === 'testdescription');
                    });
                    expect(g).toBeDefined();
                }, error => {
                    failTestWithError("should retrieve all groups", error);
                })
            }
        )
    );

    it(`should retrieve group users`,
        async(
            () => {
                service.getGroupUsers('Default', 'testgroup').subscribe(value => {
                }, error => {
                    failTestWithError("should retrieve group users", error);
                })
            }
        )
    );

    it(`should update group`,
        async(
            () => {
                let gu: GroupUpdate = {
                    description: 'newdescription'
                }
                service.updateGroup('Default', 'testgroup', gu).subscribe(value => {
                }, error => {
                    failTestWithError("should update group", error);
                })
            }
        )
    );

    it(`should check updated group`,
        async(
            () => {
                service.getGroup('Default', 'testgroup').subscribe(value => {
                    expect(value.name).toBe('testgroup');
                    expect(value.description).toBe('newdescription');
                }, error => {
                    failTestWithError("should check updated group", error);
                })
            }
        )
    );

    it(`should clean stuff`,
        async(
            () => {
                service.deleteGroup('Default', 'testgroup').subscribe(value => {
                }, error => {
                })
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
