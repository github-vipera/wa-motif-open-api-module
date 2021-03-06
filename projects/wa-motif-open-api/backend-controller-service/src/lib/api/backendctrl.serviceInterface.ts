/**
 * Motif Backend Controller Service API
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

import { ErrorVipera } from '../model/errorVipera';
import { UserActualData } from '../model/userActualData';
import { UserCreate } from '../model/userCreate';
import { UserUpdate } from '../model/userUpdate';


import { Configuration }                                     from '../configuration';


export interface BackendctrlServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Blocks an user
    * Blocks an user
    * @param domain Domain Name
    * @param userId User Id
    */
    blockUser(domain: string, userId: string, extraHttpRequestParams?: any): Observable<object>;

    /**
    * Creates an user
    * Creates an user
    * @param domain Domain Name
    * @param userCreate 
    */
    createUser(domain: string, userCreate?: UserCreate, extraHttpRequestParams?: any): Observable<UserActualData>;

    /**
    * Reactivates an user
    * Reactivates an user
    * @param domain Domain Name
    * @param userId User Id
    */
    reactivateUser(domain: string, userId: string, extraHttpRequestParams?: any): Observable<UserActualData>;

    /**
    * Updates an user
    * Updates an user
    * @param domain Domain Name
    * @param userId User Id
    * @param userUpdate 
    */
    updateUser(domain: string, userId: string, userUpdate?: UserUpdate, extraHttpRequestParams?: any): Observable<object>;

}
