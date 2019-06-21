import { TestBed, async } from '@angular/core/testing';
import { EnginesService } from './engines.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig, NGXLogger, LoggerModule, NgxLoggerLevel, EventBusService } from 'web-console-core';
import * as _ from 'lodash';
import { EngineCreate } from '../model/engineCreate';
import { EngineUpdate } from '../model/engineUpdate';
import { Engine } from '../model/engine';

import { failLogin, failTestWithError, b64toFile, blobToB64 } from '../../../../test-helper';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service'
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../../../../test.variables';

const TEST_ENGINE: string = "testengine";

describe('EnginesService', () => {
    let service: EnginesService;
    let authService: AuthService;
    let oauth2Service: Oauth2Service;

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                NGXLogger,
                EnginesService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule, LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG})]
        });

        const httpClient = TestBed.get(HttpClient);
        const logger: NGXLogger = TestBed.get(NGXLogger);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null, new EventBusService(logger), logger);
        oauth2Service = new Oauth2Service(httpClient, TEST_BASE_PATH, null);
        service = new EnginesService(httpClient, TEST_BASE_PATH, null);

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
                let ec: EngineCreate = {
                    name: TEST_ENGINE,
                    forbiddenVersion: "0.0.1",
                    downloadUrl: "testdownloadurl",
                    latestVersion: "1.0.0"
                }
                service.createEngine("Default", ec).subscribe(value => {
                    expect(value.name).toBe(TEST_ENGINE);
                    expect(value.latestVersion).toBe('1.0.0');
                    expect(value.forbiddenVersion).toBe('0.0.1');
                    expect(value.downloadUrl).toBe('testdownloadurl');
                }, error => {
                    failTestWithError("should create a new engine", error);
                })
            }
        )
    );

    it(`should retrieve an engine`,
        async(
            () => {
                service.getEngine("Default", TEST_ENGINE).subscribe(value => {
                    expect(value.name).toBe(TEST_ENGINE);
                    expect(value.latestVersion).toBe('1.0.0');
                    expect(value.forbiddenVersion).toBe('0.0.1');
                    expect(value.downloadUrl).toBe('testdownloadurl');
                }, error => {
                    failTestWithError("should retrieve an engine", error);
                })
            }
        )
    );

    it(`should retrieve all engines`,
        async(
            () => {
                service.getEngines("Default").subscribe(value => {
                    let e: Engine = _.find(value, function (o: Engine) {
                        return (o.name === TEST_ENGINE);
                    });
                    expect(e).toBeDefined();
                }, error => {
                    failTestWithError("should retrieve all engines", error);
                })
            }
        )
    );

    it(`should update an engine`,
        async(
            () => {
                let eu: EngineUpdate = {
                    forbiddenVersion: "0.0.2",
                    downloadUrl: "testdownloadurlnew",
                    latestVersion: "1.0.1"
                }

                service.updateEngine("Default", TEST_ENGINE, eu).subscribe(value => {
                }, error => {
                    failTestWithError("should retrieve all engines", error);
                })
            }
        )
    );

    it(`should delete an engine`,
        async(
            () => {
                service.deleteEngine("Default", TEST_ENGINE).subscribe(value => {
                }, error => {
                    failTestWithError("should delete an engine", error);
                })
            }
        )
    );

    it(`should clean stuff`,
        async(
            () => {
                authService.logout().subscribe(value => {
                }, error => {
                    failTestWithError("should clean stuff", error);
                })
            }
        )
    );

});
