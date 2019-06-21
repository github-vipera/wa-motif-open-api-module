import { TestBed, async } from '@angular/core/testing';
import { DatarecordsService } from './datarecords.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig, NGXLogger, LoggerModule, NgxLoggerLevel, EventBusService } from 'web-console-core';
import * as _ from 'lodash';

import { failLogin, failTestWithError, b64toFile, blobToB64, failTestWithMessage } from '../../../../test-helper';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service'
import { OAuthRequest } from '../../../../oauth2-service/src/lib/model/oAuthRequest';
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../../../../test.variables';

import moment = require('moment');

describe('DatarecordsService', () => {
    let service: DatarecordsService;
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
                DatarecordsService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule, LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG})]
        });

        const httpClient = TestBed.get(HttpClient);
        const logger: NGXLogger = TestBed.get(NGXLogger);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null, new EventBusService(logger), logger);
        oauth2Service = new Oauth2Service(httpClient, TEST_BASE_PATH, null);
        service = new DatarecordsService(httpClient, TEST_BASE_PATH, null);

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

    it(`should verify datarecords export`,
        async(
            () => {
                service.verifyDatarecordsExport('SECURITY', null, null, null, startDate, endDate, null, false, false).subscribe(value => {
                }, error => {
                    failTestWithError('should verify datarecords export', error);
                })
            }
        )
    );

    it(`should export datarecords`,
        async(
            () => {
                service.exportDatarecords('SECURITY', null, null, null, startDate, endDate, null, false, false).subscribe(value => {
                }, error => {
                    failTestWithError('should export datarecords', error);
                })
            }
        )
    );

    it(`should retrieve datarecords`,
        async(
            () => {
                service.getDatarecords('SECURITY', startDate, endDate, 1, 30, null).subscribe(value => {
                    console.log(value);
                }, error => {
                    failTestWithError('should retrieves datarecords', error);
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
