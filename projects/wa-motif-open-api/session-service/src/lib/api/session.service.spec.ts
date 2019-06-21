import { TestBed, async, inject } from '@angular/core/testing';
import { SecurityService } from '../../../../security-service/src/lib';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig, NGXLogger, LoggerModule, NgxLoggerLevel, EventBusService } from 'web-console-core';
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../../../../test.variables'
import { failTestWithError, failLogin } from '../../../../test-helper';
import * as _ from 'lodash';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service'
import { SessionService } from './session.service';

const TEST_ACTION: string = "testaction";

describe('SessionService', () => {
    let authService: AuthService;
    let oauth2Service: Oauth2Service;
    let securityService: SecurityService;
    let service: SessionService;

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                NGXLogger,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule, LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG}), LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG})]
        });

        const httpClient: HttpClient = TestBed.get(HttpClient);
        const logger: NGXLogger = TestBed.get(NGXLogger);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null, new EventBusService(logger), logger);
        oauth2Service = new Oauth2Service(httpClient, TEST_BASE_PATH, null);
        securityService = new SecurityService(httpClient, TEST_BASE_PATH, new Configuration());
        service = new SessionService(httpClient, TEST_BASE_PATH, new Configuration());

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

    it(`should create session`,
    async(
        () => {
            service.openCurrentUserSession().subscribe(value => {
            }, error => {
                failTestWithError("should create session", error);
            });
        }
    )
);

    it(`should check session`,
        async(
            () => {
                service.checkCurrentUserSession().subscribe(value => {
                }, error => {
                    failTestWithError("should check session", error);
                });
            }
        )
    );

    it(`should close session`,
        async(
            () => {
                service.closeCurrentUserSession().subscribe(value => {
                }, error => {
                    failTestWithError("should close session", error);
                });
            }
        )
    );

    it(`should clean stuff`,
        async(
            () => {
                // Authentication already invalidated by close session
            }
        )
    );
});
