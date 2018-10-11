import { TestBed, async, inject } from '@angular/core/testing';
import { ActionsService } from './actions.service';
import { MyselfService } from './myself.service';
import { RolesService } from './roles.service';
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
import { ActionAssign } from '../model/actionAssign';

describe('MyselfService', () => {
    let authService: AuthService;
    let service: MyselfService;
    let actionsService: ActionsService;
    let rolesService: RolesService;

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
        service = new MyselfService(httpClient, TEST_BASE_PATH, new Configuration());
        actionsService = new ActionsService(httpClient, TEST_BASE_PATH, new Configuration());
        rolesService = new RolesService(httpClient, TEST_BASE_PATH, new Configuration());

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

    it(`should retrieve current user actions`,
        async(
            () => {
                service.getMyselfActions().subscribe(value => {
                    expect(value.length).toBeGreaterThan(0);
                    let a: Action = _.find(value, function (o: Action) {
                        return o.name === "SU_ACTIONS";
                    });
                    expect(a).toBeDefined();
                }, error => {
                    failTestWithError("should retrieve current user actions", error);
                })
            }
        )
    );

    it(`should retrieve current user permissions`,
    async(
        () => {
            service.getMyselfPermissions().subscribe(value => {
                expect(value.length).toBeGreaterThan(0);
                let p: Permission = _.find(value, function (o: Permission) {
                    return o.component === "com.vipera.osgi.core.platform" &&
                        o.action === "*" && o.target === "*";
                });
                expect(p).toBeDefined();
            }, error => {
                failTestWithError("should retrieve current user permissions", error);
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
