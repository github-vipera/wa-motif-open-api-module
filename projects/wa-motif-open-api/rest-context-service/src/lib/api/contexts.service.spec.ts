import { TestBed, async } from '@angular/core/testing';
import { ContextsService } from './contexts.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig, NGXLogger, LoggerModule, NgxLoggerLevel } from 'web-console-core'
import * as _ from 'lodash';

import { failLogin, failTestWithError, b64toFile, blobToB64, failTestWithMessage } from '../../../../test-helper';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service'
import { OAuthRequest } from '../../../../oauth2-service/src/lib/model/oAuthRequest';
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../../../../test.variables';
import { UsersService, UserCreate } from 'projects/wa-motif-open-api/platform-service/src/lib';
import { RestContextCreate } from '../model/models';
import { RestContextUpdate } from '../model/models';

describe('ContextsService', () => {
    let service: ContextsService;
    let authService: AuthService;
    let oauth2Service: Oauth2Service;

    const testContext = 'TEST_CONTEXT';
    const testUrl = '/testpath';
    const modUrl = '/modpath';

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                NGXLogger,
                ContextsService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule, LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG})]
        });

        const httpClient = TestBed.get(HttpClient);
        const logger: NGXLogger = TestBed.get(NGXLogger);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null, logger);
        oauth2Service = new Oauth2Service(httpClient, TEST_BASE_PATH, null);
        service = new ContextsService(httpClient, TEST_BASE_PATH, null);

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
                service.deleteContext('Default', 'vipera', testContext).subscribe(value => {
                }, error => {
                })
            })
    );

    it(`should create a rest context`,
        async(
            () => {
                const rcc: RestContextCreate = {
                    context: testContext,
                    url: testUrl
                }
                service.createContext('Default', 'vipera', rcc).subscribe(value => {
                    expect(value).toBeDefined();
                    expect(value.name).toBe(testContext);
                    expect(value.channel).toBe('REST');
                    expect(value.domain).toBe('Default');
                    expect(value.application).toBe('vipera');
                    expect(value.enabled).toBeTruthy();
                    expect(value.valuesList).toBeDefined();
                    value.valuesList.forEach((value) => {
                        if (value.attribute.name === 'URL') {
                            expect(value.value).toBe(testUrl);
                        }
                    });
                }, error => {
                    failTestWithError('should create a rest context', error);
                })
            }
        )
    );

    it(`should update a rest context`,
        async(
            () => {
                const rcu: RestContextUpdate = {
                    url: modUrl
                }
                service.updateContext('Default', 'vipera', testContext, rcu).subscribe(value => {
                }, error => {
                    failTestWithError('should update a rest context', error);
                })
            }
        )
    );

    it(`should retrieve a rest context`,
        async(
            () => {
                service.getContext('Default', 'vipera', testContext).subscribe(value => {
                    expect(value).toBeDefined();
                    expect(value.name).toBe(testContext);
                    expect(value.channel).toBe('REST');
                    expect(value.domain).toBe('Default');
                    expect(value.application).toBe('vipera');
                    expect(value.enabled).toBeTruthy();
                    expect(value.valuesList).toBeDefined();
                    value.valuesList.forEach((value) => {
                        if (value.attribute.name === 'URL') {
                            expect(value.value).toBe(modUrl);
                        }
                    });
                }, error => {
                    failTestWithError('should retrieve a rest context', error);
                })
            }
        )
    );

    it(`should retrieve all rest context`,
        async(
            () => {
                service.getContexts('Default', 'vipera').subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    value.forEach((v) => {
                        if (v.name === testContext) {
                            expect(v).toBeDefined();
                            expect(v.name).toBe(testContext);
                            expect(v.channel).toBe('REST');
                            expect(v.domain).toBe('Default');
                            expect(v.application).toBe('vipera');
                            expect(v.enabled).toBeTruthy();
                            expect(v.valuesList).toBeDefined();
                            v.valuesList.forEach((a) => {
                                if (a.attribute.name === 'URL') {
                                    expect(a.value).toBe(modUrl);
                                }
                            });
                        }
                    });
                }, error => {
                    failTestWithError('should retrieve all rest context', error);
                })
            }
        )
    );

    it(`should delete a rest context`,
        async(
            () => {
                service.deleteContext('Default', 'vipera', testContext).subscribe(value => {
                }, error => {
                    failTestWithError('should delete a rest context', error);
                })
            }
        )
    );

    it(`should check deletion of a rest context`,
        async(
            () => {
                service.getContext('Default', 'vipera', testContext).subscribe(value => {
                    failTestWithMessage('should check deletion of a rest context', 'context should not be there');
                }, error => {
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
