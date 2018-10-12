import { TestBed, async, inject } from '@angular/core/testing';
import { ActionsService } from './actions.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { AuthService, WebConsoleConfig } from 'web-console-core'
import { TEST_BASE_PATH, TEST_OAUTH2_BASE_PATH, TEST_USERNAME, TEST_PASSWORD } from '../test.variables'
import * as _ from 'lodash';
import { failTestWithError, failLogin } from './test-helper';
import { Action } from '../model/models';
import { ActionCreate } from '../model/models';
import { ActionUpdate } from '../model/models';
import { Permission } from '../model/models';
import { Oauth2Service } from '../../../../oauth2-service/src/lib/api/oauth2.service'
import { OAuthRequest } from '../../../../oauth2-service/src/lib/model/oAuthRequest';

const TEST_ACTION: string = "testaction";

describe('ActionsService', () => {
    let authService: AuthService;
    let oauth2Service: Oauth2Service;
    let service: ActionsService;

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                ActionsService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule]
        });

        const httpClient = TestBed.get(HttpClient);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null);
        oauth2Service = new Oauth2Service(httpClient, TEST_BASE_PATH, null);
        service = new ActionsService(httpClient, TEST_BASE_PATH, new Configuration());

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
                service.deleteAction(TEST_ACTION).subscribe(value => {
                }, error => {
                })
            })
    );

    it(`should create a new action`,
        async(
            () => {
                let ac: ActionCreate = {
                    name: TEST_ACTION,
                    description: 'testdescription'
                }
                service.createAction(ac).subscribe(value => {
                    expect(value.name).toBe(TEST_ACTION);
                    expect(value.description).toBe('testdescription');
                }, error => {
                    failTestWithError("should create a new action", error);
                })
            }
        )
    );

    it(`should retrieve an action`,
        async(
            () => {
                service.getAction(TEST_ACTION).subscribe(value => {
                    expect(value.name).toBe(TEST_ACTION);
                    expect(value.description).toBe('testdescription');
                }, error => {
                    failTestWithError("should retrieve an action", error);
                })
            }
        )
    );

    it(`should update an action`,
        async(
            () => {
                let au: ActionUpdate = {
                    description: "newdescription"
                }

                service.updateAction(TEST_ACTION, au).subscribe(value => {
                }, error => {
                    failTestWithError("should update an action", error);
                })
            }
        )
    );

    it(`should check updated action`,
        async(
            () => {
                service.getAction(TEST_ACTION).subscribe(value => {
                    expect(value.name).toBe(TEST_ACTION);
                    expect(value.description).toBe('newdescription');
                }, error => {
                    failTestWithError("should check updated action", error);
                })
            }
        )
    );

    it(`should assign permissions to action`,
        async(
            () => {
                let p: Permission = {
                    component: "com.vipera.osgi.core.platform",
                    action: "*",
                    target: "*"
                }

                service.assignPermissionToAction(TEST_ACTION, p).subscribe(value => {
                }, error => {
                    failTestWithError("should assign permissions to action", error);
                })
            }
        )
    );

    it(`should retrieve action permissions`,
        async(
            () => {
                service.getActionPermissions(TEST_ACTION).subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    let p: Permission = _.find(value, function (o: Permission) {
                        return (o.component === "com.vipera.osgi.core.platform" &&
                            o.action === "*" && o.target === "*");
                    });
                    expect(p).toBeDefined();
                }, error => {
                    failTestWithError("should retrieve action permissions", error);
                })

            }
        )
    );

    it(`should remove action permission`,
        async(
            () => {
                service.removePermissionFromAction(TEST_ACTION, "com.vipera.osgi.core.platform", "*", "*").subscribe(value => {
                }, error => {
                    failTestWithError("should remove action permission", error);
                })

            }
        )
    );

    it(`should retrieve all actions`,
        async(
            () => {
                service.getActions().subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    let a: Action = _.find(value, function (o: Action) {
                        return (o.name === TEST_ACTION);
                    });
                    expect(a).toBeDefined();
                }, error => {
                    failTestWithError("should retrieve all actions", error);
                })

            }
        )
    );

    it(`should delete action`,
        async(
            () => {
                service.deleteAction(TEST_ACTION).subscribe(value => {
                }, error => {
                    failTestWithError("should delete action", error);
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
