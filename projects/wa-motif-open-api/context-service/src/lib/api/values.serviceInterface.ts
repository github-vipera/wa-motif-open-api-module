/**
 * Motif Context Service API
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
import { ServiceContextValue } from '../model/serviceContextValue';
import { Value } from '../model/value';
import { ValueCreate } from '../model/valueCreate';


import { Configuration }                                     from '../configuration';


export interface ValuesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Creates a Service Context Value
    * Creates a Service Context Value
    * @param domain Domain Name
    * @param application Application Name
    * @param context Context Name
    * @param valueCreate 
    */
    createValue(domain: string, application: string, context: string, valueCreate?: ValueCreate, extraHttpRequestParams?: any): Observable<ServiceContextValue>;

    /**
    * Deletes a Service Context Value
    * Deletes a Service Context Value
    * @param domain Domain Name
    * @param application Application Name
    * @param context Context Name
    * @param attribute Attribute Name
    */
    deleteValue(domain: string, application: string, context: string, attribute: string, extraHttpRequestParams?: any): Observable<object>;

    /**
    * Retrieves a Service Context Value
    * Retrieves a Service Context Value
    * @param domain Domain Name
    * @param application Application Name
    * @param context Context Name
    * @param attribute Attribute Name
    */
    getValue(domain: string, application: string, context: string, attribute: string, extraHttpRequestParams?: any): Observable<ServiceContextValue>;

    /**
    * Retrieves Service Context Values
    * Retrieves Service Context Values
    * @param domain Domain Name
    * @param application Application Name
    * @param context Context Name
    */
    getValues(domain: string, application: string, context: string, extraHttpRequestParams?: any): Observable<Array<ServiceContextValue>>;

    /**
    * Updates a Service Context Value
    * Updates a Service Context Value
    * @param domain Domain Name
    * @param application Application Name
    * @param context Context Name
    * @param attribute Attribute Name
    * @param value 
    */
    updateValue(domain: string, application: string, context: string, attribute: string, value?: Value, extraHttpRequestParams?: any): Observable<object>;

}
