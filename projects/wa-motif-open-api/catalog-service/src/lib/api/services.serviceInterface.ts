/**
 * Motif Service Catalog API
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
import { Service } from '../model/service';
import { ServiceCreate } from '../model/serviceCreate';
import { ServiceUpdate } from '../model/serviceUpdate';


import { Configuration }                                     from '../configuration';


export interface ServicesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Creates service
    * Creates service
    * @param channel Channel Name (REST,JSON,SMS,...)
    * @param domain Domain Name
    * @param application Application Name
    * @param serviceCreate 
    */
    createService(channel: string, domain: string, application: string, serviceCreate?: ServiceCreate, extraHttpRequestParams?: any): Observable<Service>;

    /**
    * Deletes service
    * Deletes service
    * @param channel Channel Name (REST,JSON,SMS,...)
    * @param domain Domain Name
    * @param application Application Name
    * @param service Service Name
    */
    deleteService(channel: string, domain: string, application: string, service: string, extraHttpRequestParams?: any): Observable<any>;

    /**
    * Collects service infos
    * Collects service infos
    * @param channel Channel Name (REST,JSON,SMS,...)
    * @param domain Domain Name
    * @param application Application Name
    * @param service Service Name
    */
    getService(channel: string, domain: string, application: string, service: string, extraHttpRequestParams?: any): Observable<Service>;

    /**
    * Updates service
    * Updates service
    * @param channel Channel Name (REST,JSON,SMS,...)
    * @param domain Domain Name
    * @param application Application Name
    * @param service Service Name
    * @param serviceUpdate 
    */
    updateService(channel: string, domain: string, application: string, service: string, serviceUpdate?: ServiceUpdate, extraHttpRequestParams?: any): Observable<any>;

}