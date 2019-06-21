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
import { ServiceOperationProperties } from '../model/serviceOperationProperties';
import { ServiceOperation } from '../model/serviceOperation';
import { OperationsService } from './operations.service';

describe('OperationsService', () => {
    let authService: AuthService;
    let servicesService: ServicesService;
    let service: OperationsService
    let oauth2Service: Oauth2Service;

    let TEST_SERVICE: string = "TEST_SERVICE";
    let TEST_OPERATION: string = "TEST_OPERATION";

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
        servicesService = new ServicesService(httpClient, TEST_BASE_PATH, new Configuration());
        service = new OperationsService(httpClient, TEST_BASE_PATH, new Configuration());

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
                service.deleteServiceOperation('REST', 'Default', 'vipera', TEST_SERVICE, TEST_OPERATION).subscribe(value => {
                    servicesService.deleteService('REST', 'Default', 'vipera', TEST_SERVICE).subscribe(value => {
                    }, error => {
                    })
                }, error => {
                })
            }
        )
    );

    it(`should create a new operation`,
        async(
            () => {
                let sc: ServiceCreate = {
                    name: TEST_SERVICE
                }
                servicesService.createService('REST', 'Default', 'vipera', sc).subscribe(value => {
                    let so: ServiceOperation = {
                        name: TEST_OPERATION,
                        description: 'test',
                        pluginName: 'test',
                        counted: false,
                        encryptActive: false,
                        inputParams: btoa('[]'),
                        outputParams: btoa('[]'),
                        secure: false,
                        sessionless: false
                    }
                    service.createServiceOperation('REST', 'Default', 'vipera', TEST_SERVICE, so).subscribe(value => {
                        expect(value.name).toBe(TEST_OPERATION);
                    }, error => {
                        failTestWithError("should create a new operation", error);
                    })
                }, error => {
                    failTestWithError("should create a new service", error);
                })
            }
        )
    );

    it(`should update an operation`,
    async(
        () => {
            let sop: ServiceOperationProperties = {
                counted: true,
                description: 'test2',
                encryptActive: true,
                pluginName: 'test2',
                secure: true,
                sessionless: true
            }
            service.updateServiceOperation('REST', 'Default', 'vipera', TEST_SERVICE, TEST_OPERATION, sop).subscribe(value => {
            }, error => {
                failTestWithError("should update an operation", error);
            })
        }
    )
    );

    it(`should retrieve an operation`,
    async(
        () => {
            service.getServiceOperation('REST', 'Default', 'vipera', TEST_SERVICE, TEST_OPERATION).subscribe(value => {
                expect(value.name).toBe(TEST_OPERATION);
                expect(value.counted).toBe(true);
                expect(value.description).toBe('test2');
                expect(value.encryptActive).toBe(true);
                expect(value.pluginName).toBe('test2');
                expect(value.secure).toBe(true);
                expect(value.sessionless).toBe(true);
            }, error => {
                failTestWithError("should retrieve an operation", error);
            })
        }
    )
    );

    it(`should delete an operation`,
    async(
        () => {
            service.deleteServiceOperation('REST', 'Default', 'vipera', TEST_SERVICE, TEST_OPERATION).subscribe(value => {
            }, error => {
                failTestWithError("should delete an operation", error);
            })
        }
    )
    );

    it(`should clean stuff`,
        async(
            () => {
                service.deleteServiceOperation('REST', 'Default', 'vipera', TEST_SERVICE, TEST_OPERATION).subscribe(value => {
                    servicesService.deleteService('REST', 'Default', 'vipera', TEST_SERVICE).subscribe(value => {
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
                    })
                }, error => {
                })
            }
        )
    );

});
