/**
 * Motif Service Catalog API
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
import { ServiceOperation } from '../model/serviceOperation';
import { ServiceOperationProperties } from '../model/serviceOperationProperties';

import { WC_API_BASE_PATH } from 'web-console-core';
import { Configuration }                                     from '../configuration';
import { OperationsServiceInterface }                            from './operations.serviceInterface';


@Injectable({
  providedIn: 'root'
})
export class OperationsService implements OperationsServiceInterface {

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
     * Creates service operation
     * Creates service operation
     * @param channel Channel Name (REST,JSON,SMS,...)
     * @param domain Domain Name
     * @param application Application Name
     * @param service Service Name
     * @param serviceOperation 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createServiceOperation(channel: string, domain: string, application: string, service: string, serviceOperation?: ServiceOperation, observe?: 'body', reportProgress?: boolean): Observable<ServiceOperation>;
    public createServiceOperation(channel: string, domain: string, application: string, service: string, serviceOperation?: ServiceOperation, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ServiceOperation>>;
    public createServiceOperation(channel: string, domain: string, application: string, service: string, serviceOperation?: ServiceOperation, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ServiceOperation>>;
    public createServiceOperation(channel: string, domain: string, application: string, service: string, serviceOperation?: ServiceOperation, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (channel === null || channel === undefined) {
            throw new Error('Required parameter channel was null or undefined when calling createServiceOperation.');
        }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling createServiceOperation.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling createServiceOperation.');
        }
        if (service === null || service === undefined) {
            throw new Error('Required parameter service was null or undefined when calling createServiceOperation.');
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

        return this.httpClient.post<ServiceOperation>(`${this.configuration.basePath}/catalog/channels/${encodeURIComponent(String(channel))}/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/services/${encodeURIComponent(String(service))}/operations`,
            serviceOperation,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes service operation
     * Deletes service operation
     * @param channel Channel Name (REST,JSON,SMS,...)
     * @param domain Domain Name
     * @param application Application Name
     * @param service Service Name
     * @param operation Operation
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteServiceOperation(channel: string, domain: string, application: string, service: string, operation: string, observe?: 'body', reportProgress?: boolean): Observable<object>;
    public deleteServiceOperation(channel: string, domain: string, application: string, service: string, operation: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<object>>;
    public deleteServiceOperation(channel: string, domain: string, application: string, service: string, operation: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<object>>;
    public deleteServiceOperation(channel: string, domain: string, application: string, service: string, operation: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (channel === null || channel === undefined) {
            throw new Error('Required parameter channel was null or undefined when calling deleteServiceOperation.');
        }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling deleteServiceOperation.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling deleteServiceOperation.');
        }
        if (service === null || service === undefined) {
            throw new Error('Required parameter service was null or undefined when calling deleteServiceOperation.');
        }
        if (operation === null || operation === undefined) {
            throw new Error('Required parameter operation was null or undefined when calling deleteServiceOperation.');
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

        return this.httpClient.delete<object>(`${this.configuration.basePath}/catalog/channels/${encodeURIComponent(String(channel))}/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/services/${encodeURIComponent(String(service))}/operations/${encodeURIComponent(String(operation))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Collects service operation infos
     * Collects service operation infos
     * @param channel Channel Name (REST,JSON,SMS,...)
     * @param domain Domain Name
     * @param application Application Name
     * @param service Service Name
     * @param operation Operation
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getServiceOperation(channel: string, domain: string, application: string, service: string, operation: string, observe?: 'body', reportProgress?: boolean): Observable<ServiceOperation>;
    public getServiceOperation(channel: string, domain: string, application: string, service: string, operation: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ServiceOperation>>;
    public getServiceOperation(channel: string, domain: string, application: string, service: string, operation: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ServiceOperation>>;
    public getServiceOperation(channel: string, domain: string, application: string, service: string, operation: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (channel === null || channel === undefined) {
            throw new Error('Required parameter channel was null or undefined when calling getServiceOperation.');
        }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling getServiceOperation.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling getServiceOperation.');
        }
        if (service === null || service === undefined) {
            throw new Error('Required parameter service was null or undefined when calling getServiceOperation.');
        }
        if (operation === null || operation === undefined) {
            throw new Error('Required parameter operation was null or undefined when calling getServiceOperation.');
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

        return this.httpClient.get<ServiceOperation>(`${this.configuration.basePath}/catalog/channels/${encodeURIComponent(String(channel))}/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/services/${encodeURIComponent(String(service))}/operations/${encodeURIComponent(String(operation))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates service operation
     * Updates service operation
     * @param channel Channel Name (REST,JSON,SMS,...)
     * @param domain Domain Name
     * @param application Application Name
     * @param service Service Name
     * @param operation Operation
     * @param serviceOperationProperties 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateServiceOperation(channel: string, domain: string, application: string, service: string, operation: string, serviceOperationProperties?: ServiceOperationProperties, observe?: 'body', reportProgress?: boolean): Observable<object>;
    public updateServiceOperation(channel: string, domain: string, application: string, service: string, operation: string, serviceOperationProperties?: ServiceOperationProperties, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<object>>;
    public updateServiceOperation(channel: string, domain: string, application: string, service: string, operation: string, serviceOperationProperties?: ServiceOperationProperties, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<object>>;
    public updateServiceOperation(channel: string, domain: string, application: string, service: string, operation: string, serviceOperationProperties?: ServiceOperationProperties, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (channel === null || channel === undefined) {
            throw new Error('Required parameter channel was null or undefined when calling updateServiceOperation.');
        }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling updateServiceOperation.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling updateServiceOperation.');
        }
        if (service === null || service === undefined) {
            throw new Error('Required parameter service was null or undefined when calling updateServiceOperation.');
        }
        if (operation === null || operation === undefined) {
            throw new Error('Required parameter operation was null or undefined when calling updateServiceOperation.');
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

        return this.httpClient.put<object>(`${this.configuration.basePath}/catalog/channels/${encodeURIComponent(String(channel))}/domains/${encodeURIComponent(String(domain))}/applications/${encodeURIComponent(String(application))}/services/${encodeURIComponent(String(service))}/operations/${encodeURIComponent(String(operation))}`,
            serviceOperationProperties,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
