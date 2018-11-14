import { TestBed, async } from '@angular/core/testing';
import { AssetsService } from './assets.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig } from 'web-console-core'
import { TEST_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../../../../test.variables'
import * as _ from 'lodash';
import { failTestWithError, b64toFile, blobToB64 } from '../../../../test-helper';
import { AssetBundleUpdate } from '../model/assetBundleUpdate';

const TEST_ENGINE: string = "testengine";
const TEST_ASSET: string = "UEsDBBQAAAAIADiK2kK82AhoWAAAAIYAAAAKAAAAaW5kZXguaHRtbLNRdPF3DokMcFXIKMnNseOygVAKQGCTkZqYAmGCubmpJYkKyRmJRcWpJbZKpSVpuhZKUJX6CKU2SfkplUi6Cuw8UnNy8hXC84tyUmz0C2A6IMqAOkH2AQBQSwECHwAUAAAACAA4itpCvNgIaFgAAACGAAAACgAkAAAAAAAAACAAAAAAAAAAaW5kZXguaHRtbAoAIAAAAAAAAQAYAGSXplGAcs4B2tp3OoByzgHa2nc6gHLOAVBLBQYAAAAAAQABAFwAAACAAAAAAAA=";

describe('AssetsService', () => {
    let service: AssetsService;

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                AssetsService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule]
        });

        const httpClient = TestBed.get(HttpClient);
        let conf: Configuration = {
            username: TEST_USERNAME,
            password: TEST_PASSWORD,
            selectHeaderAccept: (accepts: string[]) => { return accepts[0] },
            selectHeaderContentType: (contentTypes: string[]) => { return contentTypes[0] },
            isJsonMime: (mime: string) => { return true; }
        }
        service = new AssetsService(httpClient, TEST_BASE_PATH, conf);
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
            }
        )
    );

});
