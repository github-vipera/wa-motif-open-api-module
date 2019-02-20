/**
 * Motif Security Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@vipera.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { ErrorVipera } from '../model/errorVipera';
import { Session } from '../model/session';


import { Configuration }                                     from '../configuration';


export interface SecurityServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Close session
    * Close session
    * @param session Session
    */
    closeSession(session: string, extraHttpRequestParams?: any): Observable<any>;

    /**
    * Retrieve open sessions
    * Retrieve open sessions
    * @param session Session
    * @param channel Channel
    * @param domain Domain
    * @param application Application
    * @param clientIp Client IP
    * @param user User
    * @param page Page (omit to retrieve all records at once)
    * @param pageSize Page size
    */
    getSessions(session?: string, channel?: string, domain?: string, application?: string, clientIp?: string, user?: string, page?: number, pageSize?: number, extraHttpRequestParams?: any): Observable<Array<Session>>;

}
