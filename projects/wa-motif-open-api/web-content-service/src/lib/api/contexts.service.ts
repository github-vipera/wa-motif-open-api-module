/**
 * Motif Web Content Service API
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
import { ServiceContextAttribute } from '../model/serviceContextAttribute';
import { WebContentContextCreate } from '../model/webContentContextCreate';
import { WebContentContextUpdate } from '../model/webContentContextUpdate';

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
     * Creates a Web Content Context
     * Creates a Web Content Context
     * @param domain Domain Name
     * @param application Application Name
     * @param webContentContextCreate 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createContext(domain: string, application: string, webContentContextCreate?: WebContentContextCreate, observe?: 'body', reportProgress?: boolean): Observable<ServiceContext>;
    public createContext(domain: string, application: string, webContentContextCreate?: WebContentContextCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ServiceContext>>;
    public createContext(domain: string, application: string, webContentContextCreate?: WebContentContextCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ServiceContext>>;
    public createContext(domain: string, application: string, webContentContextCreate?: WebContentContextCreate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling createContext.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling createContext.');
        }

        let headers = this.defaultHeaders;

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

        return this.httpClient.post<ServiceContext>(`${this.configuration.basePath}/webcontent/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/contexts`,
            webContentContextCreate,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a Web Content Context
     * Deletes a Web Content Context
     * @param domain Domain Name
     * @param application Application Name
     * @param contextName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteContext(domain: string, application: string, contextName: string, observe?: 'body', reportProgress?: boolean): Observable<object>;
    public deleteContext(domain: string, application: string, contextName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<object>>;
    public deleteContext(domain: string, application: string, contextName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<object>>;
    public deleteContext(domain: string, application: string, contextName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling deleteContext.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling deleteContext.');
        }
        if (contextName === null || contextName === undefined) {
            throw new Error('Required parameter contextName was null or undefined when calling deleteContext.');
        }

        let headers = this.defaultHeaders;

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

        return this.httpClient.delete<object>(`${this.configuration.basePath}/webcontent/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/contexts/${encodeURIComponent(String(contextName))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves Web Content Context
     * Retrieves Web Content Context
     * @param domain Domain Name
     * @param application Application Name
     * @param contextName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getContext(domain: string, application: string, contextName: string, observe?: 'body', reportProgress?: boolean): Observable<ServiceContext>;
    public getContext(domain: string, application: string, contextName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ServiceContext>>;
    public getContext(domain: string, application: string, contextName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ServiceContext>>;
    public getContext(domain: string, application: string, contextName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling getContext.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling getContext.');
        }
        if (contextName === null || contextName === undefined) {
            throw new Error('Required parameter contextName was null or undefined when calling getContext.');
        }

        let headers = this.defaultHeaders;

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

        return this.httpClient.get<ServiceContext>(`${this.configuration.basePath}/webcontent/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/contexts/${encodeURIComponent(String(contextName))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves Web Content Contexts list
     * Retrieves Web Content Contexts list
     * @param domain Domain Name
     * @param application Application Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getContexts(domain: string, application: string, observe?: 'body', reportProgress?: boolean): Observable<Array<ServiceContext>>;
    public getContexts(domain: string, application: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ServiceContext>>>;
    public getContexts(domain: string, application: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ServiceContext>>>;
    public getContexts(domain: string, application: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling getContexts.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling getContexts.');
        }

        let headers = this.defaultHeaders;

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

        return this.httpClient.get<Array<ServiceContext>>(`${this.configuration.basePath}/webcontent/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/contexts`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves Web Content Context supported attributes
     * Retrieves Web Content Context supported attributes
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSupportedAttributes(observe?: 'body', reportProgress?: boolean): Observable<Array<ServiceContextAttribute>>;
    public getSupportedAttributes(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ServiceContextAttribute>>>;
    public getSupportedAttributes(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ServiceContextAttribute>>>;
    public getSupportedAttributes(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

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

        return this.httpClient.get<Array<ServiceContextAttribute>>(`${this.configuration.basePath}/webcontent/contexts/attributes`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update a Web Content Context
     * Update a Web Content Context
     * @param domain Domain Name
     * @param application Application Name
     * @param contextName 
     * @param webContentContextUpdate 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateContext(domain: string, application: string, contextName: string, webContentContextUpdate?: WebContentContextUpdate, observe?: 'body', reportProgress?: boolean): Observable<object>;
    public updateContext(domain: string, application: string, contextName: string, webContentContextUpdate?: WebContentContextUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<object>>;
    public updateContext(domain: string, application: string, contextName: string, webContentContextUpdate?: WebContentContextUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<object>>;
    public updateContext(domain: string, application: string, contextName: string, webContentContextUpdate?: WebContentContextUpdate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling updateContext.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling updateContext.');
        }
        if (contextName === null || contextName === undefined) {
            throw new Error('Required parameter contextName was null or undefined when calling updateContext.');
        }

        let headers = this.defaultHeaders;

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

        return this.httpClient.put<object>(`${this.configuration.basePath}/webcontent/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/contexts/${encodeURIComponent(String(contextName))}`,
            webContentContextUpdate,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
