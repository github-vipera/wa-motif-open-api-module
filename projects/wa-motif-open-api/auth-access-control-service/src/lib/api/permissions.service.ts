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

import { Permission } from '../model/permission';

import { WC_API_BASE_PATH } from 'web-console-core'
import { Configuration }                                     from '../configuration';


@Injectable()
export class PermissionsService {

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
     * Creates a Permission
     * Creates a Permission
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createPermission(body?: Permission, observe?: 'body', reportProgress?: boolean): Observable<Permission>;
    public createPermission(body?: Permission, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Permission>>;
    public createPermission(body?: Permission, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Permission>>;
    public createPermission(body?: Permission, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post(`${this.basePath}/acs/permissions`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a Permission
     * Deletes a Permission
     * @param permissionComponent Component Name
     * @param permissionAction Action (can be VIEW, EXECUTE, MODIFY or *)
     * @param permissionTarget Method name or *(wildcard)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deletePermission(permissionComponent: string, permissionAction: string, permissionTarget: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deletePermission(permissionComponent: string, permissionAction: string, permissionTarget: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deletePermission(permissionComponent: string, permissionAction: string, permissionTarget: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deletePermission(permissionComponent: string, permissionAction: string, permissionTarget: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (permissionComponent === null || permissionComponent === undefined) {
            throw new Error('Required parameter permissionComponent was null or undefined when calling deletePermission.');
        }
        if (permissionAction === null || permissionAction === undefined) {
            throw new Error('Required parameter permissionAction was null or undefined when calling deletePermission.');
        }
        if (permissionTarget === null || permissionTarget === undefined) {
            throw new Error('Required parameter permissionTarget was null or undefined when calling deletePermission.');
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

        return this.httpClient.delete(`${this.basePath}/acs/permissions/${encodeURIComponent(String(permissionComponent))}/${encodeURIComponent(String(permissionAction))}/${encodeURIComponent(String(permissionTarget))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves a Permission
     * Retrieves a Permission
     * @param permissionComponent Component Name
     * @param permissionAction Action (can be VIEW, EXECUTE, MODIFY or *)
     * @param permissionTarget Method name or *(wildcard)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPermission(permissionComponent: string, permissionAction: string, permissionTarget: string, observe?: 'body', reportProgress?: boolean): Observable<Permission>;
    public getPermission(permissionComponent: string, permissionAction: string, permissionTarget: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Permission>>;
    public getPermission(permissionComponent: string, permissionAction: string, permissionTarget: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Permission>>;
    public getPermission(permissionComponent: string, permissionAction: string, permissionTarget: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (permissionComponent === null || permissionComponent === undefined) {
            throw new Error('Required parameter permissionComponent was null or undefined when calling getPermission.');
        }
        if (permissionAction === null || permissionAction === undefined) {
            throw new Error('Required parameter permissionAction was null or undefined when calling getPermission.');
        }
        if (permissionTarget === null || permissionTarget === undefined) {
            throw new Error('Required parameter permissionTarget was null or undefined when calling getPermission.');
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

        return this.httpClient.get(`${this.basePath}/acs/permissions/${encodeURIComponent(String(permissionComponent))}/${encodeURIComponent(String(permissionAction))}/${encodeURIComponent(String(permissionTarget))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves all permissions
     * Retrieves all permissions
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPermissions(observe?: 'body', reportProgress?: boolean): Observable<Array<Permission>>;
    public getPermissions(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Permission>>>;
    public getPermissions(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Permission>>>;
    public getPermissions(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get(`${this.basePath}/acs/permissions`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }
}