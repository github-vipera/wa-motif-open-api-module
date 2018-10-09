import { TestBed, async, inject } from '@angular/core/testing';
import { RolesService } from './roles.service'
import { ActionsService } from './actions.service'
import { Role } from '../model/role'
import { RoleCreate } from '../model/roleCreate'
import { ActionAssign } from '../model/actionAssign'
import { ActionCreate } from '../model/actionCreate'
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { MotifCommunicatoriTestHelper } from './motif-communicator-test-helper'
import { AuthService, WebConsoleConfig } from 'web-console-core'
import { Permission } from '../model/permission'
import { TEST_BASE_PATH } from '../test.variables'
import * as _ from 'lodash';
import { Action } from '../model/action';
import { wrapListenerWithDirtyLogic } from '@angular/core/src/render3/instructions';
import { failedLogin, failedTestWithError } from './test-helper';

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

    it(`should prepare stuff`,
    // 1. declare as async test since the HttpClient works with Observables
    async(
        inject([HttpClient], (http: HttpClient) => {
            // 1. inject HttpClient into the test
            this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

            // 2. perform the authentication
            this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                // 3. send the request to test
                const rolesService = new RolesService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                const actionsService = new ActionsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                const deleteAction = () => {
                    actionsService.deleteAction('TESTACTION').subscribe(createAction, createAction);
                }
                const createAction = () => {
                    let ac: ActionCreate = {
                        name: 'TESTACTION',
                        description: 'TESTACTION'
                    }
                    actionsService.createAction(ac).subscribe(value => {
                        let p: Permission = {
                            component: 'com.vipera.osgi.foundation.webcontent',
                            action: '*',
                            target: '*'
                        }
                        actionsService.assignPermissionToAction('TESTACTION', p).subscribe(value => {
                            this.motifCommunicatoriTestHelper.logout();
                        }, error => {
                            this.motifCommunicatoriTestHelper.logout();
                        });
                    }, error => {
                        this.motifCommunicatoriTestHelper.logout();
                        failedTestWithError("cleanStuff", error);
                    });
                }
                rolesService.deleteRole('TESTROLE').subscribe(deleteAction, deleteAction);
            }, error => {
                failedLogin("cleanStuff", error);
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
                        this.motifCommunicatoriTestHelper.logout();
                    }, error => {
                        this.motifCommunicatoriTestHelper.logout();
                        failedTestWithError("createRole", error);
                    })

                }, error => {
                    failedLogin("createRole", error);
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
                        this.motifCommunicatoriTestHelper.logout();
                    }, error => {
                        this.motifCommunicatoriTestHelper.logout();
                        failedTestWithError("getRole", error);
                    })

                }, error => {
                    failedLogin("getRole", error);
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
                        this.motifCommunicatoriTestHelper.logout();
                    }, error => {
                        this.motifCommunicatoriTestHelper.logout();
                        failedTestWithError("getRoles", error);
                    })

                }, error => {
                    failedLogin("getRoles", error);
                })

            })

        )
    );

    it(`should add action to the test role`,
    // 1. declare as async test since the HttpClient works with Observables
    async(
        inject([HttpClient], (http: HttpClient) => {
            // 1. inject HttpClient into the test
            this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

            // 2. perform the authentication
            this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                // 3. send the request to test
                let myService = new RolesService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());

                let a:ActionAssign = {
                    name: 'TESTACTION'
                }

                myService.assignActionToRole('TESTROLE', a).subscribe(value => {
                    this.motifCommunicatoriTestHelper.logout();
                }, error => {
                    this.motifCommunicatoriTestHelper.logout();
                    failedTestWithError("assignActionToRole", error);
                })

            }, error => {
                failedLogin("assignActionToRole", error);
            })

        })

    )
    );

    it(`should retrieve role actions`,
    // 1. declare as async test since the HttpClient works with Observables
    async(
        inject([HttpClient], (http: HttpClient) => {
            // 1. inject HttpClient into the test
            this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

            // 2. perform the authentication
            this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                // 3. send the request to test
                let myService = new RolesService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                myService.getRoleActions('TESTROLE').subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    let a: Action = _.find(value, function (o: Action) {
                        return o.name === 'TESTACTION';
                    });
                    expect(a).toBeDefined;
                    this.motifCommunicatoriTestHelper.logout();
                }, error => {
                    this.motifCommunicatoriTestHelper.logout();
                    failedTestWithError("getRoleActions", error);
                })

            }, error => {
                failedLogin("getRoleActions", error);
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
                        this.motifCommunicatoriTestHelper.logout();
                    }, error => {
                        this.motifCommunicatoriTestHelper.logout();
                        failedTestWithError("getRolePermissions", error);
                    })

                }, error => {
                    failedLogin("getRolePermissions", error);
                })

            })

        )
    );

    it(`should remove role action`,
    // 1. declare as async test since the HttpClient works with Observables
    async(
        inject([HttpClient], (http: HttpClient) => {
            // 1. inject HttpClient into the test
            this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

            // 2. perform the authentication
            this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                // 3. send the request to test
                let myService = new RolesService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());

                myService.removeActionFromRole('TESTROLE', 'TESTACTION').subscribe(value => {
                    this.motifCommunicatoriTestHelper.logout();
                }, error => {
                    this.motifCommunicatoriTestHelper.logout();
                    failedTestWithError("removeActionFromRole", error);
                })

            }, error => {
                failedLogin("removeActionFromRole", error);
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
                    this.motifCommunicatoriTestHelper.logout();
                }, error => {
                    this.motifCommunicatoriTestHelper.logout();
                    failedTestWithError("deleteRole", error);
                })

            }, error => {
                failedLogin("deleteRole", error);
            })

        })

    )
    );

    it(`should clean stuff`,
    // 1. declare as async test since the HttpClient works with Observables
    async(
        inject([HttpClient], (http: HttpClient) => {
            // 1. inject HttpClient into the test
            this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

            // 2. perform the authentication
            this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                // 3. send the request to test
                const rolesService = new RolesService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                const actionsService = new ActionsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                const deleteAction = () => {
                    actionsService.deleteAction('TESTACTION').subscribe(value => {}, error => {});
                }
                rolesService.deleteRole('TESTROLE').subscribe(deleteAction, deleteAction);

            }, error => {
                failedLogin("cleanStuff", error);
            })

        })

    )
    );
});
