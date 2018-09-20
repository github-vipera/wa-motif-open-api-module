/**
 * Motif Auth Access Control Service API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@vipera.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Group } from '../model/group';
import { Permission } from '../model/permission';
import { Role } from '../model/role';
import { RoleCreate } from '../model/roleCreate';
import { RoleUpdate } from '../model/roleUpdate';
import { User } from '../model/user';

import { WC_API_BASE_PATH } from 'web-console-core'
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class RolesService {

    protected basePath = 'http://localhost:8080/rest/v2';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(WC_API_BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Assigns the permissions to the role
     * Assigns the permissions to the role
     * @param role Role Name
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public assignRolePermissions(role: string, body?: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public assignRolePermissions(role: string, body?: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public assignRolePermissions(role: string, body?: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public assignRolePermissions(role: string, body?: Array<string>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (role === null || role === undefined) {
            throw new Error('Required parameter role was null or undefined when calling assignRolePermissions.');
        }

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post(`${this.basePath}/acs/role/${encodeURIComponent(String(role))}/permissions/assign`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Creates a Role
     * Creates a Role
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createRole(body?: RoleCreate, observe?: 'body', reportProgress?: boolean): Observable<Role>;
    public createRole(body?: RoleCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Role>>;
    public createRole(body?: RoleCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Role>>;
    public createRole(body?: RoleCreate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post(`${this.basePath}/acs/roles`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a Role
     * Deletes a Role
     * @param role Role Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteRole(role: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteRole(role: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteRole(role: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteRole(role: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (role === null || role === undefined) {
            throw new Error('Required parameter role was null or undefined when calling deleteRole.');
        }

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete(`${this.basePath}/acs/roles/${encodeURIComponent(String(role))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves a Role
     * Retrieves a Role
     * @param role Role Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRole(role: string, observe?: 'body', reportProgress?: boolean): Observable<Role>;
    public getRole(role: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Role>>;
    public getRole(role: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Role>>;
    public getRole(role: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (role === null || role === undefined) {
            throw new Error('Required parameter role was null or undefined when calling getRole.');
        }

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/acs/roles/${encodeURIComponent(String(role))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves the groups with the role
     * Retrieves the groups with the role
     * @param role Role Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRoleGroups(role: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Group>>;
    public getRoleGroups(role: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Group>>>;
    public getRoleGroups(role: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Group>>>;
    public getRoleGroups(role: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (role === null || role === undefined) {
            throw new Error('Required parameter role was null or undefined when calling getRoleGroups.');
        }

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/acs/roles/${encodeURIComponent(String(role))}/groups`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves the permissions with the role
     * Retrieves the permissions with the role
     * @param role Role Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRolePermissions(role: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Permission>>;
    public getRolePermissions(role: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Permission>>>;
    public getRolePermissions(role: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Permission>>>;
    public getRolePermissions(role: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (role === null || role === undefined) {
            throw new Error('Required parameter role was null or undefined when calling getRolePermissions.');
        }

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/acs/roles/${encodeURIComponent(String(role))}/permissions`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves the users with the role
     * Retrieves the users with the role
     * @param role Role Name
     * @param userId UserId
     * @param userIdInt Internal UserId
     * @param page Page (omit to retrieve all records at once)
     * @param pageSize Page size
     * @param sort Sorting fields
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRoleUsers(role: string, userId?: string, userIdInt?: string, page?: number, pageSize?: number, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<User>>;
    public getRoleUsers(role: string, userId?: string, userIdInt?: string, page?: number, pageSize?: number, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<User>>>;
    public getRoleUsers(role: string, userId?: string, userIdInt?: string, page?: number, pageSize?: number, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<User>>>;
    public getRoleUsers(role: string, userId?: string, userIdInt?: string, page?: number, pageSize?: number, sort?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (role === null || role === undefined) {
            throw new Error('Required parameter role was null or undefined when calling getRoleUsers.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (userId !== undefined && userId !== null) {
            queryParameters = queryParameters.set('userId', <any>userId);
        }
        if (userIdInt !== undefined && userIdInt !== null) {
            queryParameters = queryParameters.set('userIdInt', <any>userIdInt);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('page_size', <any>pageSize);
        }
        if (sort !== undefined && sort !== null) {
            queryParameters = queryParameters.set('sort', <any>sort);
        }

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/acs/roles/${encodeURIComponent(String(role))}/users`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves all roles
     * Retrieves all roles
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRoles(observe?: 'body', reportProgress?: boolean): Observable<Array<Role>>;
    public getRoles(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Role>>>;
    public getRoles(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Role>>>;
    public getRoles(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/acs/roles`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Removes the permissions from the role
     * Removes the permissions from the role
     * @param role Role Name
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removeRolePermissions(role: string, body?: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removeRolePermissions(role: string, body?: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removeRolePermissions(role: string, body?: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public removeRolePermissions(role: string, body?: Array<string>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (role === null || role === undefined) {
            throw new Error('Required parameter role was null or undefined when calling removeRolePermissions.');
        }

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post(`${this.basePath}/acs/role/${encodeURIComponent(String(role))}/permissions/remove`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a role description
     * Updates a role description
     * @param role Role Name
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateRole(role: string, body?: RoleUpdate, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateRole(role: string, body?: RoleUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateRole(role: string, body?: RoleUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateRole(role: string, body?: RoleUpdate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (role === null || role === undefined) {
            throw new Error('Required parameter role was null or undefined when calling updateRole.');
        }

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put(`${this.basePath}/acs/roles/${encodeURIComponent(String(role))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }
}