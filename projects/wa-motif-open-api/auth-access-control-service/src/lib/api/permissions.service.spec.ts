import { TestBed, async, inject } from '@angular/core/testing';
import { PermissionsService } from './permissions.service'
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig, NGXLogger, LoggerModule, NgxLoggerLevel, EventBusService } from 'web-console-core';
import { Permission } from '../model/permission'
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../../../../test.variables'
import { failTestWithError, failLogin } from '../../../../test-helper';
import * as _ from 'lodash';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service'
import { OAuthRequest } from '../../../../oauth2-service/src/lib/model/oAuthRequest';

describe('PermissionsService', () => {
    let authService: AuthService;
    let service: PermissionsService;
    let oauth2Service: Oauth2Service;

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                NGXLogger,
                PermissionsService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule, LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG})]
        });

        const httpClient = TestBed.get(HttpClient);
        const logger: NGXLogger = TestBed.get(NGXLogger);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null, new EventBusService(logger), logger);
        oauth2Service = new Oauth2Service(httpClient, TEST_BASE_PATH, null);
        service = new PermissionsService(httpClient, TEST_BASE_PATH, new Configuration());

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
                service.deletePermission('testcomponent', 'READ', 'testtarget').subscribe(value => {
                }, error => {
                })
            }
        )
    );

    it(`should create a new permission`,
        async(
            () => {
                let p: Permission = {
                    component: 'testcomponent',
                    action: 'READ',
                    target: 'testtarget',
                    description: 'GET:/v2/testcomponent/tests'
                }

                service.createPermission(p).subscribe(value => {
                    expect(value.component).toBe('testcomponent');
                    expect(value.action).toBe('READ');
                    expect(value.target).toBe('testtarget');
                    expect(value.description).toBe('GET:/v2/testcomponent/tests');
                }, error => {
                    failTestWithError("should create a new permission", error);
                })
            }
        )
    );

    it(`should retrieve test permission`,
        async(
            () => {
                service.getPermission('testcomponent', 'READ', 'testtarget').subscribe(value => {
                    expect(value.component).toBe('testcomponent');
                    expect(value.action).toBe('READ');
                    expect(value.target).toBe('testtarget');
                    expect(value.description).toBe('GET:/v2/testcomponent/tests');
                }, error => {
                    failTestWithError("should retrieve test permission", error);
                })
            }
        )
    );

    it(`should retrieve all permissions`,
        async(
            () => {
                service.getPermissions().subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    let p: Permission = _.find(value, function (o: Permission) {
                        return (o.component === 'testcomponent' &&
                            o.action === 'READ' &&
                            o.target === 'testtarget');
                    });
                    expect(p).toBeDefined();
                }, error => {
                    failTestWithError("should retrieve all permissions", error);
                })
            }
        )
    );

    it(`should clean stuff`,
        async(
            () => {
                service.deletePermission('testcomponent', 'READ', 'testtarget').subscribe(value => {
                }, error => {
                })
                authService.logout().subscribe(value => {
                }, error => {
                    failTestWithError("should clean stuff", error);
                })
            }
        )
    );
});
