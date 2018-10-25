/**
 * Motif App Content Service API
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

import { AssetBundle } from '../model/assetBundle';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AssetsService {

    protected basePath = 'http://localhost:8080/rest/v2';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
     * Deletes a version of a bundle
     * Deletes a version of a bundle
     * @param domain Domain Name
     * @param asset Asset Name
     * @param version Version
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteAsset(domain: string, asset: string, version: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteAsset(domain: string, asset: string, version: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteAsset(domain: string, asset: string, version: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteAsset(domain: string, asset: string, version: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling deleteAsset.');
        }
        if (asset === null || asset === undefined) {
            throw new Error('Required parameter asset was null or undefined when calling deleteAsset.');
        }
        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling deleteAsset.');
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

        return this.httpClient.delete(`${this.basePath}/appcont/domains/${encodeURIComponent(String(domain))}/assets/${encodeURIComponent(String(asset))}/versions/${encodeURIComponent(String(version))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Downloads an asset bundle from the DB
     * Downloads an asset bundle from the DB
     * @param domain Domain Name
     * @param asset Asset Name
     * @param version Version
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public downloadAsset(domain: string, asset: string, version: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public downloadAsset(domain: string, asset: string, version: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public downloadAsset(domain: string, asset: string, version: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public downloadAsset(domain: string, asset: string, version: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling downloadAsset.');
        }
        if (asset === null || asset === undefined) {
            throw new Error('Required parameter asset was null or undefined when calling downloadAsset.');
        }
        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling downloadAsset.');
        }

        let headers = this.defaultHeaders;

        // authentication (vipera_basic) required
        // authentication (vipera_cookie) required
        // authentication (vipera_oauth2) required
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/zip',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/appcont/domains/${encodeURIComponent(String(domain))}/assets/${encodeURIComponent(String(asset))}/versions/${encodeURIComponent(String(version))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates the public flag of an asset bundle
     * Updates the public flag of an asset bundle
     * @param domain Domain Name
     * @param asset Asset Name
     * @param version Version
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateAsset(domain: string, asset: string, version: string, body?: AssetBundle, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateAsset(domain: string, asset: string, version: string, body?: AssetBundle, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateAsset(domain: string, asset: string, version: string, body?: AssetBundle, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateAsset(domain: string, asset: string, version: string, body?: AssetBundle, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling updateAsset.');
        }
        if (asset === null || asset === undefined) {
            throw new Error('Required parameter asset was null or undefined when calling updateAsset.');
        }
        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling updateAsset.');
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

        return this.httpClient.put(`${this.basePath}/appcont/domains/${encodeURIComponent(String(domain))}/assets/${encodeURIComponent(String(asset))}/versions/${encodeURIComponent(String(version))}`,
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
     * Uploads an asset bundle to the server DB
     * Uploads an asset bundle to the server DB
     * @param domain Domain Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public uploadAsset(domain: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public uploadAsset(domain: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public uploadAsset(domain: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public uploadAsset(domain: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling uploadAsset.');
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
            'multipart/form-data'
        ];

        return this.httpClient.put(`${this.basePath}/appcont/domains/${encodeURIComponent(String(domain))}/assets`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }
}