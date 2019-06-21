import { TestBed, async, inject } from '@angular/core/testing';
import { SecurityService } from './security.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig, NGXLogger, LoggerModule, NgxLoggerLevel, EventBusService } from 'web-console-core';
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../../../../test.variables'
import { failTestWithError, failLogin } from '../../../../test-helper';
import * as _ from 'lodash';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service'
import { OAuthRequest } from '../../../../oauth2-service/src/lib/model/oAuthRequest';
import { SessionService } from 'projects/wa-motif-open-api/session-service/src/lib';

const TEST_ACTION: string = "testaction";

describe('SecurityService', () => {
    let authService: AuthService;
    let oauth2Service: Oauth2Service;
    let sessionService: SessionService;
    let service: SecurityService;

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
        sessionService = new SessionService(httpClient, TEST_BASE_PATH, new Configuration());
        service = new SecurityService(httpClient, TEST_BASE_PATH, new Configuration());

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
                sessionService.openCurrentUserSession().subscribe(value => {
                }, error => {
                    failTestWithError("should prepare stuff", error);
                })
            })
    );

    it(`should retrieve sessions`,
        async(
            () => {
                service.getSessions().subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                }, error => {
                    failTestWithError("should retrieve sessions", error);
                });
            }
        )
    );

    it(`should close session`,
        async(
            () => {
                service.getSessions().subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    service.closeSession(value[0].id).subscribe(value => {
                    }, error => {
                        failTestWithError("should close session", error);
                    });
                }, error => {
                    failTestWithError("should close session", error);
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
