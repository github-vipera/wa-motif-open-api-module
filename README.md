# wa-motif-open-api-module
This project contains the **@wa-motif-open-api** modules and a kitchen-sink project to test the various components.

Each API module implements the client side of Motif's Rest API.

The division of the API follows that of the MOTIF services; thus, for example, the PlatformService APIs are contained in the `@wa-motif-open-api/platform-service` library and those of the SecurityService in the `@wa-motif-open-api/security-service` library, etc...

All libraries are generated through the **Angular CLI**, the **SWAGGER Codegen** tool and the API definition **Yaml files**.



## How to create a new API library

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
In this project you can find the `swagger_generator` folder with the necessary tool **swagger-codegen-cli.jar**.

To generate the new sources of the desired service you must first get the YAML file defining the REST API.
So you have to run the following command at the terminal:

```bash
java -jar ./swagger_generator/swagger-codegen-cli.jar generate -i ./path_to_file/MyNewService.yaml -l typescript-angular -o ./swagger_generator/output/sources  
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





## How to run

```console
git clone https://github.com/github-vipera/wa-motif-open-api-module.git

cd wa-motif-open-api-module

npm install

ng serve
```



