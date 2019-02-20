import { TestBed, async } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig, NGXLogger, LoggerModule, NgxLoggerLevel } from 'web-console-core'
import * as _ from 'lodash';

import { failLogin, failTestWithError, b64toFile, blobToB64, failTestWithMessage } from '../../../../test-helper';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service'
import { OAuthRequest } from '../../../../oauth2-service/src/lib/model/oAuthRequest';
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../../../../test.variables';

import moment = require('moment');

describe('UsersService', () => {
    let service: UsersService;
    let authService: AuthService;
    let oauth2Service: Oauth2Service;

    const testContext: string = 'TEST_CONTEXT';
    const testHttpPath: string = '/testpath';
    const modHttpPath: string = '/modpath';
    const startDate: Date = moment().subtract(6, 'days').toDate();
    const endDate: Date = moment().toDate();

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                NGXLogger,
                UsersService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule, LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG})]
        });

        const httpClient = TestBed.get(HttpClient);
        const logger: NGXLogger = TestBed.get(NGXLogger);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null, logger);
        oauth2Service = new Oauth2Service(httpClient, TEST_BASE_PATH, null);
        service = new UsersService(httpClient, TEST_BASE_PATH, null);

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
            })
    );

    it(`should retrieve user counters`,
        async(
            () => {
                service.getUserCounters('Default', 'test').subscribe(value => {
                     expect(value).toBeDefined();
                }, error => {
                    failTestWithError('should verify datarecords export', error);
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
