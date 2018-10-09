import { TestBed, async, inject } from '@angular/core/testing';
import { GroupsService } from './groups.service';
import { Group } from '../model/group';
import { GroupCreate } from '../model/groupCreate';
import { GroupUpdate } from '../model/groupUpdate';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { MotifCommunicatoriTestHelper } from './motif-communicator-test-helper'
import { AuthService, WebConsoleConfig } from 'web-console-core'
import { TEST_BASE_PATH } from '../test.variables'
import * as _ from 'lodash';
import { Role } from '../model/role';
import { RoleAssign } from '../model/roleAssign';
import { failedLogin, failedTestWithError } from './test-helper';

describe('GroupsService', () => {

    let service: GroupsService;
    let motifCommunicatoriTestHelper: MotifCommunicatoriTestHelper;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                GroupsService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule]
        });
        service = TestBed.get(GroupsService);

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

                let service = new GroupsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                service.deleteGroup('Default', 'testgroup').subscribe(value => {
                }, error => {
                })

            }, error => {
                failedLogin("cleanStuff", error);
            })

        })

    )
    );

    it(`should create a new group`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let service = new GroupsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    // 3. send the request to test
                    let gc: GroupCreate = {
                        name: 'testgroup',
                        description: 'testdescription'
                    }
                    service.createGroup('Default', gc).subscribe(value => {
                        expect(value.name).toBe('testgroup');
                        expect(value.description).toBe('testdescription');
                    }, error => {
                        fail('createGroup failed');
                        console.log("createGroup Error", error);
                    })
                }, error => {
                    fail('createGroup login failed');
                    console.log("createGroup Error", error);
                })

            })
        )
    );

    it(`should retrieve test group`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let service = new GroupsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    // 3. send the request to test
                    service.getGroup('Default', 'testgroup').subscribe(value => {
                        expect(value.name).toBe('testgroup');
                        expect(value.description).toBe('testdescription');
                    }, error => {
                        fail('getGroup failed');
                        console.log("getGroup Error", error);
                    })
                }, error => {
                    fail('getGroup login failed');
                    console.log("getGroup Error", error);
                })

            })
        )
    );

    it(`should assign roles to the test group`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let service = new GroupsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());

                    let r:RoleAssign = {
                        name: 'SU'
                    }

                    service.assignRoleToGroup('Default', 'testgroup', r).subscribe(value => {
                    }, error => {
                        fail('assignGroupRoles failed');
                        console.log("assignGroupRoles Error", error);
                    })
                }, error => {
                    fail('assignGroupRoles login failed');
                    console.log("assignGroupRoles Error", error);
                })
            })
        )
    );

    it(`should retrieve group roles`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let service = new GroupsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    // 3. send the request to test
                    service.getGroupRoles('Default', 'testgroup').subscribe(value => {
                        expect(value.length).toBeGreaterThan(0);
                        let r: Role = _.find(value, function (o: Role) {
                            return (o.name === 'SU');
                        });
                        expect(r).toBeDefined;
                    }, error => {
                        fail('getGroupRoles failed');
                        console.log("getGroupRoles Error", error);
                    })
                }, error => {
                    fail('getGroupRoles login failed');
                    console.log("getGroupRoles Error", error);
                })

            })
        )
    );

    it(`should remove roles from the test group`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let service = new GroupsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    service.removeRoleFromGroup('Default', 'testgroup', 'SU').subscribe(value => {
                    }, error => {
                        fail('removeGroupRoles failed');
                        console.log("removeGroupRoles Error", error);
                    })
                }, error => {
                    fail('removeGroupRoles login failed');
                    console.log("removeGroupRoles Error", error);
                })
            })
        )
    );

    it(`should check roles removed from group`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let service = new GroupsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    // 3. send the request to test
                    service.getGroupRoles('Default', 'testgroup').subscribe(value => {
                        let r: Role = _.find(value, function (o: Role) {
                            return (o.name === 'SU');
                        });
                        expect(r).toBeUndefined;
                    }, error => {
                        fail('getGroupRoles failed');
                        console.log("getGroupRoles Error", error);
                    })
                }, error => {
                    fail('getGroupRoles login failed');
                    console.log("getGroupRoles Error", error);
                })

            })
        )
    );

    it(`should retrieve domain groups`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let service = new GroupsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    // 3. send the request to test
                    service.getDomainGroups('Default').subscribe(value => {
                        expect(value.length).toBeGreaterThan(0);
                        let g: Group = _.find(value, function (o: Group) {
                            return (o.name === 'testgroup' &&
                                o.description === 'testdescription');
                        });
                        expect(g).toBeDefined;
                    }, error => {
                        fail('getGroup failed');
                        console.log("getGroup Error", error);
                    })
                }, error => {
                    fail('getGroup failed');
                    console.log("getGroup Error", error);
                })

            })
        )
    );

    it(`should retrieve all groups`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let service = new GroupsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    // 3. send the request to test
                    service.getGroups().subscribe(value => {
                        expect(value.length).toBeGreaterThan(0);
                        let g: Group = _.find(value, function (o: Group) {
                            return (o.name === 'testgroup' &&
                                o.description === 'testdescription');
                        });
                        expect(g).toBeDefined;
                    }, error => {
                        fail('getGroups failed');
                        console.log("getGroups Error", error);
                    })
                }, error => {
                    fail('getGroups login failed');
                    console.log("getGroups Error", error);
                })

            })
        )
    );

    it(`should retrieve group users`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let service = new GroupsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    // 3. send the request to test
                    service.getGroupUsers('Default', 'testgroup').subscribe(value => {
                    }, error => {
                        fail('getGroups failed');
                        console.log("getGroups Error", error);
                    })
                }, error => {
                    fail('getGroups login failed');
                    console.log("getGroups Error", error);
                })

            })
        )
    );

    it(`should update group`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let service = new GroupsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());

                    let gu: GroupUpdate = {
                        description: 'newdescription'
                    }

                    // 3. send the request to test
                    service.updateGroup('Default', 'testgroup', gu).subscribe(value => {
                    }, error => {
                        fail('updateGroup failed');
                        console.log("updateGroup Error", error);
                    })
                }, error => {
                    fail('updateGroup login failed');
                    console.log("updateGroup Error", error);
                })

            })
        )
    );

    it(`should check updated group`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin", "admin").subscribe(value => {

                    // 3. send the request to test
                    let service = new GroupsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    // 3. send the request to test
                    service.getGroup('Default', 'testgroup').subscribe(value => {
                        expect(value.name).toBe('testgroup');
                        expect(value.description).toBe('newdescription');
                    }, error => {
                        fail('getGroup failed');
                        console.log("getGroup Error", error);
                    })
                }, error => {
                    fail('getGroup login failed');
                    console.log("getGroup Error", error);
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
                let service = new GroupsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                service.deleteGroup('Default', 'testgroup').subscribe(value => {
                }, error => {
                    console.log("deleteGroup Error", error);
                })

            }, error => {
                failedLogin("cleanStuff", error);
            })

        })

    )
    );

});
