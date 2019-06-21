import { TestBed, async } from '@angular/core/testing';
import { OtpService } from './otp.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig, NGXLogger, LoggerModule, NgxLoggerLevel, EventBusService } from 'web-console-core';
import * as _ from 'lodash';

import { failLogin, failTestWithError, b64toFile, blobToB64 } from '../../../../test-helper';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service'
import { OAuthRequest } from '../../../../oauth2-service/src/lib/model/oAuthRequest';
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../../../../test.variables';
import { OtpCreate, Otp } from '../model/models';
import { UsersService, UserCreate } from 'projects/wa-motif-open-api/user-mgr-service/src/lib';

describe('OtpService', () => {
    let service: OtpService;
    let authService: AuthService;
    let oauth2Service: Oauth2Service;
    let usersService: UsersService;

    let otp: Otp;

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                NGXLogger,
                OtpService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule, LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG})]
        });

        const httpClient = TestBed.get(HttpClient);
        const logger: NGXLogger = TestBed.get(NGXLogger);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null, new EventBusService(logger), logger);
        oauth2Service = new Oauth2Service(httpClient, TEST_BASE_PATH, null);
        usersService = new UsersService(httpClient, TEST_BASE_PATH, null);
        service = new OtpService(httpClient, TEST_BASE_PATH, null);

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
                let uc: UserCreate = {
                    userId: 'testUser',
                    state: 'ACTIVE'
                }
                usersService.createUser('Default', uc).subscribe(value => {
                }, error => {
                    failTestWithError("should prepare stuff", error);
                })
            })
    );

    it(`should create an otp`,
        async(
            () => {
                let oc:OtpCreate = {
                    application: 'vipera',
                    scope: 'test'
                }
                service.createOtp("Default", "testUser", oc).subscribe(value => {
                    expect(value).toBeDefined();
                }, error => {
                    failTestWithError("should create an otp", error);
                })
            }
        )
    );

    it(`should retrieve otps`,
        async(
            () => {
                service.getOtpList("Default", "testUser").subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    expect(value[0].id).toBeDefined();
                    expect(value[0].key).toBeDefined();
                    expect(value[0].scope).toBe('test');
                    this.otp = value[0];
                }, error => {
                    failTestWithError("retrieve otps", error);
                })
            }
        )
    );

    it(`should delete an otp`,
    async(
        () => {
            service.deleteOtp(this.otp.id).subscribe(value => {
            }, error => {
                failTestWithError("should delete an otp", error);
            })
        }
    )
    );

    it(`should clean stuff`,
        async(
            () => {
                usersService.deleteUser('Default', 'testUser').subscribe(value => {
                    let oauthReq: OAuthRequest = {
                        clientId: '123456789',
                        token: authService.getRefreshToken(),
                        tokenType: 'REFRESH_TOKEN'
                    }
                    authService.logout().subscribe(value => {
                    }, error => {
                        failTestWithError("should clean stuff", error);
                    })
                }, error => {
                    failTestWithError("should clean stuff", error);
                });
            }
        )
    );

});
