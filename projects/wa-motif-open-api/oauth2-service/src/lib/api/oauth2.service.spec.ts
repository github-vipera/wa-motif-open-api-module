import { TestBed, async, inject } from '@angular/core/testing';
import { Oauth2Service } from './oauth2.service'
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { MotifCommunicatoriTestHelper } from './motif-communicator-test-helper'
import { AuthService, WebConsoleConfig } from 'web-console-core'
import { TEST_BASE_PATH } from '../test.variables'
import { RefreshToken } from '../model/refreshToken';
import { OAuthRequest } from '../model/oAuthRequest';
import { AccessToken } from '@wa-motif-open-api/oauth2-service/lib';

describe('OAuth2Service', () => {

    let service: Oauth2Service;
    let motifCommunicatoriTestHelper: MotifCommunicatoriTestHelper;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                Oauth2Service,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule]
        });
        service = TestBed.get(Oauth2Service);

        console.log("this.motifCommunicatoriTestHelper beforeEach ********");

    });

    afterEach(() => {
    });

    it(`should issue a user refresh tokens list request`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let myService = new Oauth2Service(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    myService.getUserRefreshTokenList('Default', 'admin').subscribe(value => {
                        expect(value.length).toBeGreaterThan(0);
                        value.forEach(function (rt: RefreshToken) {
                            expect(rt.domain).toBe('Default');
                            expect(rt.userId).toBe('admin');
                            expect(rt.tokenType).toBe('REFRESH_TOKEN');
                            expect(rt.token).toBeDefined;
                        });
                    }, error => {
                        console.log("getUserRefreshTokensList Error", error);
                    })

                }, error => {
                    console.log("getUserRefreshTokensList error", error);
                })

            })

        )
    );

    it(`should issue a access tokens list request`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let myService = new Oauth2Service(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    myService.getAccessTokenList(this.motifCommunicatoriTestHelper.authService.getRefreshToken()).subscribe(value => {
                        expect(value.length).toBeGreaterThan(0);
                        value.forEach(function (at: AccessToken) {
                            expect(at.domain).toBe('Default');
                            expect(at.userId).toBe('admin');
                            expect(at.tokenType).toBe('ACCESS_TOKEN');
                            expect(at.token).toBeDefined;
                        });
                    }, error => {
                        console.log("getAccessTokensList Error", error);
                    })

                }, error => {
                    console.log("getAccessTokensList error", error);
                })

            })

        )
    );

    it(`should issue a validate refresh token request`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let myService = new Oauth2Service(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    myService.validate(this.motifCommunicatoriTestHelper.authService.getRefreshToken()).subscribe(value => {
                    }, error => {
                        console.log("validateRefreshToken Error", error);
                    })

                }, error => {
                    console.log("validateRefreshToken error", error);
                })

            })

        )
    );

    it(`should issue a validate access token request`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let myService = new Oauth2Service(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    myService.validate(this.motifCommunicatoriTestHelper.authService.getAccessToken()).subscribe(value => {
                    }, error => {
                        console.log("validateAccessToken Error", error);
                    })

                }, error => {
                    console.log("validateAccessToken error", error);
                })

            })

        )
    );

    it(`should issue a refresh tokens list request`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let myService = new Oauth2Service(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    myService.getRefreshTokenList(1, 2, '-create_time').subscribe(value => {
                        expect(value.length).toBe(2);
                        value.forEach(function (rt: RefreshToken) {
                            expect(rt.tokenType).toBe('REFRESH_TOKEN');
                            expect(rt.token).toBeDefined;
                        });
                    }, error => {
                        console.log("getRefreshTokensList Error", error);
                    })

                }, error => {
                    console.log("getRefreshTokensList error", error);
                })

            })

        )
    );

    it(`should issue a revoke refresh token request`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let myService = new Oauth2Service(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    myService.revoke(this.motifCommunicatoriTestHelper.authService.getRefreshToken()).subscribe(value => {
                    }, error => {
                        console.log("revokeRefreshToken Error", error);
                    })

                }, error => {
                    console.log("revokeRefreshToken error", error);
                })

            })

        )
    );

    it(`should issue a revoke access token request`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let myService = new Oauth2Service(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    myService.revoke(this.motifCommunicatoriTestHelper.authService.getAccessToken()).subscribe(value => {
                    }, error => {
                        console.log("revokeAccessToken Error", error);
                    })

                }, error => {
                    console.log("revokeAccessToken error", error);
                })

            })

        )
    );

});
