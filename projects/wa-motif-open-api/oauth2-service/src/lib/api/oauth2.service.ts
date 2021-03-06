/**
 * Motif OAuth2 Service API
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

import { AccessToken } from '../model/accessToken';
import { ErrorVipera } from '../model/errorVipera';
import { RefreshToken } from '../model/refreshToken';
import { Validate } from '../model/validate';

import { WC_API_BASE_PATH } from 'web-console-core';
import { Configuration }                                     from '../configuration';
import { Oauth2ServiceInterface }                            from './oauth2.serviceInterface';


@Injectable({
  providedIn: 'root'
})
export class Oauth2Service implements Oauth2ServiceInterface {

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
     * Get OAuth2 Access Tokens by Refresh Token
     * Get OAuth2 Access Tokens by Refresh Token
     * @param refreshToken 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAccessTokenListByRefreshToken(refreshToken: string, observe?: 'body', reportProgress?: boolean): Observable<Array<AccessToken>>;
    public getAccessTokenListByRefreshToken(refreshToken: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<AccessToken>>>;
    public getAccessTokenListByRefreshToken(refreshToken: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<AccessToken>>>;
    public getAccessTokenListByRefreshToken(refreshToken: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (refreshToken === null || refreshToken === undefined) {
            throw new Error('Required parameter refreshToken was null or undefined when calling getAccessTokenListByRefreshToken.');
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

        return this.httpClient.get<Array<AccessToken>>(`${this.configuration.basePath}/oauth2/refreshTokens/${encodeURIComponent(String(refreshToken))}/accessTokens`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get OAuth2 Refresh Tokens of a specific domain
     * Get OAuth2 Refresh Tokens of a specific domain
     * @param domain Domain Name
     * @param page Page (omit to retrieve all records at once)
     * @param pageSize Page size
     * @param sort Sorting fields
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRefreshTokenList(domain: string, page?: number, pageSize?: number, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<RefreshToken>>;
    public getRefreshTokenList(domain: string, page?: number, pageSize?: number, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<RefreshToken>>>;
    public getRefreshTokenList(domain: string, page?: number, pageSize?: number, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<RefreshToken>>>;
    public getRefreshTokenList(domain: string, page?: number, pageSize?: number, sort?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling getRefreshTokenList.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
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

        return this.httpClient.get<Array<RefreshToken>>(`${this.configuration.basePath}/oauth2/domains/${encodeURIComponent(String(domain))}/refreshTokens`,
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
     * Get OAuth2 Refresh Tokens by User
     * Get OAuth2 Refresh Tokens by User
     * @param domain Domain Name
     * @param userId User Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRefreshTokenListByUser(domain: string, userId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<RefreshToken>>;
    public getRefreshTokenListByUser(domain: string, userId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<RefreshToken>>>;
    public getRefreshTokenListByUser(domain: string, userId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<RefreshToken>>>;
    public getRefreshTokenListByUser(domain: string, userId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling getRefreshTokenListByUser.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getRefreshTokenListByUser.');
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

        return this.httpClient.get<Array<RefreshToken>>(`${this.configuration.basePath}/oauth2/domains/${encodeURIComponent(String(domain))}/users/${encodeURIComponent(String(userId))}/refreshTokens`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Revokes OAuth2 Access Token
     * Revokes OAuth2 Access Token
     * @param accessToken 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public revokeAccessToken(accessToken: string, observe?: 'body', reportProgress?: boolean): Observable<object>;
    public revokeAccessToken(accessToken: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<object>>;
    public revokeAccessToken(accessToken: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<object>>;
    public revokeAccessToken(accessToken: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accessToken === null || accessToken === undefined) {
            throw new Error('Required parameter accessToken was null or undefined when calling revokeAccessToken.');
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

        return this.httpClient.delete<object>(`${this.configuration.basePath}/oauth2/accessTokens/${encodeURIComponent(String(accessToken))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Revokes OAuth2 Refresh Token
     * Revokes OAuth2 Refresh Token
     * @param refreshToken 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public revokeRefreshToken(refreshToken: string, observe?: 'body', reportProgress?: boolean): Observable<object>;
    public revokeRefreshToken(refreshToken: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<object>>;
    public revokeRefreshToken(refreshToken: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<object>>;
    public revokeRefreshToken(refreshToken: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (refreshToken === null || refreshToken === undefined) {
            throw new Error('Required parameter refreshToken was null or undefined when calling revokeRefreshToken.');
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

        return this.httpClient.delete<object>(`${this.configuration.basePath}/oauth2/refreshTokens/${encodeURIComponent(String(refreshToken))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Validates OAuth2 Token
     * Validates OAuth2 Token
     * @param validate 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public validate(validate?: Validate, observe?: 'body', reportProgress?: boolean): Observable<object>;
    public validate(validate?: Validate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<object>>;
    public validate(validate?: Validate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<object>>;
    public validate(validate?: Validate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<object>(`${this.configuration.basePath}/oauth2/validate`,
            validate,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
