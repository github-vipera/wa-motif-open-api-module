/**
 * Motif System Service API
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
import { HealthReport } from '../model/healthReport';

import { WC_API_BASE_PATH } from 'web-console-core';
import { Configuration }                                     from '../configuration';
import { SystemServiceInterface }                            from './system.serviceInterface';


@Injectable({
  providedIn: 'root'
})
export class SystemService implements SystemServiceInterface {

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
     * Get System Health Report
     * Get System Health Report
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSystemHealth(observe?: 'body', reportProgress?: boolean): Observable<HealthReport>;
    public getSystemHealth(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<HealthReport>>;
    public getSystemHealth(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<HealthReport>>;
    public getSystemHealth(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<HealthReport>(`${this.configuration.basePath}/system/health`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
