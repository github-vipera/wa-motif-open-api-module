import { TestBed, async, inject } from '@angular/core/testing';
import { Oauth2Service } from './oauth2.service'
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig } from 'web-console-core'
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../test.variables'
import { RefreshToken } from '../model/refreshToken';
import { OAuthRequest } from '../model/oAuthRequest';
import { AccessToken } from '../model/accessToken';
import { failTestWithError, failLogin } from '../test-helper';

describe('OAuth2Service', () => {
    let authService: AuthService;
    let service: Oauth2Service;

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                Oauth2Service,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule]
        });

        const httpClient = TestBed.get(HttpClient);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null);
        service = new Oauth2Service(httpClient, TEST_BASE_PATH, new Configuration());

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

    it(`should issue a user refresh tokens list request`,
        async(
            () => {
                service.getUserRefreshTokenList('Default', 'admin').subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    value.forEach(function (rt: RefreshToken) {
                        expect(rt.domain).toBe('Default');
                        expect(rt.userId).toBe('admin');
                        expect(rt.tokenType).toBe('REFRESH_TOKEN');
                        expect(rt.token).toBeDefined();
                    });
                }, error => {
                    failTestWithError("should issue a user refresh tokens list request", error);
                })
            }
        )
    );

    it(`should issue a access tokens list request`,
        async(
            () => {
                service.getAccessTokenList(authService.getRefreshToken()).subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    value.forEach(function (at: AccessToken) {
                        expect(at.domain).toBe('Default');
                        expect(at.userId).toBe('admin');
                        expect(at.tokenType).toBe('ACCESS_TOKEN');
                        expect(at.token).toBeDefined();
                    });
                }, error => {
                    failTestWithError("should issue a access tokens list request", error);
                })
            }
        )
    );

    it(`should issue a validate refresh token request`,
        async(
            () => {
                let oauthReq: OAuthRequest = {
                    clientId: '123456789',
                    token: authService.getRefreshToken(),
                    tokenType: 'REFRESH_TOKEN'
                }
                service.validate(oauthReq).subscribe(value => {
                }, error => {
                    failTestWithError("should issue a validate refresh token request", error);
                })
            }
        )
    );

    it(`should issue a validate access token request`,
        async(
            () => {
                let oauthReq: OAuthRequest = {
                    clientId: '123456789',
                    token: authService.getAccessToken(),
                    tokenType: 'ACCESS_TOKEN'
                }
                service.validate(oauthReq).subscribe(value => {
                }, error => {
                    failTestWithError("should issue a validate access token request", error);
                })
            }
        )
    );

    it(`should issue a refresh tokens list request`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            () => {
                service.getRefreshTokenList('Default', 1, 1, 'create_time').subscribe(value => {
                    expect(value.length).toBe(1);
                    value.forEach(function (rt: RefreshToken) {
                        expect(rt.tokenType).toBe('REFRESH_TOKEN');
                        expect(rt.token).toBeDefined();
                    });
                }, error => {
                    failTestWithError("should issue a refresh tokens list request", error);
                })
            }
        )
    );

    it(`should issue a revoke token request`,
    async(
        () => {
            let oauthReq: OAuthRequest = {
                clientId: '123456789',
                token: authService.getRefreshToken(),
                tokenType: 'REFRESH_TOKEN'
            }

            service.revoke(oauthReq).subscribe(value => {
            }, error => {
                failTestWithError("should issue a revoke token request", error);
            })
        }
    )
    );
});
