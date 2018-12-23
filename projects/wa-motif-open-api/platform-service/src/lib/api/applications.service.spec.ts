import { TestBed, async, inject } from '@angular/core/testing';
import { ApplicationsService } from './applications.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig } from 'web-console-core'
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../../../../test.variables'
import { failTestWithError, failLogin } from '../../../../test-helper';
import * as _ from 'lodash';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service'
import { OAuthRequest } from '../../../../oauth2-service/src/lib/model/oAuthRequest';
import { DomainCreate } from 'openapi-generator/output/sources';
import { DomainUpdate } from '../model/models';
import { ApplicationCreate, ApplicationUpdate } from '@wa-motif-open-api/platform-service/lib';

describe('ApplicationsService', () => {
    let authService: AuthService;
    let service: ApplicationsService;
    let oauth2Service: Oauth2Service;

    let TEST_APPLICATION: string = "TEST_APPLICATION";

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                ApplicationsService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule]
        });

        const httpClient = TestBed.get(HttpClient);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null);
        oauth2Service = new Oauth2Service(httpClient, TEST_BASE_PATH, null);
        service = new ApplicationsService(httpClient, TEST_BASE_PATH, new Configuration());

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
                service.deleteApplication('Default', TEST_APPLICATION).subscribe(value => {
                }, error => {
                })

            }

        )
    );

    it(`should create a new application`,
        async(
            () => {
                let ac: ApplicationCreate = {
                    name: TEST_APPLICATION,
                    description: 'testdescription'
                }
                service.createApplication('Default', ac).subscribe(value => {
                    expect(value.name).toBe(TEST_APPLICATION);
                    expect(value.description).toBe('testdescription');
                }, error => {
                    failTestWithError("should create a new application", error);
                })
            }
        )
    );

    it(`should retrieve test application`,
        async(
            () => {
                service.getApplication('Default', TEST_APPLICATION).subscribe(value => {
                    expect(value.name).toBe(TEST_APPLICATION);
                    expect(value.description).toBe('testdescription');
                }, error => {
                    failTestWithError("should retrieve test application", error);
                })
            }
        )
    );

    it(`should update test application`,
        async(
            () => {
                let au: ApplicationUpdate = {
                    description: 'testdescription2'
                }
                service.updateApplication('Default', TEST_APPLICATION, au).subscribe(value => {
                }, error => {
                    failTestWithError("should update test application", error);
                })
            }
        )
    );

    it(`should retrieve updated test application`,
        async(
            () => {
                service.getApplication('Default', TEST_APPLICATION).subscribe(value => {
                    expect(value.name).toBe(TEST_APPLICATION);
                    expect(value.description).toBe('testdescription2');
                }, error => {
                    failTestWithError("should retrieve updated test application", error);
                })
            }
        )
    );

    it(`should clean stuff`,
        async(
            () => {
                service.deleteApplication('Default', TEST_APPLICATION).subscribe(value => {
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
