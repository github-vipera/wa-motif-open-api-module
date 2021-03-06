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

import { ErrorVipera } from '../model/errorVipera';
import { ThresholdInfo } from '../model/thresholdInfo';
import { ThresholdInfoEntity } from '../model/thresholdInfoEntity';


import { Configuration }                                     from '../configuration';


export interface ThresholdsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Creates Threshold Info
    * Creates Threshold Info
    * @param thresholdInfo 
    */
    createThresholdInfo(thresholdInfo?: ThresholdInfo, extraHttpRequestParams?: any): Observable<ThresholdInfoEntity>;

    /**
    * Deletes Threshold Info
    * Deletes Threshold Info
    * @param threshold Threshold name
    */
    deleteThresholdInfo(threshold: string, extraHttpRequestParams?: any): Observable<object>;

    /**
    * Retrieves Threshold Info
    * Retrieves Threshold Info
    * @param threshold Threshold name
    */
    getThresholdInfo(threshold: string, extraHttpRequestParams?: any): Observable<ThresholdInfoEntity>;

    /**
    * Updates Threshold Info
    * Updates Threshold Info
    * @param threshold Threshold name
    * @param thresholdInfo 
    */
    updateThresholdInfo(threshold: string, thresholdInfo?: ThresholdInfo, extraHttpRequestParams?: any): Observable<object>;

}
