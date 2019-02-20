import { TestBed, async } from '@angular/core/testing';
import { AssetsService } from './assets.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig, NGXLogger, LoggerModule, NgxLoggerLevel } from 'web-console-core'
import * as _ from 'lodash';
import { AssetBundleUpdate } from '../model/assetBundleUpdate';

import { failLogin, failTestWithError, b64toFile, blobToB64 } from '../../../../test-helper';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service'
import { OAuthRequest } from '../../../../oauth2-service/src/lib/model/oAuthRequest';
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../../../../test.variables';

const TEST_ENGINE: string = "testengine";
const TEST_ASSET: string = "UEsDBBQAAAAIADiK2kK82AhoWAAAAIYAAAAKAAAAaW5kZXguaHRtbLNRdPF3DokMcFXIKMnNseOygVAKQGCTkZqYAmGCubmpJYkKyRmJRcWpJbZKpSVpuhZKUJX6CKU2SfkplUi6Cuw8UnNy8hXC84tyUmz0C2A6IMqAOkH2AQBQSwECHwAUAAAACAA4itpCvNgIaFgAAACGAAAACgAkAAAAAAAAACAAAAAAAAAAaW5kZXguaHRtbAoAIAAAAAAAAQAYAGSXplGAcs4B2tp3OoByzgHa2nc6gHLOAVBLBQYAAAAAAQABAFwAAACAAAAAAAA=";

describe('AssetsService', () => {
    let service: AssetsService;
    let authService: AuthService;
    let oauth2Service: Oauth2Service;

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                NGXLogger,
                AssetsService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule, LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG})]
        });

        const httpClient = TestBed.get(HttpClient);
        const logger: NGXLogger = TestBed.get(NGXLogger);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null, logger);
        oauth2Service = new Oauth2Service(httpClient, TEST_BASE_PATH, null);
        service = new AssetsService(httpClient, TEST_BASE_PATH, null);

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

    it(`should upload a new asset`,
        async(
            () => {
                let file: File = b64toFile(TEST_ASSET, 'testassets-1.2.3.zip', 512);
                service.uploadAsset("Default", file).subscribe(value => {
                }, error => {
                    failTestWithError("should upload a new asset", error);
                })
            }
        )
    );

    it(`should download an asset`,
        async(
            () => {
                service.downloadAsset("Default", "testassets", "1.2.3").subscribe(value => {
                    blobToB64(value).then((data:string) => {
                        expect(data.split(',')[1]).toBe(TEST_ASSET);
                    }, (error) => {
                        failTestWithError("should download an asset", error);
                    });
                }, error => {
                    failTestWithError("should download an asset", error);
                })
            }
        )
    );

    it(`should get a list of assets`,
    async(
        () => {
            service.getAssets("Default").subscribe(value => {
                expect(value.length).toBeGreaterThan(0);
            }, error => {
                failTestWithError("should get a list of assets", error);
            })
        }
    )
    );

    it(`should update an asset`,
        async(
            () => {
                let assetBundleUpdate: AssetBundleUpdate = {
                    published: false
                }
                service.updateAsset("Default", "testassets", "1.2.3", assetBundleUpdate).subscribe(value => {
                }, error => {
                    failTestWithError("should update an asset", error);
                })
            }
        )
    );

    it(`should delete an asset`,
        async(
            () => {
                service.deleteAsset("Default", "testassets", "1.2.3").subscribe(value => {
                }, error => {
                    failTestWithError("should delete an asset", error);
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
