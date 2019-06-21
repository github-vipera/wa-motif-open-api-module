import { TestBed, async, inject } from '@angular/core/testing';
import { SettingsService } from './settings.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig, NGXLogger, LoggerModule, NgxLoggerLevel, EventBusService } from 'web-console-core';
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../../../../test.variables'
import * as _ from 'lodash';
import { failTestWithError, failLogin } from '../../../../test-helper';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service'
import { OAuthRequest } from '../../../../oauth2-service/src/lib/model/oAuthRequest';
import { SettingCreate } from '../model/settingCreate';
import { SettingUpdate } from '../model/settingUpdate';
import { SettingEntity } from '../model/settingEntity';

const TEST_SERVICE: string = "com.vipera.osgi.plugin.smsout.clickatell";
const TEST_SETTING: string = "testsetting";

describe('SettingsService', () => {
    let authService: AuthService;
    let oauth2Service: Oauth2Service;
    let service: SettingsService;

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                NGXLogger,
                SettingsService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule, LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG})]
        });

        const httpClient = TestBed.get(HttpClient);
        const logger: NGXLogger = TestBed.get(NGXLogger);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null, new EventBusService(logger), logger);
        oauth2Service = new Oauth2Service(httpClient, TEST_BASE_PATH, null);
        service = new SettingsService(httpClient, TEST_BASE_PATH, new Configuration());

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

    it(`should retrieve all configurable services`,
        async(
            () => {
                service.getServices().subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                }, error => {
                    failTestWithError("should retrieve all configurable services", error);
                })
            }
        )
    );

    it(`should create a new setting`,
        async(
            () => {
                let s: SettingCreate = {
                    name: TEST_SETTING,
                    crypted: false,
                    dynamic: true,
                    type: "java.lang.String",
                    value: "testvalue"
                }
                service.createSetting(TEST_SERVICE, s).subscribe(value => {
                    expect(value.name).toBe(TEST_SETTING);
                    expect(value.type).toBe("java.lang.String");
                    expect(value.crypted).toBeFalsy();
                    expect(value.dynamic).toBeTruthy();
                    expect(value.value).toBe("testvalue");
                }, error => {
                    failTestWithError("should create a new setting", error);
                })
            }
        )
    );

    it(`should retrieve a setting`,
        async(
            () => {
                service.getSetting(TEST_SERVICE, TEST_SETTING).subscribe(value => {
                    expect(value.name).toBe(TEST_SETTING);
                    expect(value.type).toBe("java.lang.String");
                    expect(value.crypted).toBeFalsy();
                    expect(value.dynamic).toBeTruthy();
                    expect(value.value).toBe("testvalue");
                }, error => {
                    failTestWithError("should create a new setting", error);
                })
            }
        )
    );

    it(`should retrieve all settings`,
        async(
            () => {
                service.getSettings(TEST_SERVICE).subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    let s: SettingEntity = _.find(value, function (o: SettingEntity) {
                        return (o.name === TEST_SETTING);
                    });
                    expect(s).toBeDefined();
                }, error => {
                    failTestWithError("should retrieve all settings", error);
                })
            }
        )
    );

    it(`should update setting`,
        async(
            () => {
                let su: SettingUpdate = {
                    crypted: true,
                    dynamic: false,
                    type: "java.lang.Boolean",
                    value: "testvaluenew"
                }
                service.updateSetting(TEST_SERVICE, TEST_SETTING, su).subscribe(value => {
                }, error => {
                    failTestWithError("should update setting", error);
                })
            }
        )
    );

    it(`should delete setting`,
        async(
            () => {
                service.deleteSetting(TEST_SERVICE, TEST_SETTING).subscribe(value => {
                }, error => {
                    failTestWithError("should delete setting", error);
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
