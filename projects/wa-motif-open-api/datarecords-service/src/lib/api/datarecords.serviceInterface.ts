/**
 * Motif Datarecords Service API
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

import { DatarecordList } from '../model/datarecordList';
import { ErrorVipera } from '../model/errorVipera';


import { Configuration }                                     from '../configuration';


export interface DatarecordsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Export datarecords as csv file
    * Export datarecords as csv file
    * @param type Datarecords type (PERFORMANCE, TRANSACTION, DIAGNOSTIC, SECURITY...)
    * @param hashedSession Hashed session (SHA512)
    * @param usersId User natural ID
    * @param operations Operations list
    * @param fromDate From date (2016-08-30 17:12:46Z)
    * @param toDate To date (2016-08-30 17:12:46Z)
    * @param resultCode Result code
    * @param anyError Default value is false
    * @param singleCsv Default value is true
    */
    exportDatarecords(type: string, hashedSession?: string, usersId?: number, operations?: Array<string>, fromDate?: Date, toDate?: Date, resultCode?: string, anyError?: boolean, singleCsv?: boolean, extraHttpRequestParams?: any): Observable<Blob>;

    /**
    * Get datarecords by type
    * Get datarecords by type
    * @param type Datarecords type (PERFORMANCE, TRANSACTION, DIAGNOSTIC, SECURITY...)
    * @param fromDate From date (2016-08-30 17:12:46Z)
    * @param toDate To date (2016-08-30 17:12:46Z)
    * @param page Page (omit to retrieve all records at once)
    * @param pageSize Page size
    * @param sort Sorting fields
    */
    getDatarecords(type: string, fromDate?: Date, toDate?: Date, page?: number, pageSize?: number, sort?: string, extraHttpRequestParams?: any): Observable<DatarecordList>;

    /**
    * Retrieve datarecords types
    * Retrieve datarecords types
    */
    getDatarecordsTypes(extraHttpRequestParams?: any): Observable<Array<string>>;

    /**
    * Verify datarecords export with these param queries don&#39;t exceed limits
    * Verify datarecords export with these param queries don&#39;t exceed limits
    * @param type Datarecords type (PERFORMANCE, TRANSACTION, DIAGNOSTIC, SECURITY...)
    * @param hashedSession Hashed session (SHA512)
    * @param usersId User natural ID
    * @param operations Operations list
    * @param fromDate From date (2016-08-30 17:12:46Z)
    * @param toDate To date (2016-08-30 17:12:46Z)
    * @param resultCode Result code
    * @param anyError Default value is false
    * @param singleCsv Default value is true
    */
    verifyDatarecordsExport(type: string, hashedSession?: string, usersId?: number, operations?: Array<string>, fromDate?: Date, toDate?: Date, resultCode?: string, anyError?: boolean, singleCsv?: boolean, extraHttpRequestParams?: any): Observable<any>;

}
