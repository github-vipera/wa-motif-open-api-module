/**
 * Motif Counters and Thresholds Service API
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

import { CountersEntityList } from '../model/countersEntityList';
import { ErrorVipera } from '../model/errorVipera';
import { Variation } from '../model/variation';

import { WC_API_BASE_PATH } from 'web-console-core'
import { Configuration }                                     from '../configuration';
import { UsersServiceInterface }                            from './users.serviceInterface';


@Injectable({
  providedIn: 'root'
})
export class UsersService implements UsersServiceInterface {

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
     * Retrieves User Counters Values
     * Retrieves User Counters Values
     * @param domain Domain Name
     * @param userId User Id
     * @param counterInfo Counter Info Name
     * @param page Page (omit to retrieve all records at once)
     * @param pageSize Page size
     * @param sort Sorting fields
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserCounters(domain: string, userId: string, counterInfo?: string, page?: number, pageSize?: number, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<CountersEntityList>;
    public getUserCounters(domain: string, userId: string, counterInfo?: string, page?: number, pageSize?: number, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CountersEntityList>>;
    public getUserCounters(domain: string, userId: string, counterInfo?: string, page?: number, pageSize?: number, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CountersEntityList>>;
    public getUserCounters(domain: string, userId: string, counterInfo?: string, page?: number, pageSize?: number, sort?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling getUserCounters.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserCounters.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (counterInfo !== undefined && counterInfo !== null) {
            queryParameters = queryParameters.set('counterInfo', <any>counterInfo);
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

        return this.httpClient.get<CountersEntityList>(`${this.configuration.basePath}/counterthreshold/domain/${encodeURIComponent(String(domain))}/user/${encodeURIComponent(String(userId))}/counters`,
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
     * Updates User Counter Value
     * Updates User Counter Value
     * @param counterInfo Counter Info name
     * @param domain Domain Name
     * @param userId User Id
     * @param variation 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUserCounter(counterInfo: string, domain: string, userId: string, variation?: Variation, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateUserCounter(counterInfo: string, domain: string, userId: string, variation?: Variation, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateUserCounter(counterInfo: string, domain: string, userId: string, variation?: Variation, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateUserCounter(counterInfo: string, domain: string, userId: string, variation?: Variation, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (counterInfo === null || counterInfo === undefined) {
            throw new Error('Required parameter counterInfo was null or undefined when calling updateUserCounter.');
        }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling updateUserCounter.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateUserCounter.');
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

        return this.httpClient.put<any>(`${this.configuration.basePath}/counterthreshold/domain/${encodeURIComponent(String(domain))}/user/${encodeURIComponent(String(userId))}/counters/${encodeURIComponent(String(counterInfo))}`,
            variation,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
