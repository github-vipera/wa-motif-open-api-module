/**
 * Motif Platform Service API
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

import { AppInstance } from '../model/appInstance';
import { ErrorVipera } from '../model/errorVipera';

import { WC_API_BASE_PATH } from 'web-console-core';
import { Configuration }                                     from '../configuration';
import { AppinstancesServiceInterface }                            from './appinstances.serviceInterface';


@Injectable({
  providedIn: 'root'
})
export class AppinstancesService implements AppinstancesServiceInterface {

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
     * Blocks app instance by serial
     * Blocks app instance by serial
     * @param viperaSerial Vipera Serial
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public blockAppInstanceBySerial(viperaSerial: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public blockAppInstanceBySerial(viperaSerial: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public blockAppInstanceBySerial(viperaSerial: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public blockAppInstanceBySerial(viperaSerial: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (viperaSerial === null || viperaSerial === undefined) {
            throw new Error('Required parameter viperaSerial was null or undefined when calling blockAppInstanceBySerial.');
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

        return this.httpClient.post<any>(`${this.configuration.basePath}/platform/appinstances/serial/${encodeURIComponent(String(viperaSerial))}/block`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Blocks user app instance by nickname
     * Blocks user app instance by nickname
     * @param domain Domain Name
     * @param userId User Id
     * @param appInstanceNickname App Instance Nickname
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public blockUserAppInstanceByNickname(domain: string, userId: string, appInstanceNickname: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public blockUserAppInstanceByNickname(domain: string, userId: string, appInstanceNickname: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public blockUserAppInstanceByNickname(domain: string, userId: string, appInstanceNickname: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public blockUserAppInstanceByNickname(domain: string, userId: string, appInstanceNickname: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling blockUserAppInstanceByNickname.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling blockUserAppInstanceByNickname.');
        }
        if (appInstanceNickname === null || appInstanceNickname === undefined) {
            throw new Error('Required parameter appInstanceNickname was null or undefined when calling blockUserAppInstanceByNickname.');
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

        return this.httpClient.post<any>(`${this.configuration.basePath}/platform/appinstances/domains/${encodeURIComponent(String(domain))}/users/${encodeURIComponent(String(userId))}/nickname/${encodeURIComponent(String(appInstanceNickname))}/block`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Blocks user app instances
     * Blocks user app instances
     * @param domain Domain Name
     * @param userId User Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public blockUserAppInstances(domain: string, userId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public blockUserAppInstances(domain: string, userId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public blockUserAppInstances(domain: string, userId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public blockUserAppInstances(domain: string, userId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling blockUserAppInstances.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling blockUserAppInstances.');
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

        return this.httpClient.post<any>(`${this.configuration.basePath}/platform/appinstances/domains/${encodeURIComponent(String(domain))}/users/${encodeURIComponent(String(userId))}/block`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves user app instances
     * Retrieves user app instances
     * @param domain Domain Name
     * @param userId User Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserAppInstances(domain: string, userId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<AppInstance>>;
    public getUserAppInstances(domain: string, userId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<AppInstance>>>;
    public getUserAppInstances(domain: string, userId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<AppInstance>>>;
    public getUserAppInstances(domain: string, userId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling getUserAppInstances.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserAppInstances.');
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

        return this.httpClient.get<Array<AppInstance>>(`${this.configuration.basePath}/platform/appinstances/domains/${encodeURIComponent(String(domain))}/users/${encodeURIComponent(String(userId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Unblocks app instance by serial
     * Unblocks app instance by serial
     * @param viperaSerial Vipera Serial
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public unblockAppInstanceBySerial(viperaSerial: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public unblockAppInstanceBySerial(viperaSerial: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public unblockAppInstanceBySerial(viperaSerial: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public unblockAppInstanceBySerial(viperaSerial: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (viperaSerial === null || viperaSerial === undefined) {
            throw new Error('Required parameter viperaSerial was null or undefined when calling unblockAppInstanceBySerial.');
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

        return this.httpClient.post<any>(`${this.configuration.basePath}/platform/appinstances/serial/${encodeURIComponent(String(viperaSerial))}/unblock`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Unblocks user app instance by nickname
     * Unblocks user app instance by nickname
     * @param domain Domain Name
     * @param userId User Id
     * @param appInstanceNickname App Instance Nickname
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public unblockUserAppInstanceByNickname(domain: string, userId: string, appInstanceNickname: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public unblockUserAppInstanceByNickname(domain: string, userId: string, appInstanceNickname: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public unblockUserAppInstanceByNickname(domain: string, userId: string, appInstanceNickname: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public unblockUserAppInstanceByNickname(domain: string, userId: string, appInstanceNickname: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling unblockUserAppInstanceByNickname.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling unblockUserAppInstanceByNickname.');
        }
        if (appInstanceNickname === null || appInstanceNickname === undefined) {
            throw new Error('Required parameter appInstanceNickname was null or undefined when calling unblockUserAppInstanceByNickname.');
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

        return this.httpClient.post<any>(`${this.configuration.basePath}/platform/appinstances/domains/${encodeURIComponent(String(domain))}/users/${encodeURIComponent(String(userId))}/nickname/${encodeURIComponent(String(appInstanceNickname))}/unblock`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Unblocks user app instances
     * Unblocks user app instances
     * @param domain Domain Name
     * @param userId User Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public unblockUserAppInstances(domain: string, userId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public unblockUserAppInstances(domain: string, userId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public unblockUserAppInstances(domain: string, userId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public unblockUserAppInstances(domain: string, userId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling unblockUserAppInstances.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling unblockUserAppInstances.');
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

        return this.httpClient.post<any>(`${this.configuration.basePath}/platform/appinstances/domains/${encodeURIComponent(String(domain))}/users/${encodeURIComponent(String(userId))}/unblock`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
