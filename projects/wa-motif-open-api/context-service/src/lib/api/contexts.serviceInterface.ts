/**
 * Motif Context Service API
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
import { ServiceContext } from '../model/serviceContext';
import { ServiceContextCreate } from '../model/serviceContextCreate';
import { ServiceContextList } from '../model/serviceContextList';
import { ServiceContextUpdate } from '../model/serviceContextUpdate';


import { Configuration }                                     from '../configuration';


export interface ContextsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Creates a Service Context
    * Creates a Service Context
    * @param domain Domain Name
    * @param application Application Name
    * @param serviceContextCreate 
    */
    createContext(domain: string, application: string, serviceContextCreate?: ServiceContextCreate, extraHttpRequestParams?: any): Observable<ServiceContext>;

    /**
    * Deletes a Service Context
    * Deletes a Service Context
    * @param domain Domain Name
    * @param application Application Name
    * @param context Context Name
    */
    deleteContext(domain: string, application: string, context: string, extraHttpRequestParams?: any): Observable<any>;

    /**
    * Retrieves all Service Contexts given an application
    * Retrieves all Service Contexts given an application
    * @param domain Domain Name
    * @param application Application Name
    */
    getApplicationContexts(domain: string, application: string, extraHttpRequestParams?: any): Observable<ServiceContextList>;

    /**
    * Retrieves a Service Context
    * Retrieves a Service Context
    * @param domain Domain Name
    * @param application Application Name
    * @param context Context Name
    */
    getContext(domain: string, application: string, context: string, extraHttpRequestParams?: any): Observable<ServiceContext>;

    /**
    * Retrieves all Service Contexts
    * Retrieves all Service Contexts
    */
    getContexts(extraHttpRequestParams?: any): Observable<ServiceContextList>;

    /**
    * Updates a Service Context
    * Updates a Service Context
    * @param domain Domain Name
    * @param application Application Name
    * @param context Context Name
    * @param serviceContextUpdate 
    */
    updateContext(domain: string, application: string, context: string, serviceContextUpdate?: ServiceContextUpdate, extraHttpRequestParams?: any): Observable<any>;

}
