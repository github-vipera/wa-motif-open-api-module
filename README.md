# wa-motif-open-api-module
This project contains the **@wa-motif-open-api** modules and a kitchen-sink project to test the various components.

Each API module implements the client side of Motif's Rest API.

The division of the API follows that of the MOTIF services; thus, for example, the PlatformService APIs are contained in the `@wa-motif-open-api/platform-service` library and those of the SecurityService in the `@wa-motif-open-api/security-service` library, etc...

All libraries are generated through the **Angular CLI**, the **OPENAPI Codegen** tool and the API definition **Yaml files**.



## How to create a new API library project

In this section we will explain the steps to create a new API library for a given MOTIF service.

### Prerequisite

In order to create a new library you need to install the Angular CLI:

```bash
npm install -g @angular/cli
```

if you want to know more about Angular CLI you can find here: https://cli.angular.io/

We also advise you to read the following tutorial: https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5

### Create the Library Project

The first thing to do is to create a new library project. To do this, just go to the root of this project and enter the Angular CLI command in a terminal session:

```bash
ng generate library @wa-motif-open-api/my-new-service
```

where "my-new-service" is the name of the new service that you are going to create.
After this you can see a new project folder called `my-new-service` under the `/projects` folder.

Now you will have to remove all the files contained in the `src/lib` folder of your created library project.

### Generate Typescript API and Models

To generate the source code to use in the new service, we will use the SWAGGER Codegen tool. 
In this project you can find the `openapi-generator` folder with the necessary tool **openapi-generator-cli.jar**.

To generate the new sources of the desired service you must first get the YAML file defining the REST API.
So you have to run the following command at the terminal:

```bash
java -jar ./openapi-generator/openapi-generator-cli.jar generate -i ./path_to_file/MyNewService.yaml -l typescript-angular -o ./openapi-generator/output/sources  
```

The tool will generate all the sources in the folder `./swagger_generator/output/sources`.
**Note**: before launching the above command, you must ensure that the folder `./swagger_generator/output/sources` is empty or nonexistent.

A set of source files like these will be generated:

`api.module.ts`

`configuration.ts`

`encoder.ts`

`index.ts`

`variables.ts`

`api/...`

`model/...`

Now you have to copy all these files into the `src/lib` folder of the new library project you created earlier.
Now change the contents of the src / public_api.ts file of your library project in this way:

 `export * from './lib/index';`

## Modify the sources

Modify the `src/lib/api.module.ts` file of the new library project you created earlier to have a meaningful service name.

Under the `src/lib/api` folder you will find all the self-generated services.

You can check if all the changes are ok trying to run a build as follows:

```bash
ng build @wa-motif-open-api/my-new-service
```

## How To Test your API library project

Like all the other Angular standard tests, the tests of your new services will be based on [Jasmine test Framework](https://jasmine.github.io/).

Because all APIs need authentication before being invoked, you may find this helper class that can be invoked in your tests useful for logging in automatically:

```typescript
import { Injectable }                      		from '@angular/core';
import { HttpClient }                           from '@angular/common/http';
import { MotifConnectorService, AuthService } 	from 'web-console-core'
import { Observable} 							from "rxjs";


@Injectable()
export class MotifCommunicatoriTestHelper {

    public motifConnector:MotifConnectorService;
    public authService:AuthService;

    constructor(private http:HttpClient){
        this.motifConnector = new MotifConnectorService(http);
        this.authService = new AuthService(http, 'http://your_motif_test_environment:8080', null, null);
    }

    public login(userName:string, password:string):Observable<any>{
        return this.authService.login({userName:userName, password:password});
    }
    
}
```

To create the tests of your services you will need to create a typescrypt spec.ts file for each of them.

You will need to initialize the Web Console system so that you can perform some basic operations (such as authentication):

```typescript
describe('UsersService', () => {
    let motifCommunicatoriTestHelper:MotifCommunicatoriTestHelper;
    
    beforeEach(() => {
        TestBed.configureTestingModule({ 
            providers: [ 
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide :WebConsoleConfig, useValue: new WebConsoleConfig('','') }
            ],
            imports: [ HttpClientModule ]
        });
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
                    let userService = new UsersService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    userService.getUsersList('Default').subscribe(value=>{
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
                    let userService = new UsersService(this.motifCommunicatoriTestHelper.http, TEST_BASE_PATH, new Configuration());
                    userService.getUser('Default','admin').subscribe(value=>{
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

```

As you can see in the `beforeEach` call, the Web Console components needed to run this test are added.

The service that you intend to test can be instantiated directly in your test case.

For a complete reference on Angular tests we refer you to the official guide you can find here: [Angular Testing](https://angular.io/guide/testing).

## How to document your API library project 

To create the automatic documentation of your API project you can use the [Compodoc tool](https://compodoc.app).

Documentation is created using a script node that you must configure within the package.json file of your API library:

`"compodoc": "../../../node_modules/.bin/compodoc -p ./tsconfig.lib.json"`

For example:

```json
{
  "name": "@wa-motif-open-api/platform-service",
  "version": "0.0.3",
  "scripts": {
    "compodoc": "../../../node_modules/.bin/compodoc -p ./tsconfig.lib.json"
  },
  "peerDependencies": {
    "@angular/common": "^6.0.0-rc.0 || ^6.0.0",
    "@angular/core": "^6.0.0-rc.0 || ^6.0.0",
    "web-console-core": "^0.0.13"
  },
  "dependencies": {}
}
```

*library project package.json*

After you have correctly configured the script inside package.json you can go to the root of your API library project and run in the terminal:

`npm run compodoc`

At the end of the process, a folder called Documentation will be created in the same folder, containing the entire Compodoc site regarding your project



## How to run

```console
git clone https://github.com/github-vipera/wa-motif-open-api-module.git

cd wa-motif-open-api-module

npm install

ng serve
```



