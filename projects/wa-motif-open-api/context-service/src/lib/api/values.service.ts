/**
 * Motif Context Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
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

import { ErrorVipera } from '../model/errorVipera';
import { ServiceContextValue } from '../model/serviceContextValue';
import { Value } from '../model/value';
import { ValueCreate } from '../model/valueCreate';

import { WC_API_BASE_PATH } from 'web-console-core';
import { Configuration }                                     from '../configuration';
import { ValuesServiceInterface }                            from './values.serviceInterface';


@Injectable({
  providedIn: 'root'
})
export class ValuesService implements ValuesServiceInterface {

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
     * Creates a Service Context Value
     * Creates a Service Context Value
     * @param domain Domain Name
     * @param application Application Name
     * @param context Context Name
     * @param valueCreate 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createValue(domain: string, application: string, context: string, valueCreate?: ValueCreate, observe?: 'body', reportProgress?: boolean): Observable<ServiceContextValue>;
    public createValue(domain: string, application: string, context: string, valueCreate?: ValueCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ServiceContextValue>>;
    public createValue(domain: string, application: string, context: string, valueCreate?: ValueCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ServiceContextValue>>;
    public createValue(domain: string, application: string, context: string, valueCreate?: ValueCreate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling createValue.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling createValue.');
        }
        if (context === null || context === undefined) {
            throw new Error('Required parameter context was null or undefined when calling createValue.');
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
        const httpHeaderAccepts: string[] = [
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

        return this.httpClient.post<ServiceContextValue>(`${this.configuration.basePath}/contextservice/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/contexts/${encodeURIComponent(String(context))}/attributes`,
            valueCreate,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a Service Context Value
     * Deletes a Service Context Value
     * @param domain Domain Name
     * @param application Application Name
     * @param context Context Name
     * @param attribute Attribute Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteValue(domain: string, application: string, context: string, attribute: string, observe?: 'body', reportProgress?: boolean): Observable<object>;
    public deleteValue(domain: string, application: string, context: string, attribute: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<object>>;
    public deleteValue(domain: string, application: string, context: string, attribute: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<object>>;
    public deleteValue(domain: string, application: string, context: string, attribute: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling deleteValue.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling deleteValue.');
        }
        if (context === null || context === undefined) {
            throw new Error('Required parameter context was null or undefined when calling deleteValue.');
        }
        if (attribute === null || attribute === undefined) {
            throw new Error('Required parameter attribute was null or undefined when calling deleteValue.');
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
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<object>(`${this.configuration.basePath}/contextservice/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/contexts/${encodeURIComponent(String(context))}/attributes/${encodeURIComponent(String(attribute))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves a Service Context Value
     * Retrieves a Service Context Value
     * @param domain Domain Name
     * @param application Application Name
     * @param context Context Name
     * @param attribute Attribute Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getValue(domain: string, application: string, context: string, attribute: string, observe?: 'body', reportProgress?: boolean): Observable<ServiceContextValue>;
    public getValue(domain: string, application: string, context: string, attribute: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ServiceContextValue>>;
    public getValue(domain: string, application: string, context: string, attribute: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ServiceContextValue>>;
    public getValue(domain: string, application: string, context: string, attribute: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling getValue.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling getValue.');
        }
        if (context === null || context === undefined) {
            throw new Error('Required parameter context was null or undefined when calling getValue.');
        }
        if (attribute === null || attribute === undefined) {
            throw new Error('Required parameter attribute was null or undefined when calling getValue.');
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
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<ServiceContextValue>(`${this.configuration.basePath}/contextservice/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/contexts/${encodeURIComponent(String(context))}/attributes/${encodeURIComponent(String(attribute))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves Service Context Values
     * Retrieves Service Context Values
     * @param domain Domain Name
     * @param application Application Name
     * @param context Context Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getValues(domain: string, application: string, context: string, observe?: 'body', reportProgress?: boolean): Observable<Array<ServiceContextValue>>;
    public getValues(domain: string, application: string, context: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ServiceContextValue>>>;
    public getValues(domain: string, application: string, context: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ServiceContextValue>>>;
    public getValues(domain: string, application: string, context: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling getValues.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling getValues.');
        }
        if (context === null || context === undefined) {
            throw new Error('Required parameter context was null or undefined when calling getValues.');
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
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<ServiceContextValue>>(`${this.configuration.basePath}/contextservice/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/contexts/${encodeURIComponent(String(context))}/attributes`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a Service Context Value
     * Updates a Service Context Value
     * @param domain Domain Name
     * @param application Application Name
     * @param context Context Name
     * @param attribute Attribute Name
     * @param value 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateValue(domain: string, application: string, context: string, attribute: string, value?: Value, observe?: 'body', reportProgress?: boolean): Observable<object>;
    public updateValue(domain: string, application: string, context: string, attribute: string, value?: Value, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<object>>;
    public updateValue(domain: string, application: string, context: string, attribute: string, value?: Value, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<object>>;
    public updateValue(domain: string, application: string, context: string, attribute: string, value?: Value, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling updateValue.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling updateValue.');
        }
        if (context === null || context === undefined) {
            throw new Error('Required parameter context was null or undefined when calling updateValue.');
        }
        if (attribute === null || attribute === undefined) {
            throw new Error('Required parameter attribute was null or undefined when calling updateValue.');
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
        const httpHeaderAccepts: string[] = [
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

        return this.httpClient.put<object>(`${this.configuration.basePath}/contextservice/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/contexts/${encodeURIComponent(String(context))}/attributes/${encodeURIComponent(String(attribute))}`,
            value,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
