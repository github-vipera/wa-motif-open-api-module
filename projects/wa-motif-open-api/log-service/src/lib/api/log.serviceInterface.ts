/**
 * Motif Log Service API
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
import { LogLevel } from '../model/logLevel';
import { LogLevelUpdate } from '../model/logLevelUpdate';
import { LogTail } from '../model/logTail';


import { Configuration }                                     from '../configuration';


export interface LogServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Download current log
    * Download current log
    */
    downloadCurrentLog(extraHttpRequestParams?: any): Observable<Blob>;

    /**
    * Retrieves component log level
    * Retrieves component log level
    * @param component Component
    */
    getComponentLogLevel(component: string, extraHttpRequestParams?: any): Observable<LogLevel>;

    /**
    * Retrieves default component log level
    * Retrieves default component log level
    */
    getDefaultComponentLogLevel(extraHttpRequestParams?: any): Observable<LogLevel>;

    /**
    * Retrieves root log level
    * Retrieves root log level
    */
    getRootLogLevel(extraHttpRequestParams?: any): Observable<LogLevel>;

    /**
    * Set component log level
    * Set component log level
    * @param component Component
    * @param logLevelUpdate 
    */
    setComponentLogLevel(component: string, logLevelUpdate?: LogLevelUpdate, extraHttpRequestParams?: any): Observable<any>;

    /**
    * Set default component log level
    * Set default component log level
    * @param logLevelUpdate 
    */
    setDefaultComponentLogLevel(logLevelUpdate?: LogLevelUpdate, extraHttpRequestParams?: any): Observable<any>;

    /**
    * Set root log level
    * Set root log level
    * @param logLevelUpdate 
    */
    setRootLogLevel(logLevelUpdate?: LogLevelUpdate, extraHttpRequestParams?: any): Observable<any>;

    /**
    * Tail current log
    * Tail current log
    * @param lines Number of lines to tail
    */
    tailCurrentLog(lines: number, extraHttpRequestParams?: any): Observable<LogTail>;

}
