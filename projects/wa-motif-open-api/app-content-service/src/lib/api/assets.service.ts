/**
 * Motif App Content Service API
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

import { AssetBundleEntity } from '../model/assetBundleEntity';
import { AssetBundleUpdate } from '../model/assetBundleUpdate';
import { ErrorVipera } from '../model/errorVipera';

import { WC_API_BASE_PATH } from 'web-console-core';
import { Configuration }                                     from '../configuration';
import { AssetsServiceInterface }                            from './assets.serviceInterface';


@Injectable({
  providedIn: 'root'
})
export class AssetsService implements AssetsServiceInterface {

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
     * Deletes a version of a bundle
     * Deletes a version of a bundle
     * @param domain Domain Name
     * @param asset Asset Name
     * @param version Version
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteAsset(domain: string, asset: string, version: string, observe?: 'body', reportProgress?: boolean): Observable<object>;
    public deleteAsset(domain: string, asset: string, version: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<object>>;
    public deleteAsset(domain: string, asset: string, version: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<object>>;
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

        return this.httpClient.delete<object>(`${this.configuration.basePath}/appcont/domains/${encodeURIComponent(String(domain))}/assets/${encodeURIComponent(String(asset))}/versions/${encodeURIComponent(String(version))}`,
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
    public downloadAsset(domain: string, asset: string, version: string, observe?: 'body', reportProgress?: boolean): Observable<Blob>;
    public downloadAsset(domain: string, asset: string, version: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Blob>>;
    public downloadAsset(domain: string, asset: string, version: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Blob>>;
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
            'application/zip',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.configuration.basePath}/appcont/domains/${encodeURIComponent(String(domain))}/assets/${encodeURIComponent(String(asset))}/versions/${encodeURIComponent(String(version))}`,
            {
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves asset bundles by domain
     * Retrieves asset bundles by domain
     * @param domain Domain Name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAssets(domain: string, observe?: 'body', reportProgress?: boolean): Observable<Array<AssetBundleEntity>>;
    public getAssets(domain: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<AssetBundleEntity>>>;
    public getAssets(domain: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<AssetBundleEntity>>>;
    public getAssets(domain: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling getAssets.');
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

        return this.httpClient.get<Array<AssetBundleEntity>>(`${this.configuration.basePath}/appcont/domains/${encodeURIComponent(String(domain))}/assets`,
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
     * @param assetBundleUpdate 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateAsset(domain: string, asset: string, version: string, assetBundleUpdate?: AssetBundleUpdate, observe?: 'body', reportProgress?: boolean): Observable<object>;
    public updateAsset(domain: string, asset: string, version: string, assetBundleUpdate?: AssetBundleUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<object>>;
    public updateAsset(domain: string, asset: string, version: string, assetBundleUpdate?: AssetBundleUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<object>>;
    public updateAsset(domain: string, asset: string, version: string, assetBundleUpdate?: AssetBundleUpdate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
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

        return this.httpClient.put<object>(`${this.configuration.basePath}/appcont/domains/${encodeURIComponent(String(domain))}/assets/${encodeURIComponent(String(asset))}/versions/${encodeURIComponent(String(version))}`,
            assetBundleUpdate,
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
     * @param file Asset bundle in ZIP format
     * @param overwrite Whether to overwrite any existing bundle with same domain, name and version
     * @param publish Whether to publish the bundle immediately
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public uploadAsset(domain: string, file: Blob, overwrite?: boolean, publish?: boolean, observe?: 'body', reportProgress?: boolean): Observable<object>;
    public uploadAsset(domain: string, file: Blob, overwrite?: boolean, publish?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<object>>;
    public uploadAsset(domain: string, file: Blob, overwrite?: boolean, publish?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<object>>;
    public uploadAsset(domain: string, file: Blob, overwrite?: boolean, publish?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling uploadAsset.');
        }
        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling uploadAsset.');
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
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (file !== undefined) {
            formParams = formParams.append('file', <any>file) as any || formParams;
        }
        if (overwrite !== undefined) {
            formParams = formParams.append('overwrite', <any>overwrite) as any || formParams;
        }
        if (publish !== undefined) {
            formParams = formParams.append('publish', <any>publish) as any || formParams;
        }

        return this.httpClient.put<object>(`${this.configuration.basePath}/appcont/domains/${encodeURIComponent(String(domain))}/assets`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
