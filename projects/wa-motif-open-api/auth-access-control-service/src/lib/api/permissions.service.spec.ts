import { TestBed, async, inject } from '@angular/core/testing';
import { PermissionsService } from './permissions.service'
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig } from 'web-console-core'
import { Permission } from '../model/permission'
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../test.variables'
import * as _ from 'lodash';
import { failLogin, failTestWithError } from './test-helper';

describe('PermissionsService', () => {
    let authService: AuthService;
    let service: PermissionsService;

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                PermissionsService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule]
        });

        const httpClient = TestBed.get(HttpClient);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null);
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
                service.deletePermission('testcomponent', 'VIEW', 'testtarget').subscribe(value => {
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
                    action: 'VIEW',
                    target: 'testtarget'
                }

                service.createPermission(p).subscribe(value => {
                    expect(value.component).toBe('testcomponent');
                    expect(value.action).toBe('VIEW');
                    expect(value.target).toBe('testtarget');
                }, error => {
                    failTestWithError("should create a new permission", error);
                })
            }
        )
    );

    it(`should retrieve test permission`,
        async(
            () => {
                service.getPermission('testcomponent', 'VIEW', 'testtarget').subscribe(value => {
                    expect(value.component).toBe('testcomponent');
                    expect(value.action).toBe('VIEW');
                    expect(value.target).toBe('testtarget');
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
                            o.action === 'VIEW' &&
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
                service.deletePermission('testcomponent', 'VIEW', 'testtarget').subscribe(value => {
                }, error => {
                })
            }
        )
    );
});