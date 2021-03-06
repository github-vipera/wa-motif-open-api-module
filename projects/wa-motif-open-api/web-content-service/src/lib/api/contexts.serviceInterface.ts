/**
 * Motif Web Content Service API
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
import { ServiceContext } from '../model/serviceContext';
import { ServiceContextAttribute } from '../model/serviceContextAttribute';
import { WebContentContextCreate } from '../model/webContentContextCreate';
import { WebContentContextUpdate } from '../model/webContentContextUpdate';


import { Configuration }                                     from '../configuration';


export interface ContextsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Creates a Web Content Context
    * Creates a Web Content Context
    * @param domain Domain Name
    * @param application Application Name
    * @param webContentContextCreate 
    */
    createContext(domain: string, application: string, webContentContextCreate?: WebContentContextCreate, extraHttpRequestParams?: any): Observable<ServiceContext>;

    /**
    * Deletes a Web Content Context
    * Deletes a Web Content Context
    * @param domain Domain Name
    * @param application Application Name
    * @param contextName 
    */
    deleteContext(domain: string, application: string, contextName: string, extraHttpRequestParams?: any): Observable<object>;

    /**
    * Retrieves Web Content Context
    * Retrieves Web Content Context
    * @param domain Domain Name
    * @param application Application Name
    * @param contextName 
    */
    getContext(domain: string, application: string, contextName: string, extraHttpRequestParams?: any): Observable<ServiceContext>;

    /**
    * Retrieves Web Content Contexts list
    * Retrieves Web Content Contexts list
    * @param domain Domain Name
    * @param application Application Name
    */
    getContexts(domain: string, application: string, extraHttpRequestParams?: any): Observable<Array<ServiceContext>>;

    /**
    * Retrieves Web Content Context supported attributes
    * Retrieves Web Content Context supported attributes
    */
    getSupportedAttributes(extraHttpRequestParams?: any): Observable<Array<ServiceContextAttribute>>;

    /**
    * Update a Web Content Context
    * Update a Web Content Context
    * @param domain Domain Name
    * @param application Application Name
    * @param contextName 
    * @param webContentContextUpdate 
    */
    updateContext(domain: string, application: string, contextName: string, webContentContextUpdate?: WebContentContextUpdate, extraHttpRequestParams?: any): Observable<object>;

}
