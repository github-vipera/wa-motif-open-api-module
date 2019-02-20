/**
 * Motif App Content Service API
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

import { AppCheckRequest } from '../model/appCheckRequest';
import { AppCheckResponse } from '../model/appCheckResponse';
import { ApplicationVersion } from '../model/applicationVersion';
import { Engine } from '../model/engine';
import { EngineCreate } from '../model/engineCreate';
import { EngineUpdate } from '../model/engineUpdate';
import { ErrorVipera } from '../model/errorVipera';


import { Configuration }                                     from '../configuration';


export interface EnginesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Dynamic engine version check
    * Dynamic engine version check
    * @param domain Domain Name
    * @param engine Engine Name
    * @param appCheckRequest 
    */
    checkEngine(domain: string, engine: string, appCheckRequest?: AppCheckRequest, extraHttpRequestParams?: any): Observable<AppCheckResponse>;

    /**
    * Registers a new dynamic engine configuration
    * Registers a new dynamic engine configuration
    * @param domain Domain Name
    * @param engineCreate 
    */
    createEngine(domain: string, engineCreate?: EngineCreate, extraHttpRequestParams?: any): Observable<Engine>;

    /**
    * Deletes a dynamic engine configuration
    * Deletes a dynamic engine configuration
    * @param domain Domain Name
    * @param engine Engine Name
    */
    deleteEngine(domain: string, engine: string, extraHttpRequestParams?: any): Observable<any>;

    /**
    * Deletes all tracked engines versions
    * Deletes all tracked engines versions
    * @param domain Domain Name
    */
    deleteTrackedEnginesVersions(domain: string, extraHttpRequestParams?: any): Observable<any>;

    /**
    * Looks up a dynamic engine configuration
    * Looks up a dynamic engine configuration
    * @param domain Domain Name
    * @param engine Engine Name
    */
    getEngine(domain: string, engine: string, extraHttpRequestParams?: any): Observable<Engine>;

    /**
    * Looks up all dynamic engine configurations for a given domain
    * Looks up all dynamic engine configurations for a given domain
    * @param domain Domain Name
    */
    getEngines(domain: string, extraHttpRequestParams?: any): Observable<Array<Engine>>;

    /**
    * Retrieve tracked engine versions
    * Retrieve tracked engine versions
    * @param domain Domain Name
    * @param engine Engine Name
    */
    getTrackedEngineVersions(domain: string, engine: string, extraHttpRequestParams?: any): Observable<Array<string>>;

    /**
    * Lists all tracked engines versions
    * Lists all tracked engines versions
    * @param domain Domain Name
    */
    getTrackedEnginesVersions(domain: string, extraHttpRequestParams?: any): Observable<Array<ApplicationVersion>>;

    /**
    * Updates a registered dynamic engine configuration
    * Updates a registered dynamic engine configuration
    * @param domain Domain Name
    * @param engine Engine Name
    * @param engineUpdate 
    */
    updateEngine(domain: string, engine: string, engineUpdate?: EngineUpdate, extraHttpRequestParams?: any): Observable<any>;

}
