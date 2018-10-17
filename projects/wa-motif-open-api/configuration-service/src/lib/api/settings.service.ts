/**
 * Motif Configuration Service API
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

import { SettingCreate } from '../model/settingCreate';
import { SettingEntity } from '../model/settingEntity';
import { SettingList } from '../model/settingList';

import { WC_API_BASE_PATH } from 'web-console-core'
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SettingsService {

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
     * Creates Configuration Setting
     * Creates Configuration Setting
     * @param service 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createSetting(service: string, body?: SettingCreate, observe?: 'body', reportProgress?: boolean): Observable<SettingEntity>;
    public createSetting(service: string, body?: SettingCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SettingEntity>>;
    public createSetting(service: string, body?: SettingCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SettingEntity>>;
    public createSetting(service: string, body?: SettingCreate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (service === null || service === undefined) {
            throw new Error('Required parameter service was null or undefined when calling createSetting.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post(`${this.basePath}/cfg/settings/services/${encodeURIComponent(String(service))}/settings`,
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
     * Deletes a current property for a service
     * Deletes a current property for a service
     * @param service 
     * @param setting 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteSetting(service: string, setting: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteSetting(service: string, setting: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteSetting(service: string, setting: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteSetting(service: string, setting: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (service === null || service === undefined) {
            throw new Error('Required parameter service was null or undefined when calling deleteSetting.');
        }
        if (setting === null || setting === undefined) {
            throw new Error('Required parameter setting was null or undefined when calling deleteSetting.');
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

        return this.httpClient.delete(`${this.basePath}/cfg/settings/services/${encodeURIComponent(String(service))}/settings/${encodeURIComponent(String(setting))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes all current properties for a service.
     * Deletes all current properties for a service.
     * @param service 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteSettings(service: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteSettings(service: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteSettings(service: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteSettings(service: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (service === null || service === undefined) {
            throw new Error('Required parameter service was null or undefined when calling deleteSettings.');
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

        return this.httpClient.delete(`${this.basePath}/cfg/settings/services/${encodeURIComponent(String(service))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves Configuration Setting
     * Retrieves Configuration Setting
     * @param service 
     * @param setting 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSetting(service: string, setting: string, observe?: 'body', reportProgress?: boolean): Observable<SettingEntity>;
    public getSetting(service: string, setting: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SettingEntity>>;
    public getSetting(service: string, setting: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SettingEntity>>;
    public getSetting(service: string, setting: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (service === null || service === undefined) {
            throw new Error('Required parameter service was null or undefined when calling getSetting.');
        }
        if (setting === null || setting === undefined) {
            throw new Error('Required parameter setting was null or undefined when calling getSetting.');
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

        return this.httpClient.get(`${this.basePath}/cfg/settings/services/${encodeURIComponent(String(service))}/settings/${encodeURIComponent(String(setting))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves Configuration Settings
     * Retrieves Configuration Settings
     * @param service 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSettings(service: string, observe?: 'body', reportProgress?: boolean): Observable<SettingList>;
    public getSettings(service: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SettingList>>;
    public getSettings(service: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SettingList>>;
    public getSettings(service: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (service === null || service === undefined) {
            throw new Error('Required parameter service was null or undefined when calling getSettings.');
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

        return this.httpClient.get(`${this.basePath}/cfg/settings/services/${encodeURIComponent(String(service))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates Configuration Setting
     * Updates Configuration Setting
     * @param service 
     * @param setting 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateSetting(service: string, setting: string, body?: any, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateSetting(service: string, setting: string, body?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateSetting(service: string, setting: string, body?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateSetting(service: string, setting: string, body?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (service === null || service === undefined) {
            throw new Error('Required parameter service was null or undefined when calling updateSetting.');
        }
        if (setting === null || setting === undefined) {
            throw new Error('Required parameter setting was null or undefined when calling updateSetting.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put(`${this.basePath}/cfg/settings/services/${encodeURIComponent(String(service))}/settings/${encodeURIComponent(String(setting))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }
}