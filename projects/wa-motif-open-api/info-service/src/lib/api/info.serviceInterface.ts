/**
 * Motif Info Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: info@vipera.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { ChannelInfo } from '../model/channelInfo';
import { ErrorVipera } from '../model/errorVipera';
import { OAuth2Info } from '../model/oAuth2Info';
import { ServerInfo } from '../model/serverInfo';
import { ServerStatus } from '../model/serverStatus';
import { SessionsInfo } from '../model/sessionsInfo';
import { UsersInfo } from '../model/usersInfo';


import { Configuration }                                     from '../configuration';


export interface InfoServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Retrieves channel info
    * Retrieves channel info
    * @param channel Channel Name (REST,JSON,SMS,...)
    */
    getChannelInfo(channel: string, extraHttpRequestParams?: any): Observable<Array<ChannelInfo>>;

    /**
    * Retrieves OAuth2 info
    * Retrieves OAuth2 info
    */
    getOAuth2Info(extraHttpRequestParams?: any): Observable<OAuth2Info>;

    /**
    * Retrieves information about server
    * Retrieves information about server
    */
    getServerInfo(extraHttpRequestParams?: any): Observable<ServerInfo>;

    /**
    * Retrieves realtime server status
    * Retrieves realtime server status
    */
    getServerStatus(extraHttpRequestParams?: any): Observable<ServerStatus>;

    /**
    * Retrieves users info
    * Retrieves users info
    */
    getSessionsInfo(extraHttpRequestParams?: any): Observable<SessionsInfo>;

    /**
    * Retrieves users info
    * Retrieves users info
    */
    getUsersInfo(extraHttpRequestParams?: any): Observable<UsersInfo>;

}
