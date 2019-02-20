/**
 * Motif Plugin Auth Service API
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
import { UserRegistration } from '../model/userRegistration';
import { UserStatus } from '../model/userStatus';


import { Configuration }                                     from '../configuration';


export interface AuthServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Registers user
    * Registers user
    * @param domain The domain
    * @param userRegistration 
    */
    registerUser(domain: string, userRegistration?: UserRegistration, extraHttpRequestParams?: any): Observable<UserStatus>;

}
