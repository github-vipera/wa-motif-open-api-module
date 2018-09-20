import { TestBed, async, inject } from '@angular/core/testing';
import { PermissionsService } from './permissions.service'
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { MotifCommunicatoriTestHelper } from './motif-communicator-test-helper'
import { AuthService, WebConsoleConfig } from 'web-console-core'
import { Permission } from '../model/permission'
import { TEST_BASE_PATH } from '../test.variables'
import * as _ from 'lodash';

describe('PermissionsService', () => {

    let service: PermissionsService;
    let motifCommunicatoriTestHelper: MotifCommunicatoriTestHelper;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                PermissionsService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule]
        });
        service = TestBed.get(PermissionsService);

        console.log("this.motifCommunicatoriTestHelper beforeEach ********");

    });

    afterEach(() => {
    });

    it(`should delete the test permission`,
    // 1. declare as async test since the HttpClient works with Observables
    async(
        inject([HttpClient], (http: HttpClient) => {
            // 1. inject HttpClient into the test
            this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

            // 2. perform the authentication
            this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                // 3. send the request to test
                let myService = new PermissionsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                myService.deletePermission('testcomponent', 'VIEW', 'testtarget').subscribe(value => {
                }, error => {
                    console.log("deletePermission Error", error);
                })

            }, error => {
                console.log("deletePermission error", error);
            })

        })

    )
    );

    it(`should create a new permission`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let myService = new PermissionsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    myService.createPermission('testcomponent', 'VIEW', 'testtarget').subscribe(value => {
                        expect(value.component).toBe('testcomponent');
                        expect(value.action).toBe('VIEW');
                        expect(value.target).toBe('testtarget');
                    }, error => {
                        console.log("createPermission Error", error);
                    })

                }, error => {
                    console.log("createPermission error", error);
                })

            })

        )
    );

    it(`should retrieve test permission`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let myService = new PermissionsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    myService.getPermission('testcomponent', 'VIEW', 'testtarget').subscribe(value => {
                        expect(value.component).toBe('testcomponent');
                        expect(value.action).toBe('VIEW');
                        expect(value.target).toBe('testtarget');
                    }, error => {
                        console.log("getPermission Error", error);
                    })

                }, error => {
                    console.log("getPermission error", error);
                })

            })

        )
    );

    it(`should retrieve all permissions`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let myService = new PermissionsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    myService.getPermissions().subscribe(value => {
                        expect(value.length).toBeGreaterThan(0);
                        let p:Permission = _.find(value, function(o:Permission) {
                            return (o.component === 'testcomponent' &&
                                o.action === 'VIEW' &&
                                o.target === 'testtarget');
                        });
                        expect(p).toBeDefined;
                    }, error => {
                        console.log("getPermissions Error", error);
                    })

                }, error => {
                    console.log("getPermissions error", error);
                })

            })

        )
    );

    it(`should delete the test permission`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let myService = new PermissionsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    myService.deletePermission('testcomponent', 'VIEW', 'testtarget').subscribe(value => {
                    }, error => {
                        console.log("deletePermission Error", error);
                    })

                }, error => {
                    console.log("deletePermission error", error);
                })

            })

        )
    );
});
