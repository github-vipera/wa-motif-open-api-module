import { TestBed, async, inject } from '@angular/core/testing';
import { ServicesService } from './services.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig, NGXLogger, LoggerModule, NgxLoggerLevel, EventBusService } from 'web-console-core';
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../../../../test.variables'
import { failTestWithError, failLogin } from '../../../../test-helper';
import * as _ from 'lodash';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service'
import { OAuthRequest } from '../../../../oauth2-service/src/lib/model/oAuthRequest';
import { ServiceCreate } from '../model/serviceCreate';
import { ServiceUpdate } from '../model/serviceUpdate';

describe('ServicesService', () => {
    let authService: AuthService;
    let service: ServicesService;
    let oauth2Service: Oauth2Service;

    let TEST_SERVICE: string = "TEST_SERVICE";

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                NGXLogger,
                ServicesService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule, LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG})]
        });

        const httpClient = TestBed.get(HttpClient);
        const logger: NGXLogger = TestBed.get(NGXLogger);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null, new EventBusService(logger), logger);
        oauth2Service = new Oauth2Service(httpClient, TEST_BASE_PATH, null);
        service = new ServicesService(httpClient, TEST_BASE_PATH, new Configuration());

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
                service.deleteService('REST', 'Default', 'vipera', TEST_SERVICE).subscribe(value => {
                }, error => {
                })

            }

        )
    );

    it(`should create a new service`,
        async(
            () => {
                let sc: ServiceCreate = {
                    name: TEST_SERVICE
                }
                service.createService('REST', 'Default', 'vipera', sc).subscribe(value => {
                    expect(value.name).toBe(TEST_SERVICE);
                }, error => {
                    failTestWithError("should create a new service", error);
                })
            }
        )
    );

    it(`should update test service`,
        async(
            () => {
                let su: ServiceUpdate = {
                    enabled: false,
                    countersPlugin: 'countersPlugin',
                    thresholdActionsPlugin: 'thresholdActionsPlugin',
                    thresholdChecksPlugin: 'thresholdChecksPlugin'
                }
                service.updateService('REST', 'Default', 'vipera', TEST_SERVICE, su).subscribe(value => {
                }, error => {
                    failTestWithError("should update test service", error);
                })
            }
        )
    );

    it(`should retrieve test service`,
        async(
            () => {
                service.getService('REST', 'Default', 'vipera', TEST_SERVICE).subscribe(value => {
                    expect(value.name).toBe(TEST_SERVICE);
                    expect(value.enabled).toBe(false);
                    expect(value.countersPlugin).toBe('countersPlugin');
                    expect(value.thresholdActionsPlugin).toBe('thresholdActionsPlugin');
                    expect(value.thresholdChecksPlugin).toBe('thresholdChecksPlugin');
                }, error => {
                    failTestWithError("should retrieve test service", error);
                })
            }
        )
    );

    it(`should clean stuff`,
        async(
            () => {
                service.deleteService('REST', 'Default', 'vipera', TEST_SERVICE).subscribe(value => {
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
