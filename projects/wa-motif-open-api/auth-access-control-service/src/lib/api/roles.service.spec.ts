import { TestBed, async, inject } from '@angular/core/testing';
import { RolesService } from './roles.service'
import { Role } from '../model/role'
import { RoleCreate } from '../model/roleCreate'
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { MotifCommunicatoriTestHelper } from './motif-communicator-test-helper'
import { AuthService, WebConsoleConfig } from 'web-console-core'
import { Permission } from '../model/permission'
import { TEST_BASE_PATH } from '../test.variables'
import * as _ from 'lodash';

describe('RolesService', () => {

    let service: RolesService;
    let motifCommunicatoriTestHelper: MotifCommunicatoriTestHelper;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                RolesService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule]
        });
        service = TestBed.get(RolesService);

        console.log("this.motifCommunicatoriTestHelper beforeEach ********");

    });

    afterEach(() => {
    });

    it(`should delete the test role`,
    // 1. declare as async test since the HttpClient works with Observables
    async(
        inject([HttpClient], (http: HttpClient) => {
            // 1. inject HttpClient into the test
            this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

            // 2. perform the authentication
            this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                // 3. send the request to test
                let myService = new RolesService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                myService.deleteRole('TESTROLE').subscribe(value => {
                }, error => {
                    console.log("deleteRole Error", error);
                })

            }, error => {
                fail('deleteRole login failed');
                console.log("deleteRole error", error);
            })

        })

    )
    );

    it(`should create a new role`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let myService = new RolesService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());

                    let rc:RoleCreate = {
                        name : 'TESTROLE',
                        description : 'testdescription'
                    }

                    myService.createRole(rc).subscribe(value => {
                        expect(value.name).toBe('TESTROLE');
                        expect(value.description).toBe('testdescription');
                    }, error => {
                        fail('createRole failed');
                        console.log("createRole Error", error);
                    })

                }, error => {
                    fail('createRole login failed');
                    console.log("createRole error", error);
                })

            })

        )
    );

    it(`should retrieve test role`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let myService = new RolesService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    myService.getRole('TESTROLE').subscribe(value => {
                        expect(value.name).toBe('TESTROLE');
                        expect(value.description).toBe('testdescription');
                    }, error => {
                        fail('getRole failed');
                        console.log("getRole Error", error);
                    })

                }, error => {
                    fail('getRole login failed');
                    console.log("getRole error", error);
                })

            })

        )
    );

    it(`should retrieve all roles`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let myService = new RolesService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    myService.getRoles().subscribe(value => {
                        expect(value.length).toBeGreaterThan(0);
                        let r:Role = _.find(value, function(o:Role) {
                            return (o.name === 'TESTROLE' &&
                                o.description === 'testdescription');
                        });
                        expect(r).toBeDefined;
                    }, error => {
                        fail('getRoles failed');
                        console.log("getRoles Error", error);
                    })

                }, error => {
                    fail('getRoles login failed');
                    console.log("getRoles error", error);
                })

            })

        )
    );

    it(`should add permissions to the test role`,
    // 1. declare as async test since the HttpClient works with Observables
    async(
        inject([HttpClient], (http: HttpClient) => {
            // 1. inject HttpClient into the test
            this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

            // 2. perform the authentication
            this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                // 3. send the request to test
                let myService = new RolesService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());

                let permissions:Array<string> = new Array<string>();
                permissions.push('com.vipera.osgi.foundation.webcontent:*:*');
                permissions.push('com.vipera.osgi.foundation.datarecords:*:*');

                myService.assignRolePermissions('TESTROLE', permissions).subscribe(value => {
                }, error => {
                    fail('assignRolePermissions failed: ' + error);
                    console.log("assignRolePermissions Error", error);
                })

            }, error => {
                fail('assignRolePermissions login failed');
                console.log("assignRolePermissions error", error);
            })

        })

    )
    );

    it(`should retrieve role permissions`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let myService = new RolesService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    myService.getRolePermissions('TESTROLE').subscribe(value => {
                        expect(value.length).toBeGreaterThan(0);
                        let p: Permission = _.find(value, function (o: Permission) {
                            return (o.component === 'com.vipera.osgi.foundation.webcontent' &&
                                o.action === '*' &&
                                o.target === '*');
                        });
                        expect(p).toBeDefined;
                    }, error => {
                        fail('getRolePermissions failed');
                        console.log("getRolePermissions Error", error);
                    })

                }, error => {
                    fail('getRolePermissions login failed');
                    console.log("getRolePermissions error", error);
                })

            })

        )
    );

    it(`should remove role permissions`,
    // 1. declare as async test since the HttpClient works with Observables
    async(
        inject([HttpClient], (http: HttpClient) => {
            // 1. inject HttpClient into the test
            this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

            // 2. perform the authentication
            this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                // 3. send the request to test
                let myService = new RolesService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());

                let permissions:Array<string> = new Array<string>();
                permissions.push('com.vipera.osgi.foundation.webcontent:*:*');
                permissions.push('com.vipera.osgi.foundation.datarecords:*:*');

                myService.removeRolePermissions('TESTROLE', permissions).subscribe(value => {
                }, error => {
                    fail('removeRolePermissions failed');
                    console.log("removeRolePermissions Error", error);
                })

            }, error => {
                fail('removeRolePermissions login failed');
                console.log("removeRolePermissions error", error);
            })

        })

    )
    );

    it(`should delete the test role`,
    // 1. declare as async test since the HttpClient works with Observables
    async(
        inject([HttpClient], (http: HttpClient) => {
            // 1. inject HttpClient into the test
            this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

            // 2. perform the authentication
            this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                // 3. send the request to test
                let myService = new RolesService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                myService.deleteRole('TESTROLE').subscribe(value => {
                }, error => {
                    fail('deleteRole failed');
                    console.log("deleteRole Error", error);
                })

            }, error => {
                fail('deleteRole login failed');
                console.log("deleteRole error", error);
            })

        })

    )
    );

});
