/**
 * Motif Counters and Thresholds Service API
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

import { CounterEntity } from '../model/counterEntity';
import { ErrorVipera } from '../model/errorVipera';
import { Variation } from '../model/variation';


import { Configuration }                                     from '../configuration';


export interface UsersServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Retrieves User Counters Values
    * Retrieves User Counters Values
    * @param domain Domain Name
    * @param userId User Id
    * @param counterInfo Counter Info Name
    * @param page Page (omit to retrieve all records at once)
    * @param pageSize Page size
    * @param sort Sorting fields
    */
    getUserCounters(domain: string, userId: string, counterInfo?: string, page?: number, pageSize?: number, sort?: string, extraHttpRequestParams?: any): Observable<Array<CounterEntity>>;

    /**
    * Updates User Counter Value
    * Updates User Counter Value
    * @param counterInfo Counter Info name
    * @param domain Domain Name
    * @param userId User Id
    * @param variation 
    */
    updateUserCounter(counterInfo: string, domain: string, userId: string, variation?: Variation, extraHttpRequestParams?: any): Observable<object>;

}
