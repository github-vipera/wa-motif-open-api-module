import { TestBed, async, inject } from '@angular/core/testing';
import { EnginesService } from './engines.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig } from 'web-console-core'
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../test.variables'
import * as _ from 'lodash';
import { failTestWithError, failLogin } from '../test-helper';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service'
import { OAuthRequest } from '../../../../oauth2-service/src/lib/model/oAuthRequest';
import { Engine } from '../model/engine';

const TEST_ACTION: string = "testaction";

describe('EnginesService', () => {
    let authService: AuthService;
    let oauth2Service: Oauth2Service;
    let service: EnginesService;

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                EnginesService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule]
        });

        const httpClient = TestBed.get(HttpClient);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null);
        oauth2Service = new Oauth2Service(httpClient, TEST_BASE_PATH, null);
        service = new EnginesService(httpClient, TEST_BASE_PATH, new Configuration());

        let p:Promise<any> = authService.login({userName:TEST_USERNAME, password:TEST_PASSWORD}).toPromise();
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
            })
    );

    it(`should create a new engine`,
        async(
            () => {
                let ec: Engine = {
                    name: TEST_ACTION,
                    description: 'testdescription'
                }
                service.createEngine(ec).subscribe(value => {
                    expect(value.name).toBe(TEST_ACTION);
                    expect(value.description).toBe('testdescription');
                }, error => {
                    failTestWithError("should create a new action", error);
                })
            }
        )
    );

    it(`should clean stuff`,
        async(
            () => {
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
