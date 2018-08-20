import { TestBed, async, inject } from '@angular/core/testing';
import { UsersService } from './users.service'
import { UsersCount } from '../model/usersCount'
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { DomainsService } from './domains.service'
import { MotifCommunicatoriTestHelper } from './motif-communicator-test-helper'
import { AuthService, WebConsoleConfig } from 'web-console-core'
import { TEST_BASE_PATH } from '../test.variables'

describe('UsersService', () => {

    let service : UsersService;
    let motifCommunicatoriTestHelper:MotifCommunicatoriTestHelper;
    
    beforeEach(() => {
        TestBed.configureTestingModule({ 
            providers: [ 
                UsersService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide :WebConsoleConfig, useValue: new WebConsoleConfig('','') }
            ],
            imports: [ HttpClientModule ]
        });
        service = TestBed.get(UsersService);

        console.log("this.motifCommunicatoriTestHelper beforeEach ********");

    });

    afterEach(() => {
    });

    
    it(`should issue a users list request`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin","admin").subscribe(value=>{
                    
                    // 3. send the request to test
                    let myService = new UsersService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    myService.getUsersList('Default').subscribe(value=>{
                        //let usersListStr = '[{"domain":"Default","userId":"paul","userIdInt":"123458","msisdn":"12345680","serial":"12345680","locale":null,"state":"ACTIVE","prevState":null,"email":null,"created":1533807118338,"lastLogin":null},{"domain":"Default","userId":"pauline","userIdInt":"123461","msisdn":"12345683","serial":"12345683","locale":null,"state":"ACTIVE","prevState":null,"email":null,"created":1533807118692,"lastLogin":null},{"domain":"Default","userId":"joe","userIdInt":"123456","msisdn":"12345678","serial":"12345678","locale":null,"state":"ACTIVE","prevState":null,"email":null,"created":1533806276310,"lastLogin":null},{"domain":"Default","userId":"lisa","userIdInt":"123464","msisdn":"12345686","serial":"12345686","locale":null,"state":"ACTIVE","prevState":null,"email":null,"created":1533807118845,"lastLogin":null},{"domain":"Default","userId":"marc","userIdInt":"1234","msisdn":"1234","serial":"1234","locale":null,"state":"PREACTIVE","prevState":null,"email":null,"created":1533905110656,"lastLogin":null},{"domain":"Default","userId":"bob","userIdInt":"12345","msisdn":"12345","serial":"12345","locale":null,"state":"PREACTIVE","prevState":null,"email":null,"created":1533905326697,"lastLogin":null},{"domain":"Default","userId":"danny","userIdInt":"12345","msisdn":"123456","serial":"1234567","locale":null,"state":"PREACTIVE","prevState":null,"email":null,"created":1533905531802,"lastLogin":null},{"domain":"Default","userId":"NO_USER","userIdInt":null,"msisdn":null,"serial":null,"locale":null,"state":null,"prevState":null,"email":null,"created":946684800000,"lastLogin":null},{"domain":"Default","userId":"ANONYMOUS","userIdInt":null,"msisdn":null,"serial":null,"locale":null,"state":null,"prevState":null,"email":null,"created":946684800000,"lastLogin":null},{"domain":"Default","userId":"admin","userIdInt":null,"msisdn":null,"serial":null,"locale":null,"state":"ACTIVE","prevState":null,"email":null,"created":946684800000,"lastLogin":null},{"domain":"Default","userId":"john","userIdInt":"123457","msisdn":"12345679","serial":"12345679","locale":null,"state":"ACTIVE","prevState":null,"email":null,"created":1533807118336,"lastLogin":null},{"domain":"Default","userId":"carl","userIdInt":"123459","msisdn":"12345681","serial":"12345681","locale":null,"state":"ACTIVE","prevState":null,"email":null,"created":1533807118348,"lastLogin":null},{"domain":"Default","userId":"margot","userIdInt":"123462","msisdn":"12345684","serial":"12345684","locale":null,"state":"ACTIVE","prevState":null,"email":null,"created":1533807118761,"lastLogin":null},{"domain":"Default","userId":"sandra","userIdInt":"123463","msisdn":"12345685","serial":"12345685","locale":null,"state":"ACTIVE","prevState":null,"email":null,"created":1533807118845,"lastLogin":null},{"domain":"Default","userId":"susy","userIdInt":"123460","msisdn":"12345682","serial":"12345682","locale":null,"state":"ACTIVE","prevState":null,"email":null,"created":1533807118352,"lastLogin":null},{"domain":"Default","userId":"samantha","userIdInt":"123456","msisdn":"123","serial":"123","locale":null,"state":"PREACTIVE","prevState":null,"email":null,"created":1533906706406,"lastLogin":null}]'
                        //let usersList = JSON.parse(usersListStr);
                        expect(value.length).toBe(16);
                    },error=>{
                        console.log("getUsersList Error", error);
                    })
                    
                }, error=>{
                    console.log("Authentication error", error);
                })
                
            })  

        )
    );

    it(`should issue a user info`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);

                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin","admin").subscribe(value=>{
                    
                    // 3. send the request to test
                    let myService = new UsersService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    myService.getUser('Default','admin').subscribe(value=>{
                        expect(value.userId).toEqual('admin')
                    },error=>{
                        console.log("getUsersList Error", error);
                    })
                }, error=>{
                    console.log("Authentication error", error);
                })
                
            })  
        )
    );

});
