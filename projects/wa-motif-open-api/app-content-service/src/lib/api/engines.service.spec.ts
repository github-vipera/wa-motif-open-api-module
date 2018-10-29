import { TestBed, async } from '@angular/core/testing';
import { EnginesService } from './engines.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig } from 'web-console-core'
import { TEST_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../../../../test.variables'
import * as _ from 'lodash';
import { failTestWithError } from '../../../../test-helper';
import { EngineCreate } from '../model/engineCreate';
import { EngineUpdate } from '../model/engineUpdate';
import { Engine } from '../model/engine';

const TEST_ENGINE: string = "testengine";

describe('EnginesService', () => {
    let service: EnginesService;

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                EnginesService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule]
        });

        const httpClient = TestBed.get(HttpClient);
        let conf:Configuration = {
            username: TEST_USERNAME,
            password: TEST_PASSWORD,
            selectHeaderAccept: (accepts:string[]) => { return accepts[0] },
            selectHeaderContentType: (contentTypes:string[]) => { return contentTypes[0] },
            isJsonMime: (mime:string) => { return true; }
        }
        service = new EnginesService(httpClient, TEST_BASE_PATH, conf);
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
                service.createEngine("default", ec).subscribe(value => {
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
                service.getEngine("default", TEST_ENGINE).subscribe(value => {
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
                service.getEngines("default").subscribe(value => {
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

                service.updateEngine("default", TEST_ENGINE, eu).subscribe(value => {
                }, error => {
                    failTestWithError("should retrieve all engines", error);
                })
            }
        )
    );

    it(`should delete an engine`,
        async(
            () => {
                service.deleteEngine("default", TEST_ENGINE).subscribe(value => {
                }, error => {
                    failTestWithError("should delete an engine", error);
                })
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
