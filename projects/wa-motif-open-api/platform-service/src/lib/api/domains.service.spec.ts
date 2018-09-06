import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { DomainsService } from './domains.service'
import { MotifCommunicatoriTestHelper } from './motif-communicator-test-helper'
import { AuthService, WebConsoleConfig } from 'web-console-core'
import { TEST_BASE_PATH } from '../test.variables'

describe('DomainsService', () => {

    let service : DomainsService;
    let motifCommunicatoriTestHelper:MotifCommunicatoriTestHelper;
    
    beforeEach(() => {
        TestBed.configureTestingModule({ 
            providers: [ 
                DomainsService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide :WebConsoleConfig, useValue: new WebConsoleConfig('','') }
            ],
            imports: [ HttpClientModule ]
        });
        service = TestBed.get(DomainsService);

        console.log("this.motifCommunicatoriTestHelper beforeEach ********");

    });

    afterEach(() => {
    });

    
    it(`should issue a domain list request`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                // 1. inject HttpClient into the test
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);
                
                // 2. perform the authentication
                this.motifCommunicatoriTestHelper.login("admin","admin").subscribe(value=>{
                    
                    // 3. send the request to test
                    let myService = new DomainsService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    myService.getDomains().subscribe(value=>{
                        expect(value).toEqual([
                            {description: "Test Domain description modified", name: "TestDomain"},
                            {description: "The default domain", name: "Default"}
                        ]
                        );
                    },error=>{
                        console.log("getDomains error", error);
                    })
                    
                }, error=>{
                    console.log("Authentication error", error);
                })
                
            })  
    
        )
    );
    
  

});
