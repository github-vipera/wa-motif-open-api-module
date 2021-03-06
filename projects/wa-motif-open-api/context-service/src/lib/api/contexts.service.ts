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
import { ServiceContext } from '../model/serviceContext';
import { ServiceContextCreate } from '../model/serviceContextCreate';
import { ServiceContextUpdate } from '../model/serviceContextUpdate';

import { WC_API_BASE_PATH } from 'web-console-core';
import { Configuration }                                     from '../configuration';
import { ContextsServiceInterface }                            from './contexts.serviceInterface';


@Injectable({
  providedIn: 'root'
})
export class ContextsService implements ContextsServiceInterface {

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
     * Creates a Service Context
     * Creates a Service Context
     * @param domain Domain Name
     * @param application Application Name
     * @param serviceContextCreate 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createContext(domain: string, application: string, serviceContextCreate?: ServiceContextCreate, observe?: 'body', reportProgress?: boolean): Observable<ServiceContext>;
    public createContext(domain: string, application: string, serviceContextCreate?: ServiceContextCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ServiceContext>>;
    public createContext(domain: string, application: string, serviceContextCreate?: ServiceContextCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ServiceContext>>;
    public createContext(domain: string, application: string, serviceContextCreate?: ServiceContextCreate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling createContext.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling createContext.');
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

        return this.httpClient.post<ServiceContext>(`${this.configuration.basePath}/contextservice/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/contexts`,
            serviceContextCreate,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a Service Context
     * Deletes a Service Context
     * @param domain Domain Name
     * @param application Application Name
     * @param context Context Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteContext(domain: string, application: string, context: string, observe?: 'body', reportProgress?: boolean): Observable<object>;
    public deleteContext(domain: string, application: string, context: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<object>>;
    public deleteContext(domain: string, application: string, context: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<object>>;
    public deleteContext(domain: string, application: string, context: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling deleteContext.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling deleteContext.');
        }
        if (context === null || context === undefined) {
            throw new Error('Required parameter context was null or undefined when calling deleteContext.');
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

        return this.httpClient.delete<object>(`${this.configuration.basePath}/contextservice/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/contexts/${encodeURIComponent(String(context))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Disables a Service Context
     * Disables a Service Context
     * @param domain Domain Name
     * @param application Application Name
     * @param context Context Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public disableContext(domain: string, application: string, context: string, observe?: 'body', reportProgress?: boolean): Observable<object>;
    public disableContext(domain: string, application: string, context: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<object>>;
    public disableContext(domain: string, application: string, context: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<object>>;
    public disableContext(domain: string, application: string, context: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling disableContext.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling disableContext.');
        }
        if (context === null || context === undefined) {
            throw new Error('Required parameter context was null or undefined when calling disableContext.');
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

        return this.httpClient.delete<object>(`${this.configuration.basePath}/contextservice/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/contexts/${encodeURIComponent(String(context))}/enable`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Enables a Service Context
     * Enables a Service Context
     * @param domain Domain Name
     * @param application Application Name
     * @param context Context Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public enableContext(domain: string, application: string, context: string, observe?: 'body', reportProgress?: boolean): Observable<object>;
    public enableContext(domain: string, application: string, context: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<object>>;
    public enableContext(domain: string, application: string, context: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<object>>;
    public enableContext(domain: string, application: string, context: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling enableContext.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling enableContext.');
        }
        if (context === null || context === undefined) {
            throw new Error('Required parameter context was null or undefined when calling enableContext.');
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

        return this.httpClient.post<object>(`${this.configuration.basePath}/contextservice/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/contexts/${encodeURIComponent(String(context))}/enable`,
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
     * Retrieves all Service Contexts given an application
     * Retrieves all Service Contexts given an application
     * @param domain Domain Name
     * @param application Application Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getApplicationContexts(domain: string, application: string, observe?: 'body', reportProgress?: boolean): Observable<Array<ServiceContext>>;
    public getApplicationContexts(domain: string, application: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ServiceContext>>>;
    public getApplicationContexts(domain: string, application: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ServiceContext>>>;
    public getApplicationContexts(domain: string, application: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling getApplicationContexts.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling getApplicationContexts.');
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

        return this.httpClient.get<Array<ServiceContext>>(`${this.configuration.basePath}/contextservice/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/contexts`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves a Service Context
     * Retrieves a Service Context
     * @param domain Domain Name
     * @param application Application Name
     * @param context Context Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getContext(domain: string, application: string, context: string, observe?: 'body', reportProgress?: boolean): Observable<ServiceContext>;
    public getContext(domain: string, application: string, context: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ServiceContext>>;
    public getContext(domain: string, application: string, context: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ServiceContext>>;
    public getContext(domain: string, application: string, context: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling getContext.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling getContext.');
        }
        if (context === null || context === undefined) {
            throw new Error('Required parameter context was null or undefined when calling getContext.');
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

        return this.httpClient.get<ServiceContext>(`${this.configuration.basePath}/contextservice/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/contexts/${encodeURIComponent(String(context))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves all Service Contexts
     * Retrieves all Service Contexts
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getContexts(observe?: 'body', reportProgress?: boolean): Observable<Array<ServiceContext>>;
    public getContexts(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ServiceContext>>>;
    public getContexts(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ServiceContext>>>;
    public getContexts(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<ServiceContext>>(`${this.configuration.basePath}/contextservice/contexts`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a Service Context
     * Updates a Service Context
     * @param domain Domain Name
     * @param application Application Name
     * @param context Context Name
     * @param serviceContextUpdate 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateContext(domain: string, application: string, context: string, serviceContextUpdate?: ServiceContextUpdate, observe?: 'body', reportProgress?: boolean): Observable<object>;
    public updateContext(domain: string, application: string, context: string, serviceContextUpdate?: ServiceContextUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<object>>;
    public updateContext(domain: string, application: string, context: string, serviceContextUpdate?: ServiceContextUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<object>>;
    public updateContext(domain: string, application: string, context: string, serviceContextUpdate?: ServiceContextUpdate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling updateContext.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling updateContext.');
        }
        if (context === null || context === undefined) {
            throw new Error('Required parameter context was null or undefined when calling updateContext.');
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

        return this.httpClient.put<object>(`${this.configuration.basePath}/contextservice/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/contexts/${encodeURIComponent(String(context))}`,
            serviceContextUpdate,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
