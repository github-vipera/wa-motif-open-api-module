/**
 * Motif Auth Access Control Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@vipera.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Action } from '../model/action';
import { ActionAssign } from '../model/actionAssign';
import { EntitlementResult } from '../model/entitlementResult';
import { ErrorVipera } from '../model/errorVipera';
import { Group } from '../model/group';
import { Permission } from '../model/permission';
import { Role } from '../model/role';
import { RoleCreate } from '../model/roleCreate';
import { RoleUpdate } from '../model/roleUpdate';
import { User } from '../model/user';

import { WC_API_BASE_PATH } from 'web-console-core';
import { Configuration }                                     from '../configuration';
import { RolesServiceInterface }                            from './roles.serviceInterface';


@Injectable({
  providedIn: 'root'
})
export class RolesService implements RolesServiceInterface {

    protected basePath = 'http://localhost:8080/rest/v2';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(WC_API_BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;

        } else {
            this.configuration.basePath = basePath || this.basePath;
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
     * Assigns an action to the role
     * Assigns an action to the role
     * @param role Role Name
     * @param actionAssign 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public assignActionToRole(role: string, actionAssign?: ActionAssign, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public assignActionToRole(role: string, actionAssign?: ActionAssign, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public assignActionToRole(role: string, actionAssign?: ActionAssign, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public assignActionToRole(role: string, actionAssign?: ActionAssign, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (role === null || role === undefined) {
            throw new Error('Required parameter role was null or undefined when calling assignActionToRole.');
        }

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/acs/roles/${encodeURIComponent(String(role))}/actions`,
            actionAssign,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Creates a role
     * Creates a role
     * @param roleCreate 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createRole(roleCreate?: RoleCreate, observe?: 'body', reportProgress?: boolean): Observable<Role>;
    public createRole(roleCreate?: RoleCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Role>>;
    public createRole(roleCreate?: RoleCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Role>>;
    public createRole(roleCreate?: RoleCreate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Role>(`${this.configuration.basePath}/acs/roles`,
            roleCreate,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a role
     * Deletes a role
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
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.configuration.basePath}/acs/roles/${encodeURIComponent(String(role))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves a role
     * Retrieves a role
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
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Role>(`${this.configuration.basePath}/acs/roles/${encodeURIComponent(String(role))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves the actions with the role
     * Retrieves the actions with the role
     * @param role Role Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRoleActions(role: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Action>>;
    public getRoleActions(role: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Action>>>;
    public getRoleActions(role: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Action>>>;
    public getRoleActions(role: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (role === null || role === undefined) {
            throw new Error('Required parameter role was null or undefined when calling getRoleActions.');
        }

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Action>>(`${this.configuration.basePath}/acs/roles/${encodeURIComponent(String(role))}/actions`,
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
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Group>>(`${this.configuration.basePath}/acs/roles/${encodeURIComponent(String(role))}/groups`,
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
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Permission>>(`${this.configuration.basePath}/acs/roles/${encodeURIComponent(String(role))}/permissions`,
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
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<User>>(`${this.configuration.basePath}/acs/roles/${encodeURIComponent(String(role))}/users`,
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
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Role>>(`${this.configuration.basePath}/acs/roles`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Check if role is entitled to execute the action
     * Check if role is entitled to execute the action
     * @param role Role Name
     * @param action Action Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public isRoleActionEntitled(role: string, action: string, observe?: 'body', reportProgress?: boolean): Observable<EntitlementResult>;
    public isRoleActionEntitled(role: string, action: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntitlementResult>>;
    public isRoleActionEntitled(role: string, action: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntitlementResult>>;
    public isRoleActionEntitled(role: string, action: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (role === null || role === undefined) {
            throw new Error('Required parameter role was null or undefined when calling isRoleActionEntitled.');
        }
        if (action === null || action === undefined) {
            throw new Error('Required parameter action was null or undefined when calling isRoleActionEntitled.');
        }

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<EntitlementResult>(`${this.configuration.basePath}/acs/roles/${encodeURIComponent(String(role))}/actions/${encodeURIComponent(String(action))}/entitled`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Check if permission is assigned to the role
     * Check if permission is assigned to the role
     * @param role Role Name
     * @param permissionComponent Component Name
     * @param permissionAction Action (can be VIEW, EXECUTE, MODIFY or *)
     * @param permissionTarget Method name or *(wildcard)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public isRolePermissionEntitled(role: string, permissionComponent: string, permissionAction: string, permissionTarget: string, observe?: 'body', reportProgress?: boolean): Observable<EntitlementResult>;
    public isRolePermissionEntitled(role: string, permissionComponent: string, permissionAction: string, permissionTarget: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntitlementResult>>;
    public isRolePermissionEntitled(role: string, permissionComponent: string, permissionAction: string, permissionTarget: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntitlementResult>>;
    public isRolePermissionEntitled(role: string, permissionComponent: string, permissionAction: string, permissionTarget: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (role === null || role === undefined) {
            throw new Error('Required parameter role was null or undefined when calling isRolePermissionEntitled.');
        }
        if (permissionComponent === null || permissionComponent === undefined) {
            throw new Error('Required parameter permissionComponent was null or undefined when calling isRolePermissionEntitled.');
        }
        if (permissionAction === null || permissionAction === undefined) {
            throw new Error('Required parameter permissionAction was null or undefined when calling isRolePermissionEntitled.');
        }
        if (permissionTarget === null || permissionTarget === undefined) {
            throw new Error('Required parameter permissionTarget was null or undefined when calling isRolePermissionEntitled.');
        }

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<EntitlementResult>(`${this.configuration.basePath}/acs/roles/${encodeURIComponent(String(role))}/permissions/${encodeURIComponent(String(permissionComponent))}/${encodeURIComponent(String(permissionAction))}/${encodeURIComponent(String(permissionTarget))}/entitled`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Removes an action from the role
     * Removes an action from the role
     * @param role Role Name
     * @param action Action Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removeActionFromRole(role: string, action: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removeActionFromRole(role: string, action: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removeActionFromRole(role: string, action: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public removeActionFromRole(role: string, action: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (role === null || role === undefined) {
            throw new Error('Required parameter role was null or undefined when calling removeActionFromRole.');
        }
        if (action === null || action === undefined) {
            throw new Error('Required parameter action was null or undefined when calling removeActionFromRole.');
        }

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.configuration.basePath}/acs/roles/${encodeURIComponent(String(role))}/actions/${encodeURIComponent(String(action))}`,
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
     * @param roleUpdate 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateRole(role: string, roleUpdate?: RoleUpdate, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateRole(role: string, roleUpdate?: RoleUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateRole(role: string, roleUpdate?: RoleUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateRole(role: string, roleUpdate?: RoleUpdate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (role === null || role === undefined) {
            throw new Error('Required parameter role was null or undefined when calling updateRole.');
        }

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.configuration.basePath}/acs/roles/${encodeURIComponent(String(role))}`,
            roleUpdate,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
