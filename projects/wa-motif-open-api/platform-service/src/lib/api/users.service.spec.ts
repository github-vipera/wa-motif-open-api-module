import { TestBed, async, inject } from '@angular/core/testing';
import { UsersService } from './users.service'
import { UsersCount } from '../model/usersCount'
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Configuration } from '../configuration'
import { DomainsService } from './domains.service'
import { MotifCommunicatoriTestHelper } from './motif-communicator-testhelper'
import { AuthService, WebConsoleConfig } from 'web-console-core'

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

    
    it(`should issue a domain list request`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            inject([HttpClient], (http: HttpClient) => {
                this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);
                console.log("*************************** motifCommunicatoriTestHelper injected ", http);

                // 2. inject HttpClient and HttpTestingController into the test
                console.log("*************************** motifCommunicatoriTestHelper created ",this.motifCommunicatoriTestHelper);

                
                this.motifCommunicatoriTestHelper.login("admin","admin").subscribe(value=>{
                    
                    console.log("*************************** motifCommunicatoriTestHelper login done");
                    
                    // 3. send a simple request
                    let myService = new DomainsService(this.motifCommunicatoriTestHelper.http, 'http://ec2-34-209-90-152.us-west-2.compute.amazonaws.com:8080/rest/v2', new Configuration());
                    myService.getDomains().subscribe(value=>{
                        console.log("*************************** motifCommunicatoriTestHelper getDomains", value);
                        expect(value).toEqual([
                            {description: "Test Domain description modified", name: "TestDomain"},
                            {description: "The default domain", name: "Default"}
                        ]
                        );
                    },error=>{
                        console.log("*************************** motifCommunicatoriTestHelper getDomains error", error);
                    })
                    
                }, error=>{
                    console.log("*************************** motifCommunicatoriTestHelper login error", error);
                })
                
            })  
    
        )
    );
    
    it(`should issue a users list request`,
    // 1. declare as async test since the HttpClient works with Observables
    async(
        inject([HttpClient], (http: HttpClient) => {
            this.motifCommunicatoriTestHelper = new MotifCommunicatoriTestHelper(http);
            console.log("*************************** motifCommunicatoriTestHelper injected ", http);

            // 2. inject HttpClient and HttpTestingController into the test
            console.log("*************************** motifCommunicatoriTestHelper created ",this.motifCommunicatoriTestHelper);

            
            this.motifCommunicatoriTestHelper.login("admin","admin").subscribe(value=>{
                
                console.log("*************************** motifCommunicatoriTestHelper login done");
                
                // 3. send a simple request
                let myService = new UsersService(this.motifCommunicatoriTestHelper.http, 'http://ec2-34-209-90-152.us-west-2.compute.amazonaws.com:8080/rest/v2', new Configuration());
                myService.getUsersList('Default').subscribe(value=>{
                    console.log("*************************** motifCommunicatoriTestHelper getUsersList", value);
                    /*
                    expect(value).toEqual([
                        {description: "Test Domain description modified", name: "TestDomain"},
                        {description: "The default domain", name: "Default"}
                    ]
                    );*/
                },error=>{
                    console.log("*************************** motifCommunicatoriTestHelper getUsersList error", error);
                })
                
            }, error=>{
                console.log("*************************** motifCommunicatoriTestHelper login error", error);
            })
            
        })  

    )
);

    /*
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UsersService
      ],
    }).compileComponents();
  }));
  */



  /**
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to web-console-template!');
  }));
   */
});
