import { TestBed, async, inject } from '@angular/core/testing';
import { DomainsService } from './domains.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig } from 'web-console-core'
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../../../../test.variables'
import { failTestWithError, failLogin } from '../../../../test-helper';
import * as _ from 'lodash';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service'
import { OAuthRequest } from '../../../../oauth2-service/src/lib/model/oAuthRequest';
import { DomainCreate } from '../model/domainCreate';

const TEST_DOMAIN: string = "testdomain";

describe('DomainsService', () => {
    let authService: AuthService;
    let oauth2Service: Oauth2Service;
    let service: DomainsService;

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                DomainsService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule]
        });

        const httpClient = TestBed.get(HttpClient);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null);
        oauth2Service = new Oauth2Service(httpClient, TEST_BASE_PATH, null);
        service = new DomainsService(httpClient, TEST_BASE_PATH, new Configuration());

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

    it(`should create a new domain`,
        async(
            () => {
                let dc: DomainCreate = {
                    name: TEST_DOMAIN,
                    description: "testdescription"
                }
                service.createDomain(dc).subscribe(value => {
                    expect(value.name).toBe(TEST_DOMAIN);
                    expect(value.description).toBe('testdescription');
                }, error => {
                    failTestWithError("should create a new domain", error);
                })
            }
        )
    );

    it(`should retrieve a domain`,
        async(
            () => {
                service.getDomain(TEST_DOMAIN).subscribe(value => {
                    expect(value.name).toBe(TEST_DOMAIN);
                    expect(value.description).toBe('testdescription');
                }, error => {
                    failTestWithError("should retrieve a domain", error);
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
