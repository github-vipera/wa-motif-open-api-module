import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration';
import { AuthService, WebConsoleConfig, NGXLogger, LoggerModule, NgxLoggerLevel } from 'web-console-core';
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../../../../test.variables';
import { failTestWithError, failLogin } from '../../../../test-helper';
import * as _ from 'lodash';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service';
import { OAuthRequest } from '../../../../oauth2-service/src/lib/model/oAuthRequest';
import { InfoService } from './info.service';
import { MemoryInfo } from '../model/memoryInfo';

describe('OperationsService', () => {
    let authService: AuthService;
    let service: InfoService;
    let oauth2Service: Oauth2Service;

    let TEST_SERVICE: string = "TEST_SERVICE";
    let TEST_OPERATION: string = "TEST_OPERATION";

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                NGXLogger,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule, LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG })]
        });

        const httpClient = TestBed.get(HttpClient);
        const logger: NGXLogger = TestBed.get(NGXLogger);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null, logger);
        oauth2Service = new Oauth2Service(httpClient, TEST_BASE_PATH, null);
        service = new InfoService(httpClient, TEST_BASE_PATH, new Configuration());

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
            }
        )
    );

    it(`should retrieve server info`,
        async(
            () => {
                service.getServerInfo().subscribe(value => {
                    expect(value.ip).toBeDefined();
                    expect(value.os).toBeDefined();
                    expect(value.startTime).toBeDefined();
                    expect(value.motifVersion).toBeDefined();
                    expect(value.jdkInfo).toBeDefined();
                    expect(value.instanceName).toBeDefined();
                }, error => {
                    failTestWithError('should retrieve server info', error);
                });
            }
        )
    );

    it(`should retrieve server status`,
        async(
            () => {
                service.getServerStatus().subscribe(value => {
                    expect(value.systemLoad).toBeDefined();
                    expect(value.processLoad).toBeDefined();
                    expect(value.memoryUsage).toBeDefined();
                    expect(value.diskUsage).toBeDefined();
                }, error => {
                    failTestWithError('should retrieve server status', error);
                });
            }
        )
    );

    it(`should retrieve sessions info`,
        async(
            () => {
                service.getSessionsInfo().subscribe(value => {
                    expect(value.active).toBeDefined();
                }, error => {
                    failTestWithError('should retrieve sessions info', error);
                });
            }
        )
    );

    it(`should retrieve users info`,
        async(
            () => {
                service.getUsersInfo().subscribe(value => {
                    expect(value.total).toBeDefined();
                    expect(value.active).toBeDefined();
                    expect(value.preactive).toBeDefined();
                    expect(value.blocked).toBeDefined();
                }, error => {
                    failTestWithError('should retrieve users info', error);
                });
            }
        )
    );

    it(`should retrieve oauth2 info`,
        async(
            () => {
                service.getOAuth2Info().subscribe(value => {
                    expect(value.refreshTokens).toBeDefined();
                    expect(value.accessTokens).toBeDefined();
                }, error => {
                    failTestWithError('should retrieve oauth2 info', error);
                });
            }
        )
    );

    it(`should clean stuff`,
        async(
            () => {
            }
        )
    );

});
