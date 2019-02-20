/**
 * Motif Platform Service API
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

import { Domain } from '../model/domain';
import { DomainCreate } from '../model/domainCreate';
import { DomainUpdate } from '../model/domainUpdate';
import { ErrorVipera } from '../model/errorVipera';


import { Configuration }                                     from '../configuration';


export interface DomainsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Creates a domain
    * Creates a domain
    * @param domainCreate 
    */
    createDomain(domainCreate?: DomainCreate, extraHttpRequestParams?: any): Observable<Domain>;

    /**
    * Deletes domain
    * Deletes domain
    * @param domain Domain Name
    */
    deleteDomain(domain: string, extraHttpRequestParams?: any): Observable<any>;

    /**
    * Retrieves domain
    * Retrieves domain
    * @param domain Domain Name
    */
    getDomain(domain: string, extraHttpRequestParams?: any): Observable<Domain>;

    /**
    * Retrieves domains
    * Retrieves domains
    */
    getDomains(extraHttpRequestParams?: any): Observable<Array<Domain>>;

    /**
    * Updates a domain
    * Updates a domain
    * @param domain Domain Name
    * @param domainUpdate 
    */
    updateDomain(domain: string, domainUpdate?: DomainUpdate, extraHttpRequestParams?: any): Observable<any>;

}
