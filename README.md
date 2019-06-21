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

To generate the source code to use in the new service, we will use the OpenAPI Codegen tool. 
In this project you can find the `openapi-generator` folder with the necessary tool **openapi-generator-cli.jar**.

To generate the new sources of the desired service you must first get the YAML file defining the REST API.
So you have to run the following command at the terminal:

```bash
java -jar ./openapi-generator/openapi-generator-cli.jar generate -i ./path_to_file/MyNewService.yaml -l typescript-angular -o ./openapi-generator/output/sources  
```

The tool will generate all the sources in the folder `./openapi-generator/output/sources`.

A set of source files like these will be generated:

`api.module.ts`

`configuration.ts`

`encoder.ts`

`index.ts`

`variables.ts`

`api/...`

`model/...`

Now you have to copy all these files into the `src/lib` folder of the new library project you created earlier.

## Modify the sources

If you want to test your services you have to add this property to `karma.conf.js`:
```javascript
    proxyRes: function(proxyRes, req, res, options) {
      proxyRes.headers['Access-Control-Expose-Headers'] = '*';
    },
```

If you want to debug your services from `Visual Studio` you also have to add these properties:
```javascript
    customLaunchers: {
      Chrome_with_debugging: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9222'],
        debug: true
      }
    },
    browsers: ['Chrome_with_debugging'],
```
Remember to remove the old `browsers` property.

You can check if all the changes are ok trying to run a build as follows:

```bash
ng build @wa-motif-open-api/my-new-service
```

### Production Configuration

To be able to produce a production artifact you need to ensure that 2 files exist in your project root:
- `ng-package.json`, which should look like this:
```json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../../dist/wa-motif-open-api/session-service",
  "deleteDestPath": false,
  "lib": {
    "entryFile": "src/public_api.ts",
    "umdModuleIds": {
      "web-console-core": "WebConsoleCore"  
    }
  }
}
```
- `ng-package.prod.json`, which should look like this:
```json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../../dist/wa-motif-open-api/session-service",
  "lib": {
    "entryFile": "src/public_api.ts",
    "umdModuleIds": {
      "web-console-core": "WebConsoleCore"  
    }
  }
}
```

Moreover you need to open the `angular.json` file in `wa-motif-open-api-module` project root, find your newly created service and add this snippet to the `build` section:
```json
"configurations": {
  "production": {
    "project": "projects/wa-motif-open-api/session-service/ng-package.prod.json"
  }
}
```

## How To Test your API library project

Like all the other Angular standard tests, the tests of your new services will be based on [Jasmine test Framework](https://jasmine.github.io/).

To create the tests of your services you will need to create a typescrypt spec.ts file for each of them.

```typescript
describe('DomainsService', () => {
    let authService: AuthService;
    let oauth2Service: Oauth2Service;
    let service: DomainsService;

    beforeAll(() => {
        TestBed.configureTestingModule({
            providers: [
                NGXLogger,
                DomainsService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
                { provide: WebConsoleConfig, useValue: new WebConsoleConfig('', '') }
            ],
            imports: [HttpClientModule, LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG})]
        });

        const httpClient = TestBed.get(HttpClient);
        const logger: NGXLogger = TestBed.get(NGXLogger);
        authService = new AuthService(httpClient, TEST_OAUTH2_BASE_PATH, null, null, new EventBusService(logger), logger);
        oauth2Service = new Oauth2Service(httpClient, TEST_BASE_PATH, null);
        service = new DomainsService(httpClient, TEST_BASE_PATH, new Configuration());

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

    it(`should create a new domain`,
        async(
            () => {
                let dc: DomainCreate = {
                    name: TEST_DOMAIN,
                    description: "testdescription"
                }
                service.createDomain(dc).subscribe(value => {
                    expect(value.name).toBe(TEST_DOMAIN);
                    expect(value.description).toBe('testdescription');
                }, error => {
                    failTestWithError("should create a new domain", error);
                })
            }
        )
    );

    it(`should retrieve a domain`,
        async(
            () => {
                service.getDomain(TEST_DOMAIN).subscribe(value => {
                    expect(value.name).toBe(TEST_DOMAIN);
                    expect(value.description).toBe('testdescription');
                }, error => {
                    failTestWithError("should retrieve a domain", error);
                })
            }
        )
    );

    it(`should clean stuff`,
        async(
            () => {
                authService.logout().subscribe(value => {
                }, error => {
                    failTestWithError("should clean stuff", error);
                })
            }
        )
    );

});

```

As you can see in the `beforeAll` call, the Web Console components needed to run this test are added and authentication is performed.

The service that you intend to test is also instantiated there.

The `should clean stuff` test case is used to clean the authentication tokens used in the tests.

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



