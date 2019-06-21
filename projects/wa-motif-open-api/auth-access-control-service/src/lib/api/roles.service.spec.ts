import { TestBed, async, inject } from '@angular/core/testing';
import { RolesService } from './roles.service'
import { Role } from '../model/role'
import { RoleCreate } from '../model/roleCreate';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration';
import { AuthService, WebConsoleConfig, NGXLogger, LoggerModule, NgxLoggerLevel, EventBusService } from 'web-console-core';
import { Permission } from '../model/permission';
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../../../../test.variables';
import { failTestWithError, failLogin } from '../../../../test-helper';
import * as _ from 'lodash';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service';

describe('RolesService', () => {
    let authService: AuthService;
    let oauth2Service: Oauth2Service;
    let service: RolesService;

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                NGXLogger,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule, LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG})]
        });

        const httpClient = TestBed.get(HttpClient);
        const logger: NGXLogger = TestBed.get(NGXLogger);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null, new EventBusService(logger), logger);
        oauth2Service = new Oauth2Service(httpClient, TEST_BASE_PATH, null);
        service = new RolesService(httpClient, TEST_BASE_PATH, new Configuration());

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
                service.deleteRole('testrole').subscribe(value => {
                }, error => {
                });
            }
        )
    );

    it(`should create a new role`,
        async(
            () => {
                const rc: RoleCreate = {
                    name: 'testrole',
                    description: 'testdescription'
                }

                service.createRole(rc).subscribe(value => {
                    expect(value.name).toBe('testrole');
                    expect(value.description).toBe('testdescription');
                }, error => {
                    failTestWithError('should create a new role', error);
                })
            }
        )
    );

    it(`should retrieve test role`,
        async(
            () => {
                service.getRole('testrole').subscribe(value => {
                    expect(value.name).toBe('testrole');
                    expect(value.description).toBe('testdescription');
                }, error => {
                    failTestWithError('should retrieve test role', error);
                })
            }
        )
    );

    it(`should retrieve all roles`,
        async(
            () => {
                service.getRoles().subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    const r: Role = _.find(value, function (o: Role) {
                        return (o.name === 'testrole' &&
                            o.description === 'testdescription');
                    });
                    expect(r).toBeDefined();
                }, error => {
                    failTestWithError('should retrieve all roles', error);
                })
            }
        )
    );

    it(`should add permission to the test role`,
        async(
            () => {
                const p: Permission = {
                    component: 'com.vipera.osgi.foundation.webcontent.api.rest.WebContentApi',
                    action: '*',
                    target: '*',
                    description: ''
                }

                service.assignPermissionToRole('testrole', p).subscribe(value => {
                }, error => {
                    failTestWithError('should add action to the test role', error);
                })
            }
        )
    );

    it(`should retrieve role permissions`,
        async(
            () => {
                service.getRolePermissions('testrole').subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    let p: Permission = _.find(value, function (o: Permission) {
                        return (o.component === 'com.vipera.osgi.foundation.webcontent.api.rest.WebContentApi' &&
                            o.action === '*' &&
                            o.target === '*');
                    });
                    expect(p).toBeDefined();
                }, error => {
                    failTestWithError('should retrieve role permissions', error);
                })
            }
        )
    );

    it(`should remove role permission`,
        async(
            () => {
                service.removePermissionFromRole('testrole', 'com.vipera.osgi.foundation.webcontent.api.rest.WebContentApi', '*', '*').subscribe(value => {
                }, error => {
                    failTestWithError('should remove role permission', error);
                })
            }
        )
    );

    it(`should delete the test role`,
        async(
            () => {
                service.deleteRole('testrole').subscribe(value => {
                }, error => {
                    failTestWithError('should delete the test role', error);
                })
            }
        )
    );

    it(`should clean stuff`,
        async(
            () => {
                const cleanAuth = () => {
                    authService.logout().subscribe(value => {
                    }, error => {
                        failTestWithError('should clean stuff', error);
                    })
                }
                service.deleteRole('testrole').subscribe(cleanAuth, cleanAuth);
            }
        )
    );
});
