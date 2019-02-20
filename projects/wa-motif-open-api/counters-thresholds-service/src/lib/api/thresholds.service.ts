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

import { ErrorVipera } from '../model/errorVipera';
import { ThresholdInfo } from '../model/thresholdInfo';
import { ThresholdInfoEntity } from '../model/thresholdInfoEntity';

import { WC_API_BASE_PATH } from 'web-console-core';
import { Configuration }                                     from '../configuration';
import { ThresholdsServiceInterface }                            from './thresholds.serviceInterface';


@Injectable({
  providedIn: 'root'
})
export class ThresholdsService implements ThresholdsServiceInterface {

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
     * Creates Threshold Info
     * Creates Threshold Info
     * @param thresholdInfo 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createThresholdInfo(thresholdInfo?: ThresholdInfo, observe?: 'body', reportProgress?: boolean): Observable<ThresholdInfoEntity>;
    public createThresholdInfo(thresholdInfo?: ThresholdInfo, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ThresholdInfoEntity>>;
    public createThresholdInfo(thresholdInfo?: ThresholdInfo, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ThresholdInfoEntity>>;
    public createThresholdInfo(thresholdInfo?: ThresholdInfo, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<ThresholdInfoEntity>(`${this.configuration.basePath}/counterthreshold/thresholds`,
            thresholdInfo,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes Threshold Info
     * Deletes Threshold Info
     * @param threshold Threshold name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteThresholdInfo(threshold: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteThresholdInfo(threshold: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteThresholdInfo(threshold: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteThresholdInfo(threshold: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (threshold === null || threshold === undefined) {
            throw new Error('Required parameter threshold was null or undefined when calling deleteThresholdInfo.');
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

        return this.httpClient.delete<any>(`${this.configuration.basePath}/counterthreshold/thresholds/${encodeURIComponent(String(threshold))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves Threshold Info
     * Retrieves Threshold Info
     * @param threshold Threshold name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getThresholdInfo(threshold: string, observe?: 'body', reportProgress?: boolean): Observable<ThresholdInfoEntity>;
    public getThresholdInfo(threshold: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ThresholdInfoEntity>>;
    public getThresholdInfo(threshold: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ThresholdInfoEntity>>;
    public getThresholdInfo(threshold: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (threshold === null || threshold === undefined) {
            throw new Error('Required parameter threshold was null or undefined when calling getThresholdInfo.');
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

        return this.httpClient.get<ThresholdInfoEntity>(`${this.configuration.basePath}/counterthreshold/thresholds/${encodeURIComponent(String(threshold))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates Threshold Info
     * Updates Threshold Info
     * @param threshold Threshold name
     * @param thresholdInfo 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateThresholdInfo(threshold: string, thresholdInfo?: ThresholdInfo, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateThresholdInfo(threshold: string, thresholdInfo?: ThresholdInfo, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateThresholdInfo(threshold: string, thresholdInfo?: ThresholdInfo, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateThresholdInfo(threshold: string, thresholdInfo?: ThresholdInfo, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (threshold === null || threshold === undefined) {
            throw new Error('Required parameter threshold was null or undefined when calling updateThresholdInfo.');
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

        return this.httpClient.put<any>(`${this.configuration.basePath}/counterthreshold/thresholds/${encodeURIComponent(String(threshold))}`,
            thresholdInfo,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
